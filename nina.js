let fiche = document.getElementsByClassName("profil");
let trash = document.getElementsByClassName("trash");
let nombre = document.getElementById("nombre");
// let compteur = document.getElementById('compteur');
let recherche = document.getElementById("recherche");
let description = document.getElementById("description");
let ajouter = document.getElementById("ajouter");
let nbe = fiche.length;
let loupe = document.getElementById("loupe");
let profil1 = document.getElementById("profil1");
let profil2 = document.getElementById("profil2");
let profil3 = document.getElementById("profil3");
let profil4 = document.getElementById("profil4");
console.log(nbe);
// event.preventDefault();

////////////// SUPRIMER //////////////

//On ajoute l'événement click sur tous les boutons qui ont la classe delete
for (let i = 0; i < trash.length; i++) {
trash[i].addEventListener("click", onDelete);
}
//on enleve les valeurs ( le texte contenu dans les input )
fiche.value = "";
function onDelete() {
//le 'this' permet de detecter l'element sur le lequel événement a eu lieu
this.parentNode.remove();
// nombre.innerHTML = nbe - 1;
// console.log(nbe);
}
//////////////// RAJOUTER ////////////////
ajouter.addEventListener("click", add_fields); // (Affiche les données rentrées dans 'Email' à l'enclenchement du bouton 'send').
// // event.preventDefault();
// console.log(recherche.value);
// console.log(description.value);
// add_fields();
// var nbe = fiche.length;
// nombre.innerHTML += 1;
function add_fields() {
var bottom = document.getElementById("bottom");
bottom.innerHTML +=
"<div class=profil shadow><img class=photo src=images/profil1.png height=100px width=100px alt=1 /><h3>" +
recherche.value +
"</h3>" +
"<p>" +
description.value +
"</p><img class=trash src=images/trash.svg height=20px width=20px alt=trash /></div>";
for (let i = 0; i < trash.length; i++) {
trash[i].addEventListener("click", onDelete);
}
// nombre.innerHTML = nbe + 1;
// console.log(nbe);
}
////////// RECHERCHER /////////////
function onclick();
for (let i = 0; i < fiche.length; i++) {
loupe.addEventListener("click", onclick);
if (recherche.value.toLowerCase() != fiche[i]) {
//style.display = "none";
break;
} 
else {
// alert(
// "Désolé! Ce profil n'hexiste pas, veuillez le créer en l'ajoutant pour pouvoir le rechercher."
// );
}
}
// console.log(fiche[2].value); 




