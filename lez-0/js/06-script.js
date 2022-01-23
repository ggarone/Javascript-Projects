let txt = "same shit, different day";
let len = txt.length;

console.log(len);

var search1 = txt.indexOf('diff');
console.log(search1);

var search2 = txt.lastIndexOf('e');
console.log(search2);

var search3 = txt.indexOf('e');
console.log(search3);

var search4 = txt.charAt(3);
console.log(search4);

var search5 = txt.indexOf('z');
console.log(search5);

//metodi per il taglio
var testo = "Type of superintellingence";
var sl = testo.slice(5,10);
console.log(sl);

var sl2 = testo.substring(5,10);
console.log(sl2);

//Metodi per sostituzione
var stringa = "The best browser in the world is Internet Explorer";
var sost = stringa.replace("Internet Explorer", "Firefox");
console.log(sost);

var upp = stringa.toUpperCase();
console.log(upp);

//Metodi da string ad Array
var string1 = "Ciao";
var arr1 = string1.split('');
console.log(arr1);

var string2 = 'Ciao-come-stai';
var arr2 = string2.split('-');
console.log(arr2)

var arr3 = ['D' +'A' + 'R' + 'T'];
var string3 = arr3.join('');
console.log(string3);

//gira la stringa
var strEs = "Ciao come stai? "
var strEs2 = strEs.split('').reverse().join('');
console.log(strEs2);

var reg = new RegExp('abc');
var reg2 = /abc/;

var CFReg = /[a-z]{6}\d{2}[abcdfghilmno]\d{2}[a-z]\d{3}[a-z]/i
var testCF = CFReg.test('NHDGRA54D22F923R');
console.log(testCF);

