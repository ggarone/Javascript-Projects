function saluta(){
    alert("Ciao dalla funzione");
}

function getNome(){
    let username = prompt('Come ti chiami?');
    container.innerHTML += 'Ciao' + username;
}

function scriviQualcosa(){
    document.write("Ciao dalla function scriviQualcosa");
}

function esegui(){
    saluta();
    scriviQualcosa();
    getNome();
}

// esegui();

function benvenuto(){
    var username = prompt('Come ti chiami?');
    var messaggio = 'Ciao ' + username + ' benvenuto sulla pagina!';
    var elementoDemo = document.getElementById('demo');
    elementoDemo.innerHTML = messaggio;
}

function scriviFeed(){
    var elFeed = document.getElementById('feedback');
    elFeed.innerHTML = '<p>Qui sotto potrai scrivere la tua recensione</p>';
    elFeed.innerHTML += '<textarea rows=10></textarea><br>'
    elFeed.innerHTML += '<button onclick="salva()"> Invia Feed</button>'
}

function salva(){
    alert('Grazie per aver inviato il tuo feedback. Ciao');
}

function eseguiTutto(){
    benvenuto();
    scriviFeed();
}

