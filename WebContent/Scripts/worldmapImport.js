//ページ読み込みイベントに登録
document.addEventListener("DOMContentLoaded", Main, false);

function Main() {
	// タイトルの設定
	document.title = "データ登録用";

	var id = document.querySelector("input#id");
	var data = document.querySelector("input#data");
	var button = document.querySelector("input#button");
	// クリックイベントの処理
	button.addEventListener("click", onClick);

	function onClick() {
		var senddata = {
			"id" : id.value,
			"data" : data.value
		};
		AFL.sendJson("Ajax09", senddata, onJson);
	}
}