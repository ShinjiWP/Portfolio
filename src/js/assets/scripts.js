$(".js-btn1").click(function () {
	$(".p-header__ttl:nth-child(3),.p-header__ttl:nth-child(4),.p-header__ttl:nth-child(5)").toggleClass("js-gray");
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