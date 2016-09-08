/**
 * Autogenerated by Thrift Compiler (0.9.3)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.IO;
using Thrift;
using Thrift.Collections;
using System.Runtime.Serialization;
using Thrift.Protocol;
using Thrift.Transport;

namespace Worldpay.Innovation.WPWithin.Rpc
{
  public partial class WPWithinCallback {
    /// <summary>
    /// WorldpayWithin Callback Service - RPC clients implement this service to enable callbacks from WorldpayWithin Service
    /// </summary>
    public interface Iface {
      void beginServiceDelivery(int serviceId, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsToSupply);
      #if SILVERLIGHT
      IAsyncResult Begin_beginServiceDelivery(AsyncCallback callback, object state, int serviceId, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsToSupply);
      void End_beginServiceDelivery(IAsyncResult asyncResult);
      #endif
      void endServiceDelivery(int serviceID, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsReceived);
      #if SILVERLIGHT
      IAsyncResult Begin_endServiceDelivery(AsyncCallback callback, object state, int serviceId, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsReceived);
      void End_endServiceDelivery(IAsyncResult asyncResult);
      #endif
    }

    /// <summary>
    /// WorldpayWithin Callback Service - RPC clients implement this service to enable callbacks from WorldpayWithin Service
    /// </summary>
    public class Client : IDisposable, Iface {
      public Client(TProtocol prot) : this(prot, prot)
      {
      }

      public Client(TProtocol iprot, TProtocol oprot)
      {
        iprot_ = iprot;
        oprot_ = oprot;
      }

      protected TProtocol iprot_;
      protected TProtocol oprot_;
      protected int seqid_;

      public TProtocol InputProtocol
      {
        get { return iprot_; }
      }
      public TProtocol OutputProtocol
      {
        get { return oprot_; }
      }


      #region " IDisposable Support "
      private bool _IsDisposed;

      // IDisposable
      public void Dispose()
      {
        Dispose(true);
      }
      

      protected virtual void Dispose(bool disposing)
      {
        if (!_IsDisposed)
        {
          if (disposing)
          {
            if (iprot_ != null)
            {
              ((IDisposable)iprot_).Dispose();
            }
            if (oprot_ != null)
            {
              ((IDisposable)oprot_).Dispose();
            }
          }
        }
        _IsDisposed = true;
      }
      #endregion


      
      #if SILVERLIGHT
      public IAsyncResult Begin_beginServiceDelivery(AsyncCallback callback, object state, int serviceId, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsToSupply)
      {
        return send_beginServiceDelivery(callback, state, serviceId, serviceDeliveryToken, unitsToSupply);
      }

      public void End_beginServiceDelivery(IAsyncResult asyncResult)
      {
        oprot_.Transport.EndFlush(asyncResult);
        recv_beginServiceDelivery();
      }

      #endif

      public void beginServiceDelivery(int serviceId, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsToSupply)
      {
        #if !SILVERLIGHT
        send_beginServiceDelivery(serviceId, serviceDeliveryToken, unitsToSupply);
        recv_beginServiceDelivery();

        #else
        var asyncResult = Begin_beginServiceDelivery(null, null, serviceId, serviceDeliveryToken, unitsToSupply);
        End_beginServiceDelivery(asyncResult);

        #endif
      }
      #if SILVERLIGHT
      public IAsyncResult send_beginServiceDelivery(AsyncCallback callback, object state, int serviceId, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsToSupply)
      #else
      public void send_beginServiceDelivery(int serviceID, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsToSupply)
      #endif
      {
        oprot_.WriteMessageBegin(new TMessage("beginServiceDelivery", TMessageType.Call, seqid_));
        beginServiceDelivery_args args = new beginServiceDelivery_args();
        args.ServiceID = serviceID;
        args.ServiceDeliveryToken = serviceDeliveryToken;
        args.UnitsToSupply = unitsToSupply;
        args.Write(oprot_);
        oprot_.WriteMessageEnd();
        #if SILVERLIGHT
        return oprot_.Transport.BeginFlush(callback, state);
        #else
        oprot_.Transport.Flush();
        #endif
      }

      public void recv_beginServiceDelivery()
      {
        TMessage msg = iprot_.ReadMessageBegin();
        if (msg.Type == TMessageType.Exception) {
          TApplicationException x = TApplicationException.Read(iprot_);
          iprot_.ReadMessageEnd();
          throw x;
        }
        beginServiceDelivery_result result = new beginServiceDelivery_result();
        result.Read(iprot_);
        iprot_.ReadMessageEnd();
        if (result.Err != null) {
          throw result.Err;
        }
        return;
      }

      
      #if SILVERLIGHT
      public IAsyncResult Begin_endServiceDelivery(AsyncCallback callback, object state, int serviceId, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsReceived)
      {
        return send_endServiceDelivery(callback, state, serviceId, serviceDeliveryToken, unitsReceived);
      }

      public void End_endServiceDelivery(IAsyncResult asyncResult)
      {
        oprot_.Transport.EndFlush(asyncResult);
        recv_endServiceDelivery();
      }

      #endif

      public void endServiceDelivery(int serviceID, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsReceived)
      {
        #if !SILVERLIGHT
        send_endServiceDelivery(serviceID, serviceDeliveryToken, unitsReceived);
        recv_endServiceDelivery();

        #else
        var asyncResult = Begin_endServiceDelivery(null, null, serviceId, serviceDeliveryToken, unitsReceived);
        End_endServiceDelivery(asyncResult);

        #endif
      }
      #if SILVERLIGHT
      public IAsyncResult send_endServiceDelivery(AsyncCallback callback, object state, int serviceId, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsReceived)
      #else
      public void send_endServiceDelivery(int serviceID, Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken serviceDeliveryToken, int unitsReceived)
      #endif
      {
        oprot_.WriteMessageBegin(new TMessage("endServiceDelivery", TMessageType.Call, seqid_));
        endServiceDelivery_args args = new endServiceDelivery_args();
        args.ServiceID = serviceID;
        args.ServiceDeliveryToken = serviceDeliveryToken;
        args.UnitsReceived = unitsReceived;
        args.Write(oprot_);
        oprot_.WriteMessageEnd();
        #if SILVERLIGHT
        return oprot_.Transport.BeginFlush(callback, state);
        #else
        oprot_.Transport.Flush();
        #endif
      }

      public void recv_endServiceDelivery()
      {
        TMessage msg = iprot_.ReadMessageBegin();
        if (msg.Type == TMessageType.Exception) {
          TApplicationException x = TApplicationException.Read(iprot_);
          iprot_.ReadMessageEnd();
          throw x;
        }
        endServiceDelivery_result result = new endServiceDelivery_result();
        result.Read(iprot_);
        iprot_.ReadMessageEnd();
        if (result.Err != null) {
          throw result.Err;
        }
        return;
      }

    }
    public class Processor : TProcessor {
      public Processor(Iface iface)
      {
        iface_ = iface;
        processMap_["beginServiceDelivery"] = beginServiceDelivery_Process;
        processMap_["endServiceDelivery"] = endServiceDelivery_Process;
      }

      protected delegate void ProcessFunction(int seqid, TProtocol iprot, TProtocol oprot);
      private Iface iface_;
      protected Dictionary<string, ProcessFunction> processMap_ = new Dictionary<string, ProcessFunction>();

      public bool Process(TProtocol iprot, TProtocol oprot)
      {
        try
        {
          TMessage msg = iprot.ReadMessageBegin();
          ProcessFunction fn;
          processMap_.TryGetValue(msg.Name, out fn);
          if (fn == null) {
            TProtocolUtil.Skip(iprot, TType.Struct);
            iprot.ReadMessageEnd();
            TApplicationException x = new TApplicationException (TApplicationException.ExceptionType.UnknownMethod, "Invalid method name: '" + msg.Name + "'");
            oprot.WriteMessageBegin(new TMessage(msg.Name, TMessageType.Exception, msg.SeqID));
            x.Write(oprot);
            oprot.WriteMessageEnd();
            oprot.Transport.Flush();
            return true;
          }
          fn(msg.SeqID, iprot, oprot);
        }
        catch (IOException)
        {
          return false;
        }
        return true;
      }

      public void beginServiceDelivery_Process(int seqid, TProtocol iprot, TProtocol oprot)
      {
        beginServiceDelivery_args args = new beginServiceDelivery_args();
        args.Read(iprot);
        iprot.ReadMessageEnd();
        beginServiceDelivery_result result = new beginServiceDelivery_result();
        try {
          iface_.beginServiceDelivery(args.ServiceID.Value, args.ServiceDeliveryToken, args.UnitsToSupply.Value);
        } catch (Worldpay.Innovation.WPWithin.Rpc.Types.Error err) {
          result.Err = err;
        }
        oprot.WriteMessageBegin(new TMessage("beginServiceDelivery", TMessageType.Reply, seqid)); 
        result.Write(oprot);
        oprot.WriteMessageEnd();
        oprot.Transport.Flush();
      }

      public void endServiceDelivery_Process(int seqid, TProtocol iprot, TProtocol oprot)
      {
        endServiceDelivery_args args = new endServiceDelivery_args();
        args.Read(iprot);
        iprot.ReadMessageEnd();
        endServiceDelivery_result result = new endServiceDelivery_result();
        try {
          iface_.endServiceDelivery(args.ServiceID.Value, args.ServiceDeliveryToken, args.UnitsReceived.Value);
        } catch (Worldpay.Innovation.WPWithin.Rpc.Types.Error err) {
          result.Err = err;
        }
        oprot.WriteMessageBegin(new TMessage("endServiceDelivery", TMessageType.Reply, seqid)); 
        result.Write(oprot);
        oprot.WriteMessageEnd();
        oprot.Transport.Flush();
      }

    }


    #if !SILVERLIGHT
    [Serializable]
    #endif
    public partial class beginServiceDelivery_args : TBase
    {

      public int? ServiceID { get; set; }

      public Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken ServiceDeliveryToken { get; set; }

      public int? UnitsToSupply { get; set; }

      public beginServiceDelivery_args() {
      }

      public void Read (TProtocol iprot)
      {
        iprot.IncrementRecursionDepth();
        try
        {
          TField field;
          iprot.ReadStructBegin();
          while (true)
          {
            field = iprot.ReadFieldBegin();
            if (field.Type == TType.Stop) { 
              break;
            }
            switch (field.ID)
            {
              case 1:
                if (field.Type == TType.I32) {
                  ServiceID = iprot.ReadI32();
                } else { 
                  TProtocolUtil.Skip(iprot, field.Type);
                }
                break;
              case 2:
                if (field.Type == TType.Struct) {
                  ServiceDeliveryToken = new Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken();
                  ServiceDeliveryToken.Read(iprot);
                } else { 
                  TProtocolUtil.Skip(iprot, field.Type);
                }
                break;
              case 3:
                if (field.Type == TType.I32) {
                  UnitsToSupply = iprot.ReadI32();
                } else { 
                  TProtocolUtil.Skip(iprot, field.Type);
                }
                break;
              default: 
                TProtocolUtil.Skip(iprot, field.Type);
                break;
            }
            iprot.ReadFieldEnd();
          }
          iprot.ReadStructEnd();
        }
        finally
        {
          iprot.DecrementRecursionDepth();
        }
      }

      public void Write(TProtocol oprot) {
        oprot.IncrementRecursionDepth();
        try
        {
          TStruct struc = new TStruct("beginServiceDelivery_args");
          oprot.WriteStructBegin(struc);
          TField field = new TField();
          if (ServiceID != null) {
            field.Name = "serviceId";
            field.Type = TType.I32;
            field.ID = 1;
            oprot.WriteFieldBegin(field);
            oprot.WriteI32(ServiceID.Value);
            oprot.WriteFieldEnd();
          }
          if (ServiceDeliveryToken != null) {
            field.Name = "serviceDeliveryToken";
            field.Type = TType.Struct;
            field.ID = 2;
            oprot.WriteFieldBegin(field);
            ServiceDeliveryToken.Write(oprot);
            oprot.WriteFieldEnd();
          }
          if (UnitsToSupply != null) {
            field.Name = "unitsToSupply";
            field.Type = TType.I32;
            field.ID = 3;
            oprot.WriteFieldBegin(field);
            oprot.WriteI32(UnitsToSupply.Value);
            oprot.WriteFieldEnd();
          }
          oprot.WriteFieldStop();
          oprot.WriteStructEnd();
        }
        finally
        {
          oprot.DecrementRecursionDepth();
        }
      }

      public override string ToString() {
        StringBuilder __sb = new StringBuilder("beginServiceDelivery_args(");
        bool __first = true;
        if (ServiceID != null) {
          if(!__first) { __sb.Append(", "); }
          __first = false;
          __sb.Append("ServiceID: ");
          __sb.Append(ServiceID);
        }
        if (ServiceDeliveryToken != null) {
          if(!__first) { __sb.Append(", "); }
          __first = false;
          __sb.Append("ServiceDeliveryToken: ");
          __sb.Append(ServiceDeliveryToken== null ? "<null>" : ServiceDeliveryToken.ToString());
        }
        if (UnitsToSupply != null) {
          if(!__first) { __sb.Append(", "); }
          __first = false;
          __sb.Append("UnitsToSupply: ");
          __sb.Append(UnitsToSupply);
        }
        __sb.Append(")");
        return __sb.ToString();
      }

    }


    #if !SILVERLIGHT
    [Serializable]
    #endif
    public partial class beginServiceDelivery_result : TBase
    {

      public Worldpay.Innovation.WPWithin.Rpc.Types.Error Err { get; set; }

      public beginServiceDelivery_result() {
      }

      public void Read (TProtocol iprot)
      {
        iprot.IncrementRecursionDepth();
        try
        {
          TField field;
          iprot.ReadStructBegin();
          while (true)
          {
            field = iprot.ReadFieldBegin();
            if (field.Type == TType.Stop) { 
              break;
            }
            switch (field.ID)
            {
              case 1:
                if (field.Type == TType.Struct) {
                  Err = new Worldpay.Innovation.WPWithin.Rpc.Types.Error();
                  Err.Read(iprot);
                } else { 
                  TProtocolUtil.Skip(iprot, field.Type);
                }
                break;
              default: 
                TProtocolUtil.Skip(iprot, field.Type);
                break;
            }
            iprot.ReadFieldEnd();
          }
          iprot.ReadStructEnd();
        }
        finally
        {
          iprot.DecrementRecursionDepth();
        }
      }

      public void Write(TProtocol oprot) {
        oprot.IncrementRecursionDepth();
        try
        {
          TStruct struc = new TStruct("beginServiceDelivery_result");
          oprot.WriteStructBegin(struc);
          TField field = new TField();

          if (this.Err != null) {
            field.Name = "Err";
            field.Type = TType.Struct;
            field.ID = 1;
            oprot.WriteFieldBegin(field);
            Err.Write(oprot);
            oprot.WriteFieldEnd();
          }
          oprot.WriteFieldStop();
          oprot.WriteStructEnd();
        }
        finally
        {
          oprot.DecrementRecursionDepth();
        }
      }

      public override string ToString() {
        StringBuilder __sb = new StringBuilder("beginServiceDelivery_result(");
        bool __first = true;
        if (Err != null) {
          if(!__first) { __sb.Append(", "); }
          __first = false;
          __sb.Append("Err: ");
          __sb.Append(Err== null ? "<null>" : Err.ToString());
        }
        __sb.Append(")");
        return __sb.ToString();
      }

    }


    #if !SILVERLIGHT
    [Serializable]
    #endif
    public partial class endServiceDelivery_args : TBase
    {

      public int? ServiceID { get; set; }

      public Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken ServiceDeliveryToken { get; set; }

      public int? UnitsReceived { get; set; }

      public endServiceDelivery_args() {
      }

      public void Read (TProtocol iprot)
      {
        iprot.IncrementRecursionDepth();
        try
        {
          TField field;
          iprot.ReadStructBegin();
          while (true)
          {
            field = iprot.ReadFieldBegin();
            if (field.Type == TType.Stop) { 
              break;
            }
            switch (field.ID)
            {
              case 1:
                if (field.Type == TType.I32) {
                  ServiceID = iprot.ReadI32();
                } else { 
                  TProtocolUtil.Skip(iprot, field.Type);
                }
                break;
              case 2:
                if (field.Type == TType.Struct) {
                  ServiceDeliveryToken = new Worldpay.Innovation.WPWithin.Rpc.Types.ServiceDeliveryToken();
                  ServiceDeliveryToken.Read(iprot);
                } else { 
                  TProtocolUtil.Skip(iprot, field.Type);
                }
                break;
              case 3:
                if (field.Type == TType.I32) {
                  UnitsReceived = iprot.ReadI32();
                } else { 
                  TProtocolUtil.Skip(iprot, field.Type);
                }
                break;
              default: 
                TProtocolUtil.Skip(iprot, field.Type);
                break;
            }
            iprot.ReadFieldEnd();
          }
          iprot.ReadStructEnd();
        }
        finally
        {
          iprot.DecrementRecursionDepth();
        }
      }

      public void Write(TProtocol oprot) {
        oprot.IncrementRecursionDepth();
        try
        {
          TStruct struc = new TStruct("endServiceDelivery_args");
          oprot.WriteStructBegin(struc);
          TField field = new TField();
          if (ServiceID != null) {
            field.Name = "serviceId";
            field.Type = TType.I32;
            field.ID = 1;
            oprot.WriteFieldBegin(field);
            oprot.WriteI32(ServiceID.Value);
            oprot.WriteFieldEnd();
          }
          if (ServiceDeliveryToken != null) {
            field.Name = "serviceDeliveryToken";
            field.Type = TType.Struct;
            field.ID = 2;
            oprot.WriteFieldBegin(field);
            ServiceDeliveryToken.Write(oprot);
            oprot.WriteFieldEnd();
          }
          if (UnitsReceived != null) {
            field.Name = "unitsReceived";
            field.Type = TType.I32;
            field.ID = 3;
            oprot.WriteFieldBegin(field);
            oprot.WriteI32(UnitsReceived.Value);
            oprot.WriteFieldEnd();
          }
          oprot.WriteFieldStop();
          oprot.WriteStructEnd();
        }
        finally
        {
          oprot.DecrementRecursionDepth();
        }
      }

      public override string ToString() {
        StringBuilder __sb = new StringBuilder("endServiceDelivery_args(");
        bool __first = true;
        if (ServiceID != null) {
          if(!__first) { __sb.Append(", "); }
          __first = false;
          __sb.Append("ServiceID: ");
          __sb.Append(ServiceID);
        }
        if (ServiceDeliveryToken != null) {
          if(!__first) { __sb.Append(", "); }
          __first = false;
          __sb.Append("ServiceDeliveryToken: ");
          __sb.Append(ServiceDeliveryToken== null ? "<null>" : ServiceDeliveryToken.ToString());
        }
        if (UnitsReceived != null) {
          if(!__first) { __sb.Append(", "); }
          __first = false;
          __sb.Append("UnitsReceived: ");
          __sb.Append(UnitsReceived);
        }
        __sb.Append(")");
        return __sb.ToString();
      }

    }


    #if !SILVERLIGHT
    [Serializable]
    #endif
    public partial class endServiceDelivery_result : TBase
    {

      public Worldpay.Innovation.WPWithin.Rpc.Types.Error Err { get; set; }

      public endServiceDelivery_result() {
      }

      public void Read (TProtocol iprot)
      {
        iprot.IncrementRecursionDepth();
        try
        {
          TField field;
          iprot.ReadStructBegin();
          while (true)
          {
            field = iprot.ReadFieldBegin();
            if (field.Type == TType.Stop) { 
              break;
            }
            switch (field.ID)
            {
              case 1:
                if (field.Type == TType.Struct) {
                  Err = new Worldpay.Innovation.WPWithin.Rpc.Types.Error();
                  Err.Read(iprot);
                } else { 
                  TProtocolUtil.Skip(iprot, field.Type);
                }
                break;
              default: 
                TProtocolUtil.Skip(iprot, field.Type);
                break;
            }
            iprot.ReadFieldEnd();
          }
          iprot.ReadStructEnd();
        }
        finally
        {
          iprot.DecrementRecursionDepth();
        }
      }

      public void Write(TProtocol oprot) {
        oprot.IncrementRecursionDepth();
        try
        {
          TStruct struc = new TStruct("endServiceDelivery_result");
          oprot.WriteStructBegin(struc);
          TField field = new TField();

          if (this.Err != null) {
            field.Name = "Err";
            field.Type = TType.Struct;
            field.ID = 1;
            oprot.WriteFieldBegin(field);
            Err.Write(oprot);
            oprot.WriteFieldEnd();
          }
          oprot.WriteFieldStop();
          oprot.WriteStructEnd();
        }
        finally
        {
          oprot.DecrementRecursionDepth();
        }
      }

      public override string ToString() {
        StringBuilder __sb = new StringBuilder("endServiceDelivery_result(");
        bool __first = true;
        if (Err != null) {
          if(!__first) { __sb.Append(", "); }
          __first = false;
          __sb.Append("Err: ");
          __sb.Append(Err== null ? "<null>" : Err.ToString());
        }
        __sb.Append(")");
        return __sb.ToString();
      }

    }

  }
}