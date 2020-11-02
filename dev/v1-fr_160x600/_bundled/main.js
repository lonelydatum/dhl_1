(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

function portrait(v) {

	var T1 = 3.5;
	var T2 = v === "v1" ? 4 : 4.3;
	console.log(T2);

	var speed = size.w / 600;

	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", speed, { x: "-=" + size.w, opacity: 0 }, "+=.2");
	tl.to(".t1", speed, { x: "+=" + size.w, opacity: 0 }, "+=" + T1);
	tl.from(".t2", speed, { x: "-=" + size.w, opacity: 0 });

	// tl.set(".frame2", {className: "+=in"}, "+=.6")

	tl.add("end", "+=" + T2);
	tl.to(".t2", speed, { x: "+=" + size.w, opacity: 0 }, "end");
	tl.to(".logo", .5, { opacity: 0 }, "end");
	tl.to(".hero", .5, { opacity: 0 }, "end");

	tl.set(".frame2", { opacity: 1 });
	// tl.from(".bg", .4, {y:"-=600", opacity:0, ease:Power1.easeIn})
	tl.from(".logo2", .4, { opacity: 0, ease: Power3.easeIn }, "+=.1");
	tl.from(".t3", .4, { opacity: 0, ease: Power3.easeIn }, "+=.3");

	// tl.gotoAndPlay("tape")
}

exports.size = size;
exports.portrait = portrait;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.portrait)("v1");

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
