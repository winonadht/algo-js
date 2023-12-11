let tab= ["alexis", "alice", "aurelien", "cassidy", "Damien", "Denis", "Giuseppe", "hanen", "huseyn", "jeremy", "joshua", "julien", "nicolas", "maoro", "marvin", "noé", "otman", "tess", "thomas", "ugur", "winona"]; 

let n = Math.floor(Math.random()*tab.length);

function pickLearner(inputAr, n) {
    let Arr = [];
    for ( let i = 0; i<n; i++) {
        let students = Math.floor(Math.random()*inputAr.length);
        Arr.push(inputAr[students]);
    }
    console.log(Arr);
}
pickLearner(tab,n);