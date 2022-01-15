$(".js-btn1").click(function () {
	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
});

$(".js-btn2").click(function () {
	$(".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
});

$(".js-btn3").click(function () {
	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(2),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
});

$(".js-btn4").click(function () {
	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(2)").toggleClass("js-gray");
});

$(".js-btn1").mouseenter(function () {
	$(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
});

$(".js-btn2").mouseenter(function () {
	$(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	$(".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
});

$(".js-btn3").mouseenter(function () {
	$(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(2),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
});

$(".js-btn4").mouseenter(function () {
	$(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(2)").toggleClass("js-gray");
});

$(".js-btn1,.js-btn2,.js-btn3,.js-btn4").on("mouseout", function () {
	$(
		".p-header__ttl:nth-child(2),.p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)"
	).removeClass("js-gray");
});

$(".p-nav__btn").on("click", function () {
	event.preventDefault();
	var link = $(this).attr("href");
	setTimeout(function () {
		location.href = link;
	}, 1500);
});



$(".load-text").fadeOut(7000,function () {
	$(".loading").toggleClass("open");
})