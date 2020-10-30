(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {

	TweenLite.defaultEase = Power4.easeInOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", .5, { x: "-=300", opacity: 0 }, "+=.2");
	tl.to(".t1", .5, { x: "+=300", opacity: 0 }, "+=3.5");
	tl.from(".t2", .5, { x: "-=300", opacity: 0 });

	// tl.set(".frame2", {className: "+=in"}, "+=.6")

	tl.add("end", "+=4");
	tl.to(".t2", .5, { x: "+=300", opacity: 0 }, "end");
	tl.to(".logo", .5, { opacity: 0 }, "end");
	tl.to(".hero", .5, { opacity: 0 }, "end");

	tl.set(".frame2", { opacity: 1 });
	// tl.from(".bg", .4, {y:"-=600", opacity:0, ease:Power1.easeIn})
	tl.from(".logo2", .4, { opacity: 0, ease: Power3.easeIn }, "+=.1");
	tl.from(".t3", .4, { opacity: 0, ease: Power3.easeIn }, "+=.3");

	// tl.gotoAndPlay("tape")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
