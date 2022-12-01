function menuGaucheClic(lien){
    let menu = document.getElementById('menu-gauche');
    let liens = menu.children;
    for (let i = 0 ; i<liens.length ; i++){
        liens[i].classList.remove("choisi")
    }
    lien.classList.add("choisi");
}

function attacherListenerMenuGauche(){
    let menu = document.getElementById("menu-gauche");
    let liens = menu.children;
    for (let i = 0 ; i<liens.length ; i++){
        liens[i].addEventListener('click', function(){
            menuGaucheClic(liens[i])
        });
    }
}

var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom");
var courriel = document.getElementById("courriel");
var motDePasse = document.getElementById("mot-de-passe");
var jsonBtn = document.getElementById("json-btn");

jsonBtn.addEventListener("click", function(){
    //store data in JavaScript object
    var data = {
        "Prenom":prenom.value,
        "Nom":nom.value,
        "Courriel":courriel.value,
        "MotDePasse":motDePasse.value
    }
    //convert JavaScript object to JSON
    jsonText.innerHTML = JSON.stringify(data)
})
/**
 * Fonction qui initie le lancement des fonctions de ce script. Appelée par "chargerSousContenu" dans navigation.js.
 * Remplace le DOMContentLoaded qui est lancé bien avant que le contenu associé à ce script ne soit dans l'écran.
 * @returns {Promise<void>}
 */
async function chargerinscription (){
    attacherListenerMenuGauche()
}