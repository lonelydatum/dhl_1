function start(){
	

	TweenLite.defaultEase = Power4.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	
	

	tl.from(".t1", .5, {x:"-=300", opacity:0}, "+=.2")
	tl.to(".t1", .5, {x:"+=300", opacity:0}, "+=3.5")
	tl.from(".t2", .5, {x:"-=300", opacity:0})

	

	// tl.set(".frame2", {className: "+=in"}, "+=.6")
	
	
	tl.add("end", "+=4")
	tl.to(".t2", .5, {x:"+=300", opacity:0}, "end")
	tl.to(".logo", .5, {opacity:0}, "end")
	tl.to(".hero", .5, {opacity:0}, "end")

	tl.set(".frame2", {opacity:1})
	// tl.from(".bg", .4, {y:"-=600", opacity:0, ease:Power1.easeIn})
	tl.from(".logo2", .4, {opacity:0, ease:Power3.easeIn}, "+=.1")
	tl.from(".t3", .4, {opacity:0, ease:Power3.easeIn}, "+=.3")
	

	// tl.gotoAndPlay("tape")
	
}


start()


module.exports = {};

