function rand10(min,max) {
    return Math.floor(Math.random()*(max-min) + min);
    }
console.log (rand10(1,10));


function multiRand(n) {
    let tab = []; 
    for (i=0; i<n ; i++) {
         tab.push(rand10(1,10));
    }
   return tab;
}
console.log(multiRand(rand10(1,10)));