let info = document.getElementById('info');

//implementazione con obj
let auto = {
	marca: '',
	modello: '',
	cilindrata: 0,
	marcia: 0,
	velocita: 0,
	num_giri: 0,
	acceso: false,

	presentaMotore: function(marca,modello){
		this.marca = marca;
		this.modello = modello;
		console.log("Stai testando: " + this.marca + " - " + this.modello);
	},

	modificaGiri: function(num_giri){
		this.num_giri = num_giri;
		console.log(this.num_giri);
	},
	
	cambiaMarcia: function(marcia){
		this.marcia = marcia;
		console.log("Hai cambiato marcia!");
		console.log("Sei alla marcia: " + this.marcia);
	},

	calcolaVel: function(marca,modello,giri,marcia){
		this.presentaMotore(marca,modello);
		this.modificaGiri(giri);
		this.cambiaMarcia(marcia);
		this.velocita = (this.num_giri / (this.marcia * 100));
		console.log("La tua velocita' e' di : " + this.velocita);
	}
}

//implementazione con costruttore
function Auto(marca,modello,num_giri,marcia){
	this.marca = marca;
	this.modello = modello;
	this.num_giri = num_giri;
	this.marcia = marcia;
	this.cilindrata = 0;
	this.velocita = 0;
	this.acceso = false;

	this.presentaMotore = function(){
		return `Stai testando: ${this.marca} ${this.modello}<br>`;
	},

	this.modificaGiri = function(num_giri){
		this.num_giri = num_giri;
		return `${this.num_giri} giri motore<br>`;
	},

	this.cambiaMarcia = function(marcia){
		this.marcia = marcia;
		return `Sei alla marcia: ${this.marcia}<br>`;
	},

	this.calcolaVel = function(num_giri,numMarcia){
		let info='';
		info += this.presentaMotore();
		info += this.modificaGiri(num_giri);
		info += this.cambiaMarcia(numMarcia);
		this.velocita = (this.num_giri / (this.marcia * 100));
		info += `La tua velocita' e' di ${this.velocita.toFixed(2)}<br>`;
		return info;
	}
}

function valutaMotore(){
	info.innerHTML = ''
	let marca = document.getElementById('marca').value;
	let modello = document.getElementById('modello').value;
	let giriMotore = document.getElementById('giriMotore').value;
	let numMarcia = document.getElementById('numMarcia').value;

	auto.calcolaVel(marca,modello,giriMotore,numMarcia);
	let auto2 = new Auto(marca,modello,giriMotore,numMarcia);
	info.innerHTML = auto2.calcolaVel(giriMotore,numMarcia);

}