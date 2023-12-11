function calcSurface(length, width) {
    return length*width;
}
let length = Number(window.prompt("Entrez la longueur du rectangle :"));
let width = Number(window.prompt("Entrez la largeur du rectangle :"));

console.log(calcSurface(length, width));

// la fonction "calcSurface" multiplie la longueur et la largeur du rectangle à partir des nombres choisis par l'utilisateur.