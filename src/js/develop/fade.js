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