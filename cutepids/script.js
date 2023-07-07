const gameAns = [0, "15082002", "23062002", "02012002", "11072002", "18062002", "23092002", "27042002", "31052002", "18082002", "24042002", "24032002"]

let passwords = ["Cutepids", "05092019", "12A3"];
let hints = ["8 kí tự", "8 số", "3 số 1 ký tự"]
let box = document.getElementById("box")
let container = document.getElementById("container")
let level = 0;
let repeated = 0;
let count;
let countPlay = 0;
let stt;
let needHint = 0;

AOS.init();

function start() {
	level = 0;
	getLevel(level);
}

function getLevel(level, repeated) {
	box.innerHTML = '<form id="inputForm"><label>Nhập mật mã:</label> <label id="hint"></label><p><input type="password" id="inputBox"></p><p id="status"></p><button id="submitBtn" onClick="submitPassword()">Enter</button></form>';
	if (repeated === 1) {
		stt = document.getElementById("status");
		stt.innerText = "Mật khẩu sai, hãy nhập lại";
	}
	hint = document.getElementById("hint");
	hint.innerText = hints[level];
}

function submitPassword() {
	const pass = document.getElementById("inputBox").value;
	if (pass == passwords[level]) {
		repeated = 0;
		level++;
		if (level === 3) 
		{
			show();
			return;
		}
	}else {
		repeated = 1;
	}
	getLevel(level, repeated);
}

function show() {
	container.style.backgroundImage="url(\"imgs/bg.jpg\")";
	container.innerHTML = '<p id="equal"></p><p id="sigma"></p><img id="pic1"><img id="pic2"><img id="pic3"><img id="pic4"><img id="pic5"><img id="pic6"><img id="pic7"><img id="pic8"><img  id="pic9"><img id="pic10"><img id="pic11"><img id="picTotal">';
	let pic;
	let count;
	let time = 0;
	clearInterval(count);
    count = setInterval(() =>
    {
		switch(time) {
			case 0:
				pic = document.getElementById("pic1");
				pic.style.left = "calc(95px + 12vw)";
				pic.style.top = "80px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avahmq.jpg";
				break;
			case 1:
				pic = document.getElementById("pic2");
				pic.style.left = "calc(100px + 5vw)";
				pic.style.top = "180px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avalntt.jpg";
				break;
			case 2:
				pic = document.getElementById("pic3");
				pic.style.left = "calc(100px + 18vw)";
				pic.style.top = "180px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avaptv.jpg";
				break;
			case 3:
				pic = document.getElementById("pic4");
				pic.style.left = "calc(100px + 5vw)";
				pic.style.top = "280px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avavma.jpg";
				break;
			case 4:
				pic = document.getElementById("pic5");
				pic.style.left = "calc(100px + 18vw)";
				pic.style.top = "280px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avaltkm.jpg";
				break;
			case 5:
				pic = document.getElementById("pic6");
				pic.style.left = "calc(100px + 5vw)";
				pic.style.top = "380px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avahhy.jpg";
				break;
			case 6:
				pic = document.getElementById("pic7");
				pic.style.left = "calc(100px + 18vw)";
				pic.style.top = "380px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avadthp.jpg";
				break;
			case 7:
				pic = document.getElementById("pic8");
				pic.style.left = "calc(100px + 5vw)";
				pic.style.top = "480px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avanhxt.jpg";
				break;
			case 8:
				pic = document.getElementById("pic9");
				pic.style.left = "calc(100px + 18vw)";
				pic.style.top = "480px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avavtn.jpg";
				break;
			case 9:
				pic = document.getElementById("pic10");
				pic.style.left = "calc(100px + 5vw)";
				pic.style.top = "580px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avadgh.jpg";
				break;
			case 10:
				pic = document.getElementById("pic11");
				pic.style.left = "calc(100px + 18vw)";
				pic.style.top = "580px";
				pic.style.width = "100px";
				pic.style.height = "100px";
				pic.src = "imgs/avatcp.jpg";
				break;
			case 11:
				pic = document.getElementById("sigma");
				pic.innerText = "Σ";
				pic.style.left = "50px";
				pic.style.top = "300px";
				break;
			case 12:
				pic = document.getElementById("equal");
				pic.innerText = "=";
				pic.style.top = "300px";
				pic.style.left = "550px";
				break;
			case 13:
				pic = document.getElementById("picTotal");
				pic.classList.add("fade-in");
				pic.style.top = "200px";
				pic.style.left = "700px";
				pic.style.width = "600px";
				pic.style.height = "400px";
				pic.src = "imgs/total.jpg";
				break;
			case 16:
				container.innerHTML='<img id="picFinal">';
				pic = document.getElementById("picFinal");
				pic.src = "imgs/final1.jpg";
				pic.classList.add("fade-in");
				break;
			case 19:
				container.innerHTML='<img id="picFinal">';
				pic = document.getElementById("picFinal");
				pic.src = "imgs/final2.jpg";
				pic.classList.add("fade-in");
				break;
			case 22:
				container.innerHTML='<img id="picFinal">';
				pic = document.getElementById("picFinal");
				pic.src = "imgs/cp3.jpg";
				pic.classList.add("fade-in");
				pic.style.width = "700px";
				pic.style.height = "500px";
				break;
			case 25:
				container.innerHTML='<img id="picFinal">';
				pic = document.getElementById("picFinal");
				pic.src = "imgs/cp5.jpg";
				pic.classList.add("fade-in");
				pic.style.width = "700px";
				pic.style.height = "500px";
				break;
			case 28:
				container.innerHTML='<img id="picFinal">';
				pic = document.getElementById("picFinal");
				pic.src = "imgs/cp6.jpg";
				pic.classList.add("fade-in");
				pic.style.width = "500px";
				pic.style.height = "500px";
				break;
			case 35:
				container.innerHTML = '<p id="finalText">The end</P>';
			case 40:
				clearInterval(count);
				break;
			default:
				break;
		}
        time++;
    }, 1000);
}

function play() {
	const btn = document.getElementById("yesBtn");
	let top = Math.floor(Math.random() * 71) + 10;
	let left = Math.floor(Math.random() * 81);
	while (top > 40 && top < 70 && left > 40 && left < 70) {
		top = Math.floor(Math.random() * 71) + 10;
		left = Math.floor(Math.random() * 81);
	}
	btn.style.top = `${top}vh`;
	btn.style.left = `${left}vw`;
	countPlay++;
	if (countPlay === 1) {
		countPlay = 0;
		runFunction();
	}
}

function gameSubmit() {
	const textInput = document.getElementById("inputBox").value;
	if (countPlay == 0) {
		stt = parseInt(textInput);
		countPlay++;
	}else if (countPlay == 1) {
		if (stt < 12 && gameAns[stt] == textInput) {
			countPlay++;
		} else repeated = 1;
	}
	needHint = 0;
	runFunction();
}

function gameShowHint() {
	needHint = 1;
	runFunction();
}

function runFunction() {
	container.innerHTML = '<div id="gameBox"><form id="inputForm"><label id="infoText">Nhập số thứ tự</label>: <label id="hint"></label><p><input type="password" id="inputBox"></p><p id="status"></p><button id="submitBtn" onClick="gameSubmit()">Enter</button><button id="submitBtn" onClick="gameShowHint()">Hint</button></form></div>';
	if (repeated === 1) document.getElementById("status").innerText = "Mật khẩu không hợp lệ";
	if (needHint === 1) document.getElementById("hint").innerText = "(Không có gợi ý đâu tự tìm ở web này đi :D)";
	const info = document.getElementById("infoText");
	switch (countPlay) {
		case 1:
			info.innerText = "Nhập mật mã";
			if (needHint === 1) document.getElementById("hint").innerText = "(Gợi ý sương sương là 8 kí tự)";
			break;
	}
}