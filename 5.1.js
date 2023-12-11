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

console.log(askTvSerie());