function start(){
	

	TweenLite.defaultEase = Power4.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	
	

	tl.from(".t1", .5, {x:"-=300", opacity:0}, "+=.2")
	tl.to(".t1", .5, {x:"-=300", opacity:0}, "+=3")
	tl.from(".t2", .5, {x:"-=300", opacity:0}, "+=.2")

	tl.add(tape())
	
	
}

function tape(){
	const TIME = .4
	const tl = new TimelineMax({repeat:1, repeatDelay:2.5})
	tl.to(".tape_2", TIME, {clip: `rect(0px 600px 1200px 600px)`} )
	tl.to(".tape_5", TIME, {clip: `rect(0px 0px 1200px 0px)`} )
	tl.to(".tape_6", TIME, {clip: `rect(0px 600px 1200px 600px)`} )

	return tl
}

start()


module.exports = {};

