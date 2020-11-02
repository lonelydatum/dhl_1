const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}






function portrait(v){

	const T1 = 3.5
	const T2 = v==="v1" ? 4 : 4.3
	console.log(T2);


	const speed = size.w / 600	

	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	
	

	tl.from(".t1", speed, {x:`-=${size.w}`, opacity:0}, "+=.2")
	tl.to(".t1", speed, {x:`+=${size.w}`, opacity:0}, `+=${T1}`)
	tl.from(".t2", speed, {x:`-=${size.w}`, opacity:0})

	

	// tl.set(".frame2", {className: "+=in"}, "+=.6")
	
	
	tl.add("end", `+=${T2}`)
	tl.to(".t2", speed, {x:`+=${size.w}`, opacity:0}, "end")
	tl.to(".logo", .5, {opacity:0}, "end")
	tl.to(".hero", .5, {opacity:0}, "end")

	tl.set(".frame2", {opacity:1})
	// tl.from(".bg", .4, {y:"-=600", opacity:0, ease:Power1.easeIn})
	tl.from(".logo2", .4, {opacity:0, ease:Power3.easeIn}, "+=.1")
	tl.from(".t3", .4, {opacity:0, ease:Power3.easeIn}, "+=.3")
	

	// tl.gotoAndPlay("tape")
	
}





export {size, portrait}