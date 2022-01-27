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

$(".p-nav__btn").on("click", function () {
	event.preventDefault();
	var link = $(this).attr("href");
	setTimeout(function () {
		location.href = link;
	}, 1500);
});

$(".load-text").fadeOut(5000, function () {
	$(".loading").toggleClass("open"); //←ここだけ残せば初期使用でローディングと分離できる
	// $(".p-header__ttl:nth-child(2)").css({ transform: "translateX(0%)", opacity: "1" });
	// $(".p-header__ttl:nth-child(3)")
	// 	.delay(30)
	// 	.queue(function () {
	// 		$(this).css({ transform: "translateX(0%)", opacity: "1" });
	// 	});
	// $(".p-header__ttl:nth-child(4)")
	// 	.delay(40)
	// 	.queue(function () {
	// 		$(this).css({ transform: "translateX(0%)", opacity: "1" });
	// 	});
	// $(".p-header__ttl:nth-child(5)")
	// 	.delay(50)
	// 	.queue(function () {
	// 		$(this).css({ transform: "translateX(0%)", opacity: "1" });
	// 	});
});

// window.onload = function () {
// 	var ref = document.referrer;
// 	var result = ref.match(/contact/);

// 	if (!result) {
// 		//含まれない場合の処理
// 		// alert(document.referrer);
// 	} else {
// 		//含まれる場合の処理
// 		alert(document.referrer);
// 	}
// };