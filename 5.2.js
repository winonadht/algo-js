function askTvSerie(){
    let tvSerie = {
        // cle :valeur 
        title : prompt('quel est votre film préféré?'),
        years : parseFloat(prompt('donne moi son année de production')),
        addactors : []
    }
    let actors = prompt ('quels sont les acteurs');
    while (actors !=''){
        tvSerie.addactors.push(actors);
        actors = prompt ('quels sont les acteurs');
    }
    return tvSerie;

}

function randomizeCast(tvSerie) {
    let actorshasard = [];
    for (let i = 0; i < tvSerie.addactors.length; i++){
        let hasard = Math.floor(Math.random()*tvSerie.addactors.length);
        actorshasard.push[tvSerie.addactors[hasard]];
        console.log(tvSerie);
    }
    tvSerie.addactors = actorshasard;

}

randomizeCast(askTvSerie());