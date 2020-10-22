(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {

	TweenLite.defaultEase = Power4.easeInOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", .5, { x: "-=300", opacity: 0 }, "+=.2");
	tl.to(".t1", .5, { x: "-=300", opacity: 0 }, "+=3");
	tl.from(".t2", .5, { x: "-=300", opacity: 0 }, "+=.2");

	tl.add(tape());
}

function tape() {
	var TIME = .4;
	var tl = new TimelineMax();
	tl.to(".tape_2", TIME, { clip: "rect(0px 600px 1200px 600px)" });

	tl.to(".tape_6", TIME, { clip: "rect(0px 600px 1200px 600px)" });
	tl.to(".tape_4", TIME, { clip: "rect(0px 1200px 0px)" });
	tl.to(".tape_5", TIME, { clip: "rect(0px 600px 1200px 600px)" });

	return tl;
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
