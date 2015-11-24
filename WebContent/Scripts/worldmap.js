//ページ読み込みイベントに登録
document.addEventListener("DOMContentLoaded", Main, false);

function Main()
{
//セレクターで各要素のインスタンスを取得
	var eurasia = document.querySelector("area#eurasia");
	var africa = document.querySelector("area#africa");
	var australia = document.querySelector("area#australia");
	var northAmerica = document.querySelector("area#northAmerica");
	var southAmerica = document.querySelector("area#southAmerica");

	eurasia.onclick = function eura(){
		document.getElementById("contents").innerHTML = "ゆーらしあ";
		document.getElementById("Colombia").innerHTML = "";

		//データ受信要求
		var sendData = {"cmd":"read"};
		AFL.sendJson("Ajax10",sendData,onRecv);
	}
	
	africa.onclick = function afri(){
		document.getElementById("contents").innerHTML = "アフリカ！！すごいアフリカ！！";
		document.getElementById("Colombia").innerHTML = "";
	}
	
	australia.onclick = function aust(){
		document.getElementById("contents").innerHTML = "コアラ";
		document.getElementById("Colombia").innerHTML = "";
	}
	
	northAmerica.onclick = function north(){
		document.getElementById("contents").innerHTML = "北アメリカ";
		document.getElementById("Colombia").innerHTML = "";
	}
	
	southAmerica.onclick = function south(){
		document.getElementById("contents").innerHTML = "コロンビア";
		document.getElementById("Colombia").innerHTML = "<img src=\"Colombia.jpg\">";
	}
}