function calcolaArea(altezza, base){
    var area = altezza * base;
    return area;
}

var area = calcolaArea(5,9);
console.log(`L'area vale ${area}`);

function calcolaVolume(altezza, base, prof){
    var area = calcolaArea(altezza,base);
    return  area * prof;
}

console.log("Il volume vale: " + calcolaVolume(4,5,8));

//