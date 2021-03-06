package servicediscovery

import (
	"errors"
	"net"
	"strings"
	"time"
)

// TODO CH : This is largely linked to UDP I/O at the moment - should generalise further

// Communicator Abstracted means of communication ..  Should allow for I/O over UDP/TCP/NFC/Bluetooth etc
type Communicator interface {
	Listen() (Connection, error)
	Connect(host string, port int) (Connection, error)
}

// Connection Abstracted connection
type Connection interface {
	Read([]byte) (int, string, error)
	Write([]byte) (int, error)
	Close() error
	SetProperty(key string, value interface{}) error
}

// UDPComm A UDP Communicator
type UDPComm struct {
	protocol string
	port     int
	udpConn  *UDPConn
}

// UDPConn A wrapped UDP connection - to allow mocking
type UDPConn struct {
	conn *net.UDPConn
}

// NewUDPComm Create a new UDP Communicator
// Port is the port to communicate on and the protocol is the protocol required i.e. udp, udp4, udp6
func NewUDPComm(port int, protocol string) (Communicator, error) {

	result := &UDPComm{
		protocol: protocol,
		port:     port,
	}

	return result, nil
}

// Listen for a connection
func (pc *UDPComm) Listen() (Connection, error) {

	srvAddr := &net.UDPAddr{
		IP:   net.IPv4allrouter,
		Port: pc.port,
	}

	conn, err := net.ListenUDP(pc.protocol, srvAddr)

	if err != nil {

		return nil, err
	}

	pc.udpConn = &UDPConn{
		conn: conn,
	}

	return pc.udpConn, err
}

// Connect to a host on a specified port
func (pc *UDPComm) Connect(host string, port int) (Connection, error) {

	_udpConn, err := net.DialUDP(pc.protocol, nil, &net.UDPAddr{
		IP:   net.ParseIP(host),
		Port: port,
	})

	pc.udpConn = &UDPConn{
		conn: _udpConn,
	}

	return pc.udpConn, err
}

func (conn *UDPConn) Read(b []byte) (int, string, error) {

	iRecv, addrRecv, err := conn.conn.ReadFromUDP(b)

	strAddrRecv := addrRecv.String()

	return iRecv, strAddrRecv, err
}

func (conn *UDPConn) Write(b []byte) (int, error) {

	return conn.conn.Write(b)
}

// Close a connection
func (conn *UDPConn) Close() error {

	return conn.conn.Close()
}

// SetProperty of a connection
func (conn *UDPConn) SetProperty(key string, value interface{}) error {

	if strings.EqualFold(key, "ReadDeadLine") {

		return conn.conn.SetDeadline(value.(time.Time))

	}

	return errors.New("Property not found...")
}
