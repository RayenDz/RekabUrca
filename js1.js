
var Http = false;
var elem = document.documentElement;

function createInstance(){
	var Http = null;
	if (window.XMLHttpRequest){
		Http = new XMLHttpRequest();
		if (Http.overrideMimeType){
			Http.overrideMimeType('text/html');
		}
	} else if (window.ActiveXObject){
		try {
			Http = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				Http = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
	if (!Http) {
		alert('Impossible de créer une instance XMLHTTP');
		return false;
	}
	return Http;
}

setInterval(function(){
	var ifConnected = window.navigator.onLine;
	if (ifConnected) {
		window.internet.style = "color: #A6F0C6";
	} else {
		window.internet.style = "color: #FF5F40";
	}
}, 1000);
/*
setInterval(function(){
	if (location.hostname === "localhost" || location.hostname === serveur){
		window.intranet.style = "color: #A6F0C6";
	} else {
		window.intranet.style = "color: #FF5F40";
	}
}, 1000);
*/
setInterval(function(){
    var Http = createInstance();
	var pmeters = "action=message&user=";
	
	Http.open('POST', "data.php", true);

	Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	Http.send(pmeters);

	Http.onreadystatechange = function(){
		if(Http.readyState == 4){
			window.mail.innerHTML = Http.responseText;
		}
	}
}, 35000);

var loop = setInterval(function(){
	window.iframe.src = 'connection.php?user=';
	clearInterval(loop);
}, 15000);

setInterval(function(){
	var Http = createInstance();
	var pmeters = "action=message&user=";
	
	Http.open('POST', "data.php?action=backup", true);

	Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	Http.send(pmeters);

	Http.onreadystatechange = function(){
		if(Http.readyState == 4){
			window.backup.innerHTML = Http.responseText;
			setTimeout(function(){
				window.backup.innerHTML = "";
			}, 3000);
		}
	}
},3600000);

function FullscreenF(){
	if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement){
		closeFullscreen();
	} else {
		openFullscreen();
	}
}

function openFullscreen(){
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	}
}

function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	}
}
