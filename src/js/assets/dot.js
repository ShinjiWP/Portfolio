gsap.set(".c-dot", { width: 13, height: 13, borderRadius: "20%", backgroundColor: "#00ff00" });

const tl = gsap.timeline({ repeat: -1, repeatRefresh: true });

tl.to(".c-dot", { rotate: "random(0, 360)", duration: 3, ease: "back.out" });
tl.to(".c-dot", { rotate: "random(-360, 0)", duration: 3, ease: "back.out" });


document.querySelectorAll(".slides-container").forEach((slider) => {
	var slideDelay = 4;
	var slideDuration = 2;
	var snapX;

	var slides = slider.querySelectorAll(".slide");
	var prevButton = slider.querySelector("#prevButton");
	var nextButton = slider.querySelector("#nextButton");
	var progressWrap = gsap.utils.wrap(0, 1);

	var caption2 = document.querySelector(".caption2");

	var numSlides = slides.length;

	let slide = 0;
	let slideWrap = gsap.utils.wrap(0, slides.length);

	gsap.set(slides, {
		xPercent: (i) => i * 100,
	});

	var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
	var timer = gsap.delayedCall(slideDelay, autoPlay);

	var animation = gsap.to(slides, {
		xPercent: "+=" + numSlides * 100,
		duration: 1,
		ease: "none",
		paused: true,
		repeat: -1,
		modifiers: {
			xPercent: wrap,
		},
	});

	var proxy = document.createElement("div");
	var slideAnimation = gsap.to({}, {});
	var slideWidth = 0;
	var wrapWidth = 0;
	resize();

	var draggable = new Draggable(proxy, {
		trigger: slider,
		inertia: true,
		onPress: updateDraggable,
		onDrag: updateProgress,
		onThrowUpdate: updateProgress,
		onDragEnd: updateProgress,
	});

	window.addEventListener("resize", resize);

	prevButton.addEventListener("click", function () {
		animateSlides(1);
	});
	nextButton.addEventListener("click", function () {
		animateSlides(-1);
	});

	function updateDraggable() {
		timer.restart(true);
		slideAnimation.kill();
		this.update();
	}

	function animateSlides(direction) {
		timer.restart(true);
		slideAnimation.kill();

		var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);

		slideAnimation = gsap.to(proxy, {
			x: x,
			duration: slideDuration,
			onUpdate: updateProgress,
			ease: "expo.inOut",
			onComplete: () => {
				console.log(slideWrap(slide - direction));
				// add or subtract from the slide count based on direction and wrap the number between 0 and slides.length - so we always get the number of the slide we're on.
				slide = slideWrap(slide - direction);
				// use the slide number to grab the correct caption and update
				caption2.innerHTML = slides[slide].querySelector(".caption3").innerHTML;
			},
		});
	}

	function updateCaption() {
		console.log(animation.progress());
	}

	function autoPlay() {
		if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
			timer.restart(true);
		} else {
			animateSlides(-1);
		}
	}

	function updateProgress() {
		animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
	}

	function resize() {
		var norm = gsap.getProperty(proxy, "x") / wrapWidth || 0;

		slideWidth = slides[0].offsetWidth;
		wrapWidth = slideWidth * numSlides;
		snapX = gsap.utils.snap(slideWidth);

		gsap.set(proxy, {
			x: norm * wrapWidth,
		});

		slideAnimation.progress(1);
	}
});


