let list = document.getElementsByTagName('ul')[0];
//insert al primo LI
let primo = document.createElement('li');
primo.innerHTML = 'comprare frutta';
list.insertBefore(primo,list.firstElementChild)
//insert all'ultimo LI
let ultimo = document.createElement('li');
ultimo.innerHTML = 'andare al cinema';
list.appendChild(ultimo);
//insert al secondo LI
let secondo = document.createElement('li');
secondo.innerHTML = 'bowling';
list.insertBefore(secondo,list.children[1]);
//aggiungo una classe a tutti
//lis e' una oggetto collection che non e' iterable
let lis = document.querySelectorAll('li');
//... trasforma la collection in una lista (che e' iterable)
[...lis].forEach(Element => {
    Element.setAttribute('class','fontUp red');
});

//scrivo il conto di quante cose ho da fare
let titolo = document.querySelector('h3'); //prende la prima occorrenza
titolo.innerHTML = 'Devi fare ' + lis.length + ' cose';
let txtH3 = titolo.firstChild.nodeValue;
titolo.innerHTML = txtH3.replace('tot',lis.length);

