//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
if (typeof wpthrift_types === 'undefined') {
  wpthrift_types = {};
}
wpthrift_types.Error = module.exports.Error = function(args) {
  Thrift.TException.call(this, "wpthrift_types.Error")
  this.name = "wpthrift_types.Error"
  this.message = null;
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(wpthrift_types.Error, Thrift.TException);
wpthrift_types.Error.prototype.name = 'Error';
wpthrift_types.Error.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.Error.prototype.write = function(output) {
  output.writeStructBegin('Error');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

wpthrift_types.Service = module.exports.Service = function(args) {
  this.id = null;
  this.name = null;
  this.description = null;
  this.prices = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.prices !== undefined && args.prices !== null) {
      this.prices = Thrift.copyMap(args.prices, [null]);
    }
  }
};
wpthrift_types.Service.prototype = {};
wpthrift_types.Service.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.prices = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var key6 = null;
          var val7 = null;
          key6 = input.readI32();
          val7 = new ttypes.Price();
          val7.read(input);
          this.prices[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.Service.prototype.write = function(output) {
  output.writeStructBegin('Service');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.prices !== null && this.prices !== undefined) {
    output.writeFieldBegin('prices', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.I32, Thrift.Type.STRUCT, Thrift.objectLength(this.prices));
    for (var kiter8 in this.prices)
    {
      if (this.prices.hasOwnProperty(kiter8))
      {
        var viter9 = this.prices[kiter8];
        output.writeI32(kiter8);
        viter9.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

wpthrift_types.Price = module.exports.Price = function(args) {
  this.id = null;
  this.description = null;
  this.pricePerUnit = null;
  this.unitId = null;
  this.unitDescription = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.pricePerUnit !== undefined && args.pricePerUnit !== null) {
      this.pricePerUnit = new ttypes.PricePerUnit(args.pricePerUnit);
    }
    if (args.unitId !== undefined && args.unitId !== null) {
      this.unitId = args.unitId;
    }
    if (args.unitDescription !== undefined && args.unitDescription !== null) {
      this.unitDescription = args.unitDescription;
    }
  }
};
wpthrift_types.Price.prototype = {};
wpthrift_types.Price.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.pricePerUnit = new ttypes.PricePerUnit();
        this.pricePerUnit.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.unitId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.unitDescription = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.Price.prototype.write = function(output) {
  output.writeStructBegin('Price');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 2);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.pricePerUnit !== null && this.pricePerUnit !== undefined) {
    output.writeFieldBegin('pricePerUnit', Thrift.Type.STRUCT, 3);
    this.pricePerUnit.write(output);
    output.writeFieldEnd();
  }
  if (this.unitId !== null && this.unitId !== undefined) {
    output.writeFieldBegin('unitId', Thrift.Type.I32, 4);
    output.writeI32(this.unitId);
    output.writeFieldEnd();
  }
  if (this.unitDescription !== null && this.unitDescription !== undefined) {
    output.writeFieldBegin('unitDescription', Thrift.Type.STRING, 5);
    output.writeString(this.unitDescription);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

wpthrift_types.PricePerUnit = module.exports.PricePerUnit = function(args) {
  this.amount = null;
  this.currencyCode = null;
  if (args) {
    if (args.amount !== undefined && args.amount !== null) {
      this.amount = args.amount;
    }
    if (args.currencyCode !== undefined && args.currencyCode !== null) {
      this.currencyCode = args.currencyCode;
    }
  }
};
wpthrift_types.PricePerUnit.prototype = {};
wpthrift_types.PricePerUnit.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.amount = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.currencyCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.PricePerUnit.prototype.write = function(output) {
  output.writeStructBegin('PricePerUnit');
  if (this.amount !== null && this.amount !== undefined) {
    output.writeFieldBegin('amount', Thrift.Type.I32, 1);
    output.writeI32(this.amount);
    output.writeFieldEnd();
  }
  if (this.currencyCode !== null && this.currencyCode !== undefined) {
    output.writeFieldBegin('currencyCode', Thrift.Type.STRING, 2);
    output.writeString(this.currencyCode);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

wpthrift_types.HCECard = module.exports.HCECard = function(args) {
  this.FirstName = null;
  this.LastName = null;
  this.ExpMonth = null;
  this.ExpYear = null;
  this.CardNumber = null;
  this.Type = null;
  this.Cvc = null;
  if (args) {
    if (args.FirstName !== undefined && args.FirstName !== null) {
      this.FirstName = args.FirstName;
    }
    if (args.LastName !== undefined && args.LastName !== null) {
      this.LastName = args.LastName;
    }
    if (args.ExpMonth !== undefined && args.ExpMonth !== null) {
      this.ExpMonth = args.ExpMonth;
    }
    if (args.ExpYear !== undefined && args.ExpYear !== null) {
      this.ExpYear = args.ExpYear;
    }
    if (args.CardNumber !== undefined && args.CardNumber !== null) {
      this.CardNumber = args.CardNumber;
    }
    if (args.Type !== undefined && args.Type !== null) {
      this.Type = args.Type;
    }
    if (args.Cvc !== undefined && args.Cvc !== null) {
      this.Cvc = args.Cvc;
    }
  }
};
wpthrift_types.HCECard.prototype = {};
wpthrift_types.HCECard.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.FirstName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.LastName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.ExpMonth = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.ExpYear = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.CardNumber = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.Type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.Cvc = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.HCECard.prototype.write = function(output) {
  output.writeStructBegin('HCECard');
  if (this.FirstName !== null && this.FirstName !== undefined) {
    output.writeFieldBegin('FirstName', Thrift.Type.STRING, 1);
    output.writeString(this.FirstName);
    output.writeFieldEnd();
  }
  if (this.LastName !== null && this.LastName !== undefined) {
    output.writeFieldBegin('LastName', Thrift.Type.STRING, 2);
    output.writeString(this.LastName);
    output.writeFieldEnd();
  }
  if (this.ExpMonth !== null && this.ExpMonth !== undefined) {
    output.writeFieldBegin('ExpMonth', Thrift.Type.I32, 3);
    output.writeI32(this.ExpMonth);
    output.writeFieldEnd();
  }
  if (this.ExpYear !== null && this.ExpYear !== undefined) {
    output.writeFieldBegin('ExpYear', Thrift.Type.I32, 4);
    output.writeI32(this.ExpYear);
    output.writeFieldEnd();
  }
  if (this.CardNumber !== null && this.CardNumber !== undefined) {
    output.writeFieldBegin('CardNumber', Thrift.Type.STRING, 5);
    output.writeString(this.CardNumber);
    output.writeFieldEnd();
  }
  if (this.Type !== null && this.Type !== undefined) {
    output.writeFieldBegin('Type', Thrift.Type.STRING, 6);
    output.writeString(this.Type);
    output.writeFieldEnd();
  }
  if (this.Cvc !== null && this.Cvc !== undefined) {
    output.writeFieldBegin('Cvc', Thrift.Type.STRING, 7);
    output.writeString(this.Cvc);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

wpthrift_types.Device = module.exports.Device = function(args) {
  this.uid = null;
  this.name = null;
  this.description = null;
  this.services = null;
  this.ipv4Address = null;
  this.currencyCode = null;
  if (args) {
    if (args.uid !== undefined && args.uid !== null) {
      this.uid = args.uid;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.services !== undefined && args.services !== null) {
      this.services = Thrift.copyMap(args.services, [ttypes.Service]);
    }
    if (args.ipv4Address !== undefined && args.ipv4Address !== null) {
      this.ipv4Address = args.ipv4Address;
    }
    if (args.currencyCode !== undefined && args.currencyCode !== null) {
      this.currencyCode = args.currencyCode;
    }
  }
};
wpthrift_types.Device.prototype = {};
wpthrift_types.Device.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size10 = 0;
        var _rtmp314;
        this.services = {};
        var _ktype11 = 0;
        var _vtype12 = 0;
        _rtmp314 = input.readMapBegin();
        _ktype11 = _rtmp314.ktype;
        _vtype12 = _rtmp314.vtype;
        _size10 = _rtmp314.size;
        for (var _i15 = 0; _i15 < _size10; ++_i15)
        {
          var key16 = null;
          var val17 = null;
          key16 = input.readI32();
          val17 = new ttypes.Service();
          val17.read(input);
          this.services[key16] = val17;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.ipv4Address = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.currencyCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.Device.prototype.write = function(output) {
  output.writeStructBegin('Device');
  if (this.uid !== null && this.uid !== undefined) {
    output.writeFieldBegin('uid', Thrift.Type.STRING, 1);
    output.writeString(this.uid);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.services !== null && this.services !== undefined) {
    output.writeFieldBegin('services', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.I32, Thrift.Type.STRUCT, Thrift.objectLength(this.services));
    for (var kiter18 in this.services)
    {
      if (this.services.hasOwnProperty(kiter18))
      {
        var viter19 = this.services[kiter18];
        output.writeI32(kiter18);
        viter19.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.ipv4Address !== null && this.ipv4Address !== undefined) {
    output.writeFieldBegin('ipv4Address', Thrift.Type.STRING, 5);
    output.writeString(this.ipv4Address);
    output.writeFieldEnd();
  }
  if (this.currencyCode !== null && this.currencyCode !== undefined) {
    output.writeFieldBegin('currencyCode', Thrift.Type.STRING, 6);
    output.writeString(this.currencyCode);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

wpthrift_types.ServiceMessage = module.exports.ServiceMessage = function(args) {
  this.deviceDescription = null;
  this.hostname = null;
  this.portNumber = null;
  this.serverId = null;
  this.urlPrefix = null;
  this.scheme = null;
  if (args) {
    if (args.deviceDescription !== undefined && args.deviceDescription !== null) {
      this.deviceDescription = args.deviceDescription;
    }
    if (args.hostname !== undefined && args.hostname !== null) {
      this.hostname = args.hostname;
    }
    if (args.portNumber !== undefined && args.portNumber !== null) {
      this.portNumber = args.portNumber;
    }
    if (args.serverId !== undefined && args.serverId !== null) {
      this.serverId = args.serverId;
    }
    if (args.urlPrefix !== undefined && args.urlPrefix !== null) {
      this.urlPrefix = args.urlPrefix;
    }
    if (args.scheme !== undefined && args.scheme !== null) {
      this.scheme = args.scheme;
    }
  }
};
wpthrift_types.ServiceMessage.prototype = {};
wpthrift_types.ServiceMessage.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.deviceDescription = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.hostname = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.portNumber = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.serverId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.urlPrefix = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.scheme = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.ServiceMessage.prototype.write = function(output) {
  output.writeStructBegin('ServiceMessage');
  if (this.deviceDescription !== null && this.deviceDescription !== undefined) {
    output.writeFieldBegin('deviceDescription', Thrift.Type.STRING, 1);
    output.writeString(this.deviceDescription);
    output.writeFieldEnd();
  }
  if (this.hostname !== null && this.hostname !== undefined) {
    output.writeFieldBegin('hostname', Thrift.Type.STRING, 2);
    output.writeString(this.hostname);
    output.writeFieldEnd();
  }
  if (this.portNumber !== null && this.portNumber !== undefined) {
    output.writeFieldBegin('portNumber', Thrift.Type.I32, 3);
    output.writeI32(this.portNumber);
    output.writeFieldEnd();
  }
  if (this.serverId !== null && this.serverId !== undefined) {
    output.writeFieldBegin('serverId', Thrift.Type.STRING, 4);
    output.writeString(this.serverId);
    output.writeFieldEnd();
  }
  if (this.urlPrefix !== null && this.urlPrefix !== undefined) {
    output.writeFieldBegin('urlPrefix', Thrift.Type.STRING, 5);
    output.writeString(this.urlPrefix);
    output.writeFieldEnd();
  }
  if (this.scheme !== null && this.scheme !== undefined) {
    output.writeFieldBegin('scheme', Thrift.Type.STRING, 6);
    output.writeString(this.scheme);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

wpthrift_types.ServiceDetails = module.exports.ServiceDetails = function(args) {
  this.serviceId = null;
  this.serviceDescription = null;
  if (args) {
    if (args.serviceId !== undefined && args.serviceId !== null) {
      this.serviceId = args.serviceId;
    }
    if (args.serviceDescription !== undefined && args.serviceDescription !== null) {
      this.serviceDescription = args.serviceDescription;
    }
  }
};
wpthrift_types.ServiceDetails.prototype = {};
wpthrift_types.ServiceDetails.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.serviceId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.serviceDescription = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.ServiceDetails.prototype.write = function(output) {
  output.writeStructBegin('ServiceDetails');
  if (this.serviceId !== null && this.serviceId !== undefined) {
    output.writeFieldBegin('serviceId', Thrift.Type.I32, 1);
    output.writeI32(this.serviceId);
    output.writeFieldEnd();
  }
  if (this.serviceDescription !== null && this.serviceDescription !== undefined) {
    output.writeFieldBegin('serviceDescription', Thrift.Type.STRING, 2);
    output.writeString(this.serviceDescription);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

wpthrift_types.TotalPriceResponse = module.exports.TotalPriceResponse = function(args) {
  this.serverId = null;
  this.clientId = null;
  this.priceId = null;
  this.unitsToSupply = null;
  this.totalPrice = null;
  this.paymentReferenceId = null;
  this.merchantClientKey = null;
  this.currencyCode = null;
  if (args) {
    if (args.serverId !== undefined && args.serverId !== null) {
      this.serverId = args.serverId;
    }
    if (args.clientId !== undefined && args.clientId !== null) {
      this.clientId = args.clientId;
    }
    if (args.priceId !== undefined && args.priceId !== null) {
      this.priceId = args.priceId;
    }
    if (args.unitsToSupply !== undefined && args.unitsToSupply !== null) {
      this.unitsToSupply = args.unitsToSupply;
    }
    if (args.totalPrice !== undefined && args.totalPrice !== null) {
      this.totalPrice = args.totalPrice;
    }
    if (args.paymentReferenceId !== undefined && args.paymentReferenceId !== null) {
      this.paymentReferenceId = args.paymentReferenceId;
    }
    if (args.merchantClientKey !== undefined && args.merchantClientKey !== null) {
      this.merchantClientKey = args.merchantClientKey;
    }
    if (args.currencyCode !== undefined && args.currencyCode !== null) {
      this.currencyCode = args.currencyCode;
    }
  }
};
wpthrift_types.TotalPriceResponse.prototype = {};
wpthrift_types.TotalPriceResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.serverId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.clientId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.priceId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.unitsToSupply = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.totalPrice = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.paymentReferenceId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.merchantClientKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.currencyCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.TotalPriceResponse.prototype.write = function(output) {
  output.writeStructBegin('TotalPriceResponse');
  if (this.serverId !== null && this.serverId !== undefined) {
    output.writeFieldBegin('serverId', Thrift.Type.STRING, 1);
    output.writeString(this.serverId);
    output.writeFieldEnd();
  }
  if (this.clientId !== null && this.clientId !== undefined) {
    output.writeFieldBegin('clientId', Thrift.Type.STRING, 2);
    output.writeString(this.clientId);
    output.writeFieldEnd();
  }
  if (this.priceId !== null && this.priceId !== undefined) {
    output.writeFieldBegin('priceId', Thrift.Type.I32, 3);
    output.writeI32(this.priceId);
    output.writeFieldEnd();
  }
  if (this.unitsToSupply !== null && this.unitsToSupply !== undefined) {
    output.writeFieldBegin('unitsToSupply', Thrift.Type.I32, 4);
    output.writeI32(this.unitsToSupply);
    output.writeFieldEnd();
  }
  if (this.totalPrice !== null && this.totalPrice !== undefined) {
    output.writeFieldBegin('totalPrice', Thrift.Type.I32, 5);
    output.writeI32(this.totalPrice);
    output.writeFieldEnd();
  }
  if (this.paymentReferenceId !== null && this.paymentReferenceId !== undefined) {
    output.writeFieldBegin('paymentReferenceId', Thrift.Type.STRING, 6);
    output.writeString(this.paymentReferenceId);
    output.writeFieldEnd();
  }
  if (this.merchantClientKey !== null && this.merchantClientKey !== undefined) {
    output.writeFieldBegin('merchantClientKey', Thrift.Type.STRING, 7);
    output.writeString(this.merchantClientKey);
    output.writeFieldEnd();
  }
  if (this.currencyCode !== null && this.currencyCode !== undefined) {
    output.writeFieldBegin('currencyCode', Thrift.Type.STRING, 8);
    output.writeString(this.currencyCode);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

wpthrift_types.PaymentResponse = module.exports.PaymentResponse = function(args) {
  this.serverId = null;
  this.clientId = null;
  this.totalPaid = null;
  this.serviceDeliveryToken = null;
  if (args) {
    if (args.serverId !== undefined && args.serverId !== null) {
      this.serverId = args.serverId;
    }
    if (args.clientId !== undefined && args.clientId !== null) {
      this.clientId = args.clientId;
    }
    if (args.totalPaid !== undefined && args.totalPaid !== null) {
      this.totalPaid = args.totalPaid;
    }
    if (args.serviceDeliveryToken !== undefined && args.serviceDeliveryToken !== null) {
      this.serviceDeliveryToken = new ttypes.ServiceDeliveryToken(args.serviceDeliveryToken);
    }
  }
};
wpthrift_types.PaymentResponse.prototype = {};
wpthrift_types.PaymentResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.serverId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.clientId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.totalPaid = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.serviceDeliveryToken = new ttypes.ServiceDeliveryToken();
        this.serviceDeliveryToken.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.PaymentResponse.prototype.write = function(output) {
  output.writeStructBegin('PaymentResponse');
  if (this.serverId !== null && this.serverId !== undefined) {
    output.writeFieldBegin('serverId', Thrift.Type.STRING, 1);
    output.writeString(this.serverId);
    output.writeFieldEnd();
  }
  if (this.clientId !== null && this.clientId !== undefined) {
    output.writeFieldBegin('clientId', Thrift.Type.STRING, 2);
    output.writeString(this.clientId);
    output.writeFieldEnd();
  }
  if (this.totalPaid !== null && this.totalPaid !== undefined) {
    output.writeFieldBegin('totalPaid', Thrift.Type.I32, 3);
    output.writeI32(this.totalPaid);
    output.writeFieldEnd();
  }
  if (this.serviceDeliveryToken !== null && this.serviceDeliveryToken !== undefined) {
    output.writeFieldBegin('serviceDeliveryToken', Thrift.Type.STRUCT, 4);
    this.serviceDeliveryToken.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

wpthrift_types.ServiceDeliveryToken = module.exports.ServiceDeliveryToken = function(args) {
  this.key = null;
  this.issued = null;
  this.expiry = null;
  this.refundOnExpiry = null;
  this.signature = null;
  if (args) {
    if (args.key !== undefined && args.key !== null) {
      this.key = args.key;
    }
    if (args.issued !== undefined && args.issued !== null) {
      this.issued = args.issued;
    }
    if (args.expiry !== undefined && args.expiry !== null) {
      this.expiry = args.expiry;
    }
    if (args.refundOnExpiry !== undefined && args.refundOnExpiry !== null) {
      this.refundOnExpiry = args.refundOnExpiry;
    }
    if (args.signature !== undefined && args.signature !== null) {
      this.signature = args.signature;
    }
  }
};
wpthrift_types.ServiceDeliveryToken.prototype = {};
wpthrift_types.ServiceDeliveryToken.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.key = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.issued = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.expiry = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.refundOnExpiry = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.signature = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

wpthrift_types.ServiceDeliveryToken.prototype.write = function(output) {
  output.writeStructBegin('ServiceDeliveryToken');
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  if (this.issued !== null && this.issued !== undefined) {
    output.writeFieldBegin('issued', Thrift.Type.STRING, 2);
    output.writeString(this.issued);
    output.writeFieldEnd();
  }
  if (this.expiry !== null && this.expiry !== undefined) {
    output.writeFieldBegin('expiry', Thrift.Type.STRING, 3);
    output.writeString(this.expiry);
    output.writeFieldEnd();
  }
  if (this.refundOnExpiry !== null && this.refundOnExpiry !== undefined) {
    output.writeFieldBegin('refundOnExpiry', Thrift.Type.BOOL, 4);
    output.writeBool(this.refundOnExpiry);
    output.writeFieldEnd();
  }
  if (this.signature !== null && this.signature !== undefined) {
    output.writeFieldBegin('signature', Thrift.Type.STRING, 5);
    output.writeBinary(this.signature);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
