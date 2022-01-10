$(".p-nav__btn").on("click", function () {
	event.preventDefault();
	var link = $(this).attr("href");
	setTimeout(function () {
		location.href = link;
	}, 1500);
});

const mediaQuery = window.matchMedia("(max-width: 1079px)");

// ページが読み込まれた時に実行
handle(mediaQuery);

// ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
mediaQuery.addListener(handle);

function handle(mm) {
	if (mm.matches) {
		// ウィンドウサイズ1079px以下のときの処理
		jQuery("#btn1").on("click", function () {
			jQuery(".p-products").toggleClass("open");
		});
	} else {
	}
}

//以下は基本的な書き方
// $(function () {
// 	jQuery("#btn1").on("click", function () {
// 		jQuery(".p-products").toggleClass("open");
// 	});
// });
