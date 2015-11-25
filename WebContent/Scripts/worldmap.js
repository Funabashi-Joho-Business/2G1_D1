//ページ読み込みイベントに登録
document.addEventListener("DOMContentLoaded", Main, false);

function Main() {
	// セレクターで各要素のインスタンスを取得
	var eurasia = document.querySelector("area#eurasia");
	var africa = document.querySelector("area#africa");
	var australia = document.querySelector("area#australia");
	var northAmerica = document.querySelector("area#northAmerica");
	var southAmerica = document.querySelector("area#southAmerica");

	eurasia.onclick = function eura() {
		document.getElementById("contents").innerHTML = "ユーラシア大陸<br>";
		document.getElementById("Colombia").innerHTML = "";

		// データ受信要求
		var sendData = {
			"id" : 1
		};
		AFL.sendJson("WorldDB", sendData, onRecv);
	}

	africa.onclick = function afri() {
		document.getElementById("contents").innerHTML = "アフリカ大陸<br>";
		document.getElementById("Colombia").innerHTML = "";

		// データ受信要求
		var sendData = {
			"id" : 2
		};
		AFL.sendJson("WorldDB", sendData, onRecv);
	}

	australia.onclick = function aust() {
		document.getElementById("contents").innerHTML = "オーストラリア大陸<br>";
		document.getElementById("Colombia").innerHTML = "";

		// データ受信要求
		var sendData = {
			"id" : 3
		};
		AFL.sendJson("WorldDB", sendData, onRecv);
	}

	northAmerica.onclick = function north() {
		document.getElementById("contents").innerHTML = "北アメリカ大陸<br>";
		document.getElementById("Colombia").innerHTML = "";

		// データ受信要求
		var sendData = {
			"id" : 4
		};
		AFL.sendJson("WorldDB", sendData, onRecv);
	}

	southAmerica.onclick = function south() {
		document.getElementById("contents").innerHTML = "南アメリカ大陸<br>";
		document.getElementById("Colombia").innerHTML = "<img src=\"Colombia.jpg\">";

		// データ受信要求
		var sendData = {
			"id" : 5
		};
		AFL.sendJson("WorldDB", sendData, onRecv);
	}

	// データ受信処理
	function onRecv(datas) {
		// 内容のクリア
		output.innerHTML = "";

		var data = datas;
		document.getElementById("contents").innerHTML = document.getElementById("contents").innerHTML + AFL.sprintf("%s", data.data)

	}

}