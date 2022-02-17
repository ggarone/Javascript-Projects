//notazione letterale

let studente = {
	//definisco proprieta' e metodi
	nome: "Giuseppe",
	cognome: "Garone",
	promosso: true,
	matricola: 123,
	dataNascita: new Date('07/04/1995').getFullYear(),

	superaEsame: function(){
		alert('hai superato l\'esame');
	}   
}

let docente = {
	//definisco proprieta' e metodi
	nome: "Dario",
	cognome: "Mennillo",
	dataNascita: new Date('04/13/1989').getFullYear(),
	programmi: 'Sanremo',

	conduci: function(){
		alert("Benvenuti cari studenti");
	}

}

let rettore = {
	nome: "Piero",
	cognome: "Angela",
	dataNascita: new Date('01/01/1933').getFullYear(),
	facolta: 'Super Quark'
}

console.log(studente.cognome);
// studente.superaEsame();

let demo = document.getElementById('demo');

function stampaInfo(persona){

	// demo.innerHTML = persona.nome + '<br>';
	// demo.innerHTML += persona.cognome + '<br>';
	// demo.innerHTML += persona.matricola + '<br>';
	// demo.innerHTML += persona.dataNascita + '<br>';
	// demo.innerHTML += persona.promosso + '<br>';
	demo.innerHTML = '';
	//for in
	for (const key in persona) {
		if(typeof persona[key] != "function"){
			//key e' una stringa (non posso usare il punto)
			demo.innerHTML += persona[key] + '<br>';
		}
	}
}