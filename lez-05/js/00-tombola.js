let numArray = [];


//WITH FOR
// for (let i = 0; i < 5; i++) {
//     let randomNumber = Math.ceil(Math.random() * 90);
    
//     if(numArray.indexOf(randomNumber) != -1){
//         i--;
//     } else {
//         numArray.push(randomNumber);
//     }
// }


// WITH WHILE

// while(numArray.length < 5){
//     let randomNumber = Math.ceil(Math.random() * 90);
//         if(numArray.indexOf(randomNumber) == -1)
//             numArray.push(randomNumber);
// }


//WITH NO FOR/WHILE
let allNumbers = [...Array(90+1).keys()].slice(1);
let randomNumber = Math.ceil(Math.random() * 90);
allNumbers.splice(numArray.indexOf(randomNumber), 1);
numArray.push(randomNumber);
randomNumber = Math.ceil(Math.random() * 90);
allNumbers.splice(numArray.indexOf(randomNumber), 1);
numArray.push(randomNumber);
randomNumber = Math.ceil(Math.random() * 90);
allNumbers.splice(numArray.indexOf(randomNumber), 1);
numArray.push(randomNumber);
randomNumber = Math.ceil(Math.random() * 90);
allNumbers.splice(numArray.indexOf(randomNumber), 1);
numArray.push(randomNumber);
randomNumber = Math.ceil(Math.random() * 90);
allNumbers.splice(numArray.indexOf(randomNumber), 1);
numArray.push(randomNumber);

if(numArray.length == 5)
    console.log(numArray);

