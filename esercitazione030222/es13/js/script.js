const hundred = 100;
for (let i = 1; i <= hundred; i++) {
    console.log(i + '- ')
    if(i%3==0 && i%5==0){
        console.log('Ciao Mondo');
    }
    else if(i % 3 == 0){
        console.log('Ciao');
    } else if(i % 5 == 0){
        console.log('Mondo');
    }
}