let number = 0;
function ruota(){
    let foto = document.getElementById('foto');
    number = (number+1) % 5; 
    foto.innerHTML = `<img src="img/duck${number}.jpg" id="image" width="800" height="700"></img>`;
}