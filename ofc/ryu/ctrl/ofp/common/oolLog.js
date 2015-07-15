/*
 *   Copyright 2015 Okinawa Open Laboratory, General Incorporated Association
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

/************************************************************************************/
// OOLログモジュール
/************************************************************************************/
var LOG_LEVEL		=	0xFF;

var LOG_ERROR		=	0x01;
var LOG_WARNING		=	0x02;
var LOG_INFO		=	0x04;
var LOG_DEBUG		=	0x08;
var LOG_DETAIL		=	0x10;

// consoleが使えない場合は空のオブジェクトを設定しておく
if( typeof window.console === "undefined" ){
	window.console = {};
}
// console.@@がメソッドでない場合は空のメソッドを用意する
if( typeof window.console.log !== "function" ){
	window.console.log = function(){};
}
if( typeof window.console.debug !== "function" ){
	window.console.debug = function(){};
}
if( typeof window.console.info !== "function" ){
	window.console.info = function(){};
}
if( typeof window.console.warn !== "function" ){
	window.console.warn = function(){};
}
if( typeof window.console.error !== "function" ){
	window.console.error = function(){};
}
if( typeof window.console.dir !== "function" ){
	window.console.dir = function(){};
}
if( typeof window.console.trace !== "function" ){
	window.console.trace = function(){};
}
if( typeof window.console.assert !== "function" ){
	window.console.assert = function(){};
}
if( typeof window.console.dirxml !== "function" ){
	window.console.dirxml = function(){};
}
if( typeof window.console.group !== "function" ){
	window.console.group = function(){};
}
if( typeof window.console.groupEnd !== "function" ){
	window.console.groupEnd = function(){};
}
if( typeof window.console.time !== "function" ){
	window.console.time = function(){};
}
if( typeof window.console.timeEnd !== "function" ){
	window.console.timeEnd = function(){};
}
if( typeof window.console.profile !== "function" ){
	window.console.profile = function(){};
}
if( typeof window.console.profileEnd !== "function" ){
	window.console.profileEnd = function(){};
}
if( typeof window.console.count !== "function" ){
	window.console.count = function(){};
}

// OOLLOGクラス
var OOLLOG = function OOLLOG() {}

// メンバ
OOLLOG.prototype.log_tag = "OOL";

// メソッド
OOLLOG.prototype.log = function(logLevel, data) {
	var log_tag = OOLLOG.prototype.log_tag;
	switch (logLevel&LOG_LEVEL) {
		case LOG_ERROR:
			console.error(log_tag + " :ERROR  : " + data);
			break;
		case LOG_WARNING:
			console.warn(log_tag + " :WARNING: " + data);
			break;
		case LOG_INFO:
			console.info(log_tag + " :INFO   : " + data);
			break;
		case LOG_DEBUG:
			console.debug(log_tag + " :DEBUG  : " + data);
			break;
		case LOG_DETAIL:
			console.log(log_tag + " :DETAIL : " + data);
			break;
		default:
			break;
	}
};
