(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {

	TweenLite.defaultEase = Power4.easeInOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", .5, { x: "-=300", opacity: 0 }, "+=.2");
	tl.to(".t1", .5, { x: "+=300", opacity: 0 }, "+=3");
	tl.from(".t2", .5, { x: "-=300", opacity: 0 });

	tl.add("tape");
	tl.add(tape(), "tape");

	// tl.set(".frame2", {className: "+=in"}, "+=.6")

	tl.set(".frame2", { opacity: 1 }, "+=3");
	tl.from(".bg_2", .6, { opacity: 0 });
	tl.from(".logo", .4, { opacity: 0 }, "+=.2");
	tl.from(".tagline", .5, { clip: "rect(0px 0px 1200px 0px)" }, "+=.2");

	// tl.gotoAndPlay("tape")
}

function tape() {
	var TIME = .8;
	var tl = new TimelineMax();

	tl.to(".tape_2", TIME, { clip: "rect(0px 600px 1200px 600px)" }, .1);

	tl.to(".tape_6", TIME, { clip: "rect(0px 600px 1200px 600px)" }, .3);
	tl.to(".tape_4", TIME, { clip: "rect(0px 1200px 0px)" }, .2);
	tl.to(".tape_5", TIME, { clip: "rect(0px 600px 1200px 600px)" }, .5);

	return tl;
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
