function saluta(nome) {
    console.log(`Ciao ${nome}`);
}

const btn = document.getElementById('btn');

// method 1 - gestore eventi
// btn.onclick = saluta;

// method 2 - event listener
// with no parameters
// btn.addEventListener('click',saluta,false);
// with parameters -> use function
// btn.addEventListener('click',function(){
//     saluta('Dario')
// }, false);

const demo = document.getElementById('demo');
const primaFunz = () => console.log("sono una funzione globale");
const secondFunz = () => console.log("sono anche io una funzione globale");

demo.addEventListener('mouseenter', () => {
    primaFunz();
    secondFunz();
    demo.classList.add('animate__animated','animate__fadeOutDown');
});

demo.addEventListener('mouseout', () => {
    demo.classList.remove('animate__fadeOutDown');
    demo.classList.add('animate__animated','animate__fadeInDown');
})







