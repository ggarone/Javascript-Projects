let ulEl = document.querySelector('ul');
console.log(ulEl.firstElementChild);
console.log(ulEl.firstChild);

let itemDue = document.getElementById('due');
let eltext = itemDue.firstChild.nodeValue;
eltext = eltext.replace("Studiare","Programmare");
itemDue.firstChild.nodeValue = eltext;

