// $(".js-btn1").on("click",function () {
// 	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
// });

// $(".js-btn2").on("click",function () {
// 	$(".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
// });

// $(".js-btn3").on("click",function () {
// 	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(2),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
// });

// $(".js-btn4").on("click",function () {
// 	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(2)").toggleClass("js-gray");
// });



$(".c-hover--btn1").on("mouseenter", function () {
	$(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
	$(".p-header__ttl:nth-child(5) span").css({ "background-color": "gray" });
	$(".js-btn2, .js-btn3, .js-btn4").toggleClass("js-filter");
});

$(".c-hover--btn2").on("mouseenter", function () {
	$(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	$(".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
	$(".p-header__ttl:nth-child(5) span").css({ "background-color": "gray" });
	$(".p-header__ttl:nth-child(2) span").css({ color: "gray" });
	$(".js-btn1, .js-btn3, .js-btn4").toggleClass("js-filter");
});

$(".c-hover--btn3").on("mouseenter", function () {
	$(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(2),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
	$(".p-header__ttl:nth-child(5) span").css({ "background-color": "gray" });
	$(".p-header__ttl:nth-child(2) span").css({ color: "gray" });
	$(".js-btn2, .js-btn1, .js-btn4").toggleClass("js-filter");
});

$(".c-hover--btn4").on("mouseenter", function () {
	$(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(2)").toggleClass("js-gray");
	$(".p-header__ttl:nth-child(5) span").css({ color: "gray" });
	$(".p-header__ttl:nth-child(2) span").css({ color: "gray" });
	$(".js-btn2, .js-btn3, .js-btn1").toggleClass("js-filter");
});

$(".js-btn1,.js-btn2,.js-btn3,.js-btn4").on("mouseout", function () {
	$(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	$(".p-header__ttl:nth-child(5) span").css({ "background-color": "#00ff00" });
	$(".p-header__ttl:nth-child(2) span").css({ color: "#ff0000" });
	$(".js-btn1,.js-btn2,.js-btn3,.js-btn4").removeClass("js-filter");
});
