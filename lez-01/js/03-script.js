var demo = document.getElementById('demo');

function saluta(){
	var username = document.getElementById('username').value;
	if(username == ""){
		demo.innerHTML = "Non hai compilato il campo";
		demo.style = "color:red";
	} else {
		console.log(username);
		demo.innerHTML = "Ciao " + username;
		demo.style = "color:black";
	}
	document.getElementById('username').value = '';
}

var ff = document.getElementById('ff');
for (let i = 0; i < 50; i++) {
	for (let j = 0; j < i; j++) {
		ff.innerHTML += '*' + ' ';
		ff.style = "font-size:33px";
	}
	ff.innerHTML += '<br>';
}

