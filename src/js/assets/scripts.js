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