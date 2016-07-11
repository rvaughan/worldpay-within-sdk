/**
 * Autogenerated by Thrift Compiler (0.9.3)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
package com.worldpay.innovation.wpwithin.rpc.types;

import org.apache.thrift.scheme.IScheme;
import org.apache.thrift.scheme.SchemeFactory;
import org.apache.thrift.scheme.StandardScheme;

import org.apache.thrift.scheme.TupleScheme;
import org.apache.thrift.protocol.TTupleProtocol;
import org.apache.thrift.protocol.TProtocolException;
import org.apache.thrift.EncodingUtils;
import org.apache.thrift.TException;
import org.apache.thrift.async.AsyncMethodCallback;
import org.apache.thrift.server.AbstractNonblockingServer.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.EnumMap;
import java.util.Set;
import java.util.HashSet;
import java.util.EnumSet;
import java.util.Collections;
import java.util.BitSet;
import java.nio.ByteBuffer;
import java.util.Arrays;
import javax.annotation.Generated;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SuppressWarnings({"cast", "rawtypes", "serial", "unchecked"})
@Generated(value = "Autogenerated by Thrift Compiler (0.9.3)", date = "2016-07-11")
public class ServiceDetails implements org.apache.thrift.TBase<ServiceDetails, ServiceDetails._Fields>, java.io.Serializable, Cloneable, Comparable<ServiceDetails> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("ServiceDetails");

  private static final org.apache.thrift.protocol.TField SERVICE_ID_FIELD_DESC = new org.apache.thrift.protocol.TField("serviceId", org.apache.thrift.protocol.TType.I32, (short)1);
  private static final org.apache.thrift.protocol.TField SERVICE_DESCRIPTION_FIELD_DESC = new org.apache.thrift.protocol.TField("serviceDescription", org.apache.thrift.protocol.TType.STRING, (short)2);

  private static final Map<Class<? extends IScheme>, SchemeFactory> schemes = new HashMap<Class<? extends IScheme>, SchemeFactory>();
  static {
    schemes.put(StandardScheme.class, new ServiceDetailsStandardSchemeFactory());
    schemes.put(TupleScheme.class, new ServiceDetailsTupleSchemeFactory());
  }

  public int serviceId; // required
  public String serviceDescription; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    SERVICE_ID((short)1, "serviceId"),
    SERVICE_DESCRIPTION((short)2, "serviceDescription");

    private static final Map<String, _Fields> byName = new HashMap<String, _Fields>();

    static {
      for (_Fields field : EnumSet.allOf(_Fields.class)) {
        byName.put(field.getFieldName(), field);
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, or null if its not found.
     */
    public static _Fields findByThriftId(int fieldId) {
      switch(fieldId) {
        case 1: // SERVICE_ID
          return SERVICE_ID;
        case 2: // SERVICE_DESCRIPTION
          return SERVICE_DESCRIPTION;
        default:
          return null;
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, throwing an exception
     * if it is not found.
     */
    public static _Fields findByThriftIdOrThrow(int fieldId) {
      _Fields fields = findByThriftId(fieldId);
      if (fields == null) throw new IllegalArgumentException("Field " + fieldId + " doesn't exist!");
      return fields;
    }

    /**
     * Find the _Fields constant that matches name, or null if its not found.
     */
    public static _Fields findByName(String name) {
      return byName.get(name);
    }

    private final short _thriftId;
    private final String _fieldName;

    _Fields(short thriftId, String fieldName) {
      _thriftId = thriftId;
      _fieldName = fieldName;
    }

    public short getThriftFieldId() {
      return _thriftId;
    }

    public String getFieldName() {
      return _fieldName;
    }
  }

  // isset id assignments
  private static final int __SERVICEID_ISSET_ID = 0;
  private byte __isset_bitfield = 0;
  public static final Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
  static {
    Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
    tmpMap.put(_Fields.SERVICE_ID, new org.apache.thrift.meta_data.FieldMetaData("serviceId", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.I32)));
    tmpMap.put(_Fields.SERVICE_DESCRIPTION, new org.apache.thrift.meta_data.FieldMetaData("serviceDescription", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    metaDataMap = Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(ServiceDetails.class, metaDataMap);
  }

  public ServiceDetails() {
  }

  public ServiceDetails(
    int serviceId,
    String serviceDescription)
  {
    this();
    this.serviceId = serviceId;
    setServiceIdIsSet(true);
    this.serviceDescription = serviceDescription;
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public ServiceDetails(ServiceDetails other) {
    __isset_bitfield = other.__isset_bitfield;
    this.serviceId = other.serviceId;
    if (other.isSetServiceDescription()) {
      this.serviceDescription = other.serviceDescription;
    }
  }

  public ServiceDetails deepCopy() {
    return new ServiceDetails(this);
  }

  @Override
  public void clear() {
    setServiceIdIsSet(false);
    this.serviceId = 0;
    this.serviceDescription = null;
  }

  public int getServiceId() {
    return this.serviceId;
  }

  public ServiceDetails setServiceId(int serviceId) {
    this.serviceId = serviceId;
    setServiceIdIsSet(true);
    return this;
  }

  public void unsetServiceId() {
    __isset_bitfield = EncodingUtils.clearBit(__isset_bitfield, __SERVICEID_ISSET_ID);
  }

  /** Returns true if field serviceId is set (has been assigned a value) and false otherwise */
  public boolean isSetServiceId() {
    return EncodingUtils.testBit(__isset_bitfield, __SERVICEID_ISSET_ID);
  }

  public void setServiceIdIsSet(boolean value) {
    __isset_bitfield = EncodingUtils.setBit(__isset_bitfield, __SERVICEID_ISSET_ID, value);
  }

  public String getServiceDescription() {
    return this.serviceDescription;
  }

  public ServiceDetails setServiceDescription(String serviceDescription) {
    this.serviceDescription = serviceDescription;
    return this;
  }

  public void unsetServiceDescription() {
    this.serviceDescription = null;
  }

  /** Returns true if field serviceDescription is set (has been assigned a value) and false otherwise */
  public boolean isSetServiceDescription() {
    return this.serviceDescription != null;
  }

  public void setServiceDescriptionIsSet(boolean value) {
    if (!value) {
      this.serviceDescription = null;
    }
  }

  public void setFieldValue(_Fields field, Object value) {
    switch (field) {
    case SERVICE_ID:
      if (value == null) {
        unsetServiceId();
      } else {
        setServiceId((Integer)value);
      }
      break;

    case SERVICE_DESCRIPTION:
      if (value == null) {
        unsetServiceDescription();
      } else {
        setServiceDescription((String)value);
      }
      break;

    }
  }

  public Object getFieldValue(_Fields field) {
    switch (field) {
    case SERVICE_ID:
      return getServiceId();

    case SERVICE_DESCRIPTION:
      return getServiceDescription();

    }
    throw new IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new IllegalArgumentException();
    }

    switch (field) {
    case SERVICE_ID:
      return isSetServiceId();
    case SERVICE_DESCRIPTION:
      return isSetServiceDescription();
    }
    throw new IllegalStateException();
  }

  @Override
  public boolean equals(Object that) {
    if (that == null)
      return false;
    if (that instanceof ServiceDetails)
      return this.equals((ServiceDetails)that);
    return false;
  }

  public boolean equals(ServiceDetails that) {
    if (that == null)
      return false;

    boolean this_present_serviceId = true;
    boolean that_present_serviceId = true;
    if (this_present_serviceId || that_present_serviceId) {
      if (!(this_present_serviceId && that_present_serviceId))
        return false;
      if (this.serviceId != that.serviceId)
        return false;
    }

    boolean this_present_serviceDescription = true && this.isSetServiceDescription();
    boolean that_present_serviceDescription = true && that.isSetServiceDescription();
    if (this_present_serviceDescription || that_present_serviceDescription) {
      if (!(this_present_serviceDescription && that_present_serviceDescription))
        return false;
      if (!this.serviceDescription.equals(that.serviceDescription))
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    List<Object> list = new ArrayList<Object>();

    boolean present_serviceId = true;
    list.add(present_serviceId);
    if (present_serviceId)
      list.add(serviceId);

    boolean present_serviceDescription = true && (isSetServiceDescription());
    list.add(present_serviceDescription);
    if (present_serviceDescription)
      list.add(serviceDescription);

    return list.hashCode();
  }

  @Override
  public int compareTo(ServiceDetails other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = Boolean.valueOf(isSetServiceId()).compareTo(other.isSetServiceId());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetServiceId()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.serviceId, other.serviceId);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetServiceDescription()).compareTo(other.isSetServiceDescription());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetServiceDescription()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.serviceDescription, other.serviceDescription);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    return 0;
  }

  public _Fields fieldForId(int fieldId) {
    return _Fields.findByThriftId(fieldId);
  }

  public void read(org.apache.thrift.protocol.TProtocol iprot) throws org.apache.thrift.TException {
    schemes.get(iprot.getScheme()).getScheme().read(iprot, this);
  }

  public void write(org.apache.thrift.protocol.TProtocol oprot) throws org.apache.thrift.TException {
    schemes.get(oprot.getScheme()).getScheme().write(oprot, this);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder("ServiceDetails(");
    boolean first = true;

    sb.append("serviceId:");
    sb.append(this.serviceId);
    first = false;
    if (!first) sb.append(", ");
    sb.append("serviceDescription:");
    if (this.serviceDescription == null) {
      sb.append("null");
    } else {
      sb.append(this.serviceDescription);
    }
    first = false;
    sb.append(")");
    return sb.toString();
  }

  public void validate() throws org.apache.thrift.TException {
    // check for required fields
    // check for sub-struct validity
  }

  private void writeObject(java.io.ObjectOutputStream out) throws java.io.IOException {
    try {
      write(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(out)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private void readObject(java.io.ObjectInputStream in) throws java.io.IOException, ClassNotFoundException {
    try {
      // it doesn't seem like you should have to do this, but java serialization is wacky, and doesn't call the default constructor.
      __isset_bitfield = 0;
      read(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(in)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private static class ServiceDetailsStandardSchemeFactory implements SchemeFactory {
    public ServiceDetailsStandardScheme getScheme() {
      return new ServiceDetailsStandardScheme();
    }
  }

  private static class ServiceDetailsStandardScheme extends StandardScheme<ServiceDetails> {

    public void read(org.apache.thrift.protocol.TProtocol iprot, ServiceDetails struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // SERVICE_ID
            if (schemeField.type == org.apache.thrift.protocol.TType.I32) {
              struct.serviceId = iprot.readI32();
              struct.setServiceIdIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // SERVICE_DESCRIPTION
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.serviceDescription = iprot.readString();
              struct.setServiceDescriptionIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          default:
            org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
        }
        iprot.readFieldEnd();
      }
      iprot.readStructEnd();

      // check for required fields of primitive type, which can't be checked in the validate method
      struct.validate();
    }

    public void write(org.apache.thrift.protocol.TProtocol oprot, ServiceDetails struct) throws org.apache.thrift.TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      oprot.writeFieldBegin(SERVICE_ID_FIELD_DESC);
      oprot.writeI32(struct.serviceId);
      oprot.writeFieldEnd();
      if (struct.serviceDescription != null) {
        oprot.writeFieldBegin(SERVICE_DESCRIPTION_FIELD_DESC);
        oprot.writeString(struct.serviceDescription);
        oprot.writeFieldEnd();
      }
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class ServiceDetailsTupleSchemeFactory implements SchemeFactory {
    public ServiceDetailsTupleScheme getScheme() {
      return new ServiceDetailsTupleScheme();
    }
  }

  private static class ServiceDetailsTupleScheme extends TupleScheme<ServiceDetails> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, ServiceDetails struct) throws org.apache.thrift.TException {
      TTupleProtocol oprot = (TTupleProtocol) prot;
      BitSet optionals = new BitSet();
      if (struct.isSetServiceId()) {
        optionals.set(0);
      }
      if (struct.isSetServiceDescription()) {
        optionals.set(1);
      }
      oprot.writeBitSet(optionals, 2);
      if (struct.isSetServiceId()) {
        oprot.writeI32(struct.serviceId);
      }
      if (struct.isSetServiceDescription()) {
        oprot.writeString(struct.serviceDescription);
      }
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, ServiceDetails struct) throws org.apache.thrift.TException {
      TTupleProtocol iprot = (TTupleProtocol) prot;
      BitSet incoming = iprot.readBitSet(2);
      if (incoming.get(0)) {
        struct.serviceId = iprot.readI32();
        struct.setServiceIdIsSet(true);
      }
      if (incoming.get(1)) {
        struct.serviceDescription = iprot.readString();
        struct.setServiceDescriptionIsSet(true);
      }
    }
  }

}

