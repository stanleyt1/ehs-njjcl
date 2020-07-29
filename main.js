window.onload = function() {



window.scrollTo(0,0);
console.log("ASd");

TweenMax.staggerFrom("#base", 0.1, { opacity: 0, delay: 1.9});
TweenMax.staggerFrom("#base", 1.5, { y:25, delay:2});



var tt = new TimelineMax({});
tt.to(".main", 0.1, {opacity: 1});
tt.from(".main", 2, {x:-1440, ease:"power3.out"});


TweenMax.staggerFrom("#title", .9, {x: -100, opacity: 0, ease:"slow.in", delay: 1.7})
TweenMax.staggerFrom("#bar", 1.5, {width:0, ease:"power4.out",  delay: 1.7})
TweenMax.staggerFrom("#lilText", 1.5, {y: -20, opacity: 0,  delay: 1.7});


TweenMax.staggerFrom("#light", 0.1, { opacity: 0, delay: 1.9});
var tl = new TimelineMax({repeat: -1});
tl.staggerFrom("#light", 1.5, { y:-10, ease:"sine.in"})
	.to("#light", 1.5, { y:-10, ease: "sine.out"});

TweenMax.staggerFrom("#explore", .5, {scale: 0, opacity: 0, delay: 1.7, ease:"power4.out"});

document.querySelector("#explore").addEventListener("mouseenter", doCoolStuff);
document.querySelector("#explore").addEventListener("mouseleave", undoCoolStuff);
document.querySelector("#explore").addEventListener("click", scroll);

function doCoolStuff(){
	TweenMax.to("#explore", .5, {scale: 1.1});
}

function undoCoolStuff(){
	TweenMax.to("#explore", .5, {scale: 1});
}

function scroll(){
	window.scroll({
		top:window.innerHeight,
		behavior: 'smooth',
	});

}

var controller = new ScrollMagic.Controller();
var tw = new TimelineMax();
tw.from("#snapshot", 1.5, {x:-75, ease: "expo.out"}, 0);
tw.from(".col-sm", 2, { y: 100}, 0);

var scene = new ScrollMagic.Scene({
  triggerElement: ".mid",
  triggerHook: 0.8
})

	.setTween(tw)
	.addTo(controller)
	.reverse(false)

var twa = new TimelineMax();
twa.from("#club", 1.5, {x:-75, ease: "expo.out"}, 0 );
twa.from("#bb", 1.5, {y:50, opacity: .5, ease: "expo.out"}, 0 );
twa.from("#wordz", 1.5, {x:100, ease: "expo.out"}, 0 );
var scene1 = new ScrollMagic.Scene({
  triggerElement: ".lc",
  triggerHook: 0.8
})

	.setTween(twa)
	.addTo(controller)
	.reverse(false)



}





