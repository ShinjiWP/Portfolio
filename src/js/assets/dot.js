gsap.set(".c-dot", { width: 13, height: 13, borderRadius: "20%", backgroundColor: "#00ff00" });

const tl = gsap.timeline({ repeat: -1, repeatRefresh: true });

tl.to(".c-dot", { rotate: "random(0, 360)", duration: 3, ease: "back.out" });
tl.to(".c-dot", { rotate: "random(-360, 0)", duration: 3, ease: "back.out" });
