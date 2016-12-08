var protobuf = require('../lib/protobuf');
var util = require('../lib/util');
var should = require('should');
var tc = require('./rootMsgTC');

describe('msgEncoderTest', function(){
	var protos = require('./rootProtos.json');

	protobuf.init({encoderProtos:protos, decoderProtos:protos});

	describe('encodeTest', function(){

		for(var route in tc){
			var msg = tc[route];

			console.log('====================');
			console.log(route);
			var buffer = protobuf.encode(route, msg);

			console.log(msg);
			console.log(buffer.length);

			var decodeMsg = protobuf.decode(route, buffer);

			console.log(decodeMsg);
			console.log('====================');

			util.equal(msg, decodeMsg).should.equal(true);
		}
	});
});