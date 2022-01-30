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
        this.velocita = (this.num_giri / (this.marcia *100));
        console.log("La tua velocita' e' di : " + this.velocita);
    }
}


function valutaMotore(){
	let marca = document.getElementById('marca').value;
	let modello = document.getElementById('modello').value;
	let giriMotore = document.getElementById('giriMotore').value;
	let numMarcia = document.getElementById('numMarcia').value;

	auto.calcolaVel(marca,modello,giriMotore,numMarcia);

}