////////////// VARIABLES //////////////

// PAS NECESSAIRE DANS JQUERY 

let fiche = $(".profil");
let trash = $(".trash");
let nombre = $("#nombre");
//let counter = $('#compteur');
let groupe = fiche.length;

let recherche = $("#recherche");
let description = $("#description");
let ajouter = $("#ajouter");
// let nbe = fiche.length;

let loupe = $("#loupe");
let profil1 = $("#profil1");
let profil2 = $("#profil2");
let profil3 = $("#profil3");
let profil4 = $("#profil4");

////////////// INITIAL //////////////

$(document).ready(function() {
  init();
});

function init() {
  counter(); // Appel de la fonction COMPTEUR (plus bas).

  // Le 'click' sur le bouton 'Trash' déclanche la fonction 'onDelete'.
  // '.on' = 'addEventListener' en Js.
  $(".trash").on("click", onDelete);

  // Déclenchement de la fonction 'Add' en cliquant sur le bouton "AJOUTER"
  $("#ajouter").on("click", add);

  // Déclenchement de la fonction 'Search' en cliquant sur le bouton "LOUPE"
  // On effectue le addEventListener et le Click dans la même fonction.
  $("#loupe").click(search);
}

////////////// SUPRIMER //////////////

function onDelete(event) {
  // On casse le comportement par défaut lié au lien (rafraichissement).
  event.preventDefault();
  $(this)
    .parent().remove();

  counter();
}

////////////// COMPTEUR //////////////

function counter() {

  // '.text' = 'textContent' en Js.
  $("#compteur").text("Compteur: " + $(".trash").length);
}

////////////// AJOUTER ///////////////

//function pour ajouter l'element
function add() {

  if ($("#description").val() !== "") { // Si la case 'Description' n'est pas vide:

    let value = `<div id="profil1" class="profil shadow">
    <img class="photo" src="images/profil1.png" height="100px" width="100px" alt="1" />
    <h3>NEW PROFIL</h3>
    <p>${$("#description").val()}</p>
    <img class="trash" src="images/trash.svg" height="20px" width="20px" alt="trash" />
    </div>`;

    // Ajout dans le dom de l'article dans la section
    // '.append' (-> innerHTML += ) permet d'ajouter la valeur dans la section 'Bottom'.
    $("#bottom").append(value);
  }

  // Remet à vide le contenu du textarea.
  $("#description").val("");
  console.log($("#description").val());

  counter(); // Active la fonction "Compteur" qui s'actualise.
  init(); // Réenclenche la fonction initiale.
}

////////////// RECHERCHER ///////////////

function search(){
    
    $('.profil h3').each(function(i, element){

      // Compare le texte de notre input et si il est different des titres
      if( $('#recherche').val() !== $(element).text()){
        // On cache les elements
       $(element).parent().css('display', 'none')
      }
      else{
        // Ils sont identiques et donc ils sont afficher
        $(element).parent().css('display', 'flex')
      }
    })

    // Remet à vide le contenu du textarea.
    $("#recherche").val("");

}
  
////////////////////////////////////////////////
