function start(){
	

	TweenLite.defaultEase = Power4.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	
	

	tl.from(".t1", .5, {x:"-=300", opacity:0}, "+=.2")
	tl.to(".t1", .5, {x:"+=300", opacity:0}, "+=3")
	tl.from(".t2", .5, {x:"-=300", opacity:0})

	tl.add("tape")
	tl.add(tape(), "tape")

	// tl.set(".frame2", {className: "+=in"}, "+=.6")
	
	
	

	tl.set(".frame2", {opacity:1}, "+=3")
	tl.from(".bg_2", .4, {y:"-=600", opacity:0, ease:Power1.easeIn})
	tl.from(".logo", .4, {opacity:0}, "+=.2")
	tl.from(".tagline", .5, {clip: `rect(0px 0px 1200px 0px)`}, "+=.2")

	// tl.gotoAndPlay("tape")
	
}

function tape(){
	const TIME = .8
	const tl = new TimelineMax()

	tl.to(".tape_2", TIME, {clip: `rect(0px 600px 1200px 600px)`}, .1 )
	
	tl.to(".tape_6", TIME, {clip: `rect(0px 600px 1200px 600px)`}, .3 )
	tl.to(".tape_4", TIME, {clip: `rect(0px 1200px 0px)`}, .2 )
	tl.to(".tape_5", TIME, {clip: `rect(0px 600px 1200px 600px)`}, .5 )

	return tl
}

start()


module.exports = {};

