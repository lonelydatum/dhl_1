import {size} from '../../_common/js/common.js'



TweenLite.defaultEase = Power2.easeInOut

const T1 = 3.5
const T2 = 4


function portrait(){
	const speed = .4

	TweenLite.defaultEase = Power4.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	
	

	tl.from(".t1", speed, { opacity:0}, "+=.2")
	tl.to(".t1", speed, { opacity:0}, `+=${T1}`)
	tl.from(".t2", speed, { opacity:0})

	

	// tl.set(".frame2", {className: "+=in"}, "+=.6")
	
	
	tl.add("end", `+=${T2}`)
	tl.to(".t2", speed, { opacity:0}, "end")
	tl.to(".logo", .4, {opacity:0}, "end")
	tl.to(".hero", .4, {opacity:0}, "end")

	tl.set(".frame2", {opacity:1})
	// tl.from(".bg", .4, {y:"-=600", opacity:0, ease:Power1.easeIn})
	tl.from(".logo2", .4, {opacity:0, ease:Power3.easeIn}, "+=.1")
	tl.from(".t3", .4, {opacity:0, ease:Power3.easeIn}, "+=.3")
	

	// tl.gotoAndPlay("tape")
	
}


portrait()

module.exports = {};

