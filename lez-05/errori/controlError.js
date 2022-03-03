let btn = document.querySelector('#btn');

function controlla() {
    let demo = document.querySelector('#demo');
    let txt = document.querySelector('#mioTesto').value;
    demo.innerHTML = '';

    try {
        if(txt == '') throw "campo vuoto";
        if(isNaN(txt)) throw " non e' un numero";

        txt = Number(txt);

        if(txt > 10) throw "Numero troppo alto";
        if(txt < 5) throw "Numero troppo basso";

    } catch (error) {
        demo.innerHTML = "Errore: " + error;
    } finally {
        document.getElementById('mioTesto').value = '';
    }
}

btn.addEventListener('click',controlla,false);