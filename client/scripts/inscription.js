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
    $.ajax({
        url: '/clients',
        type: 'post',
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (result) {
            console.log(result);
        }
    });
})

function inscriptionClient() {
    let PRENOM = document.getElementById("prenom").value;
    let NOM = document.getElementById("nom").value;
    let AGE = document.getElementById("age").value;
    let ADRESSE = document.getElementById("adresse").value;
    let PAYS = document.getElementById("pays").value;
    let COURRIEL = document.getElementById("courriel").value;
    let MDP = document.getElementById("mdp").value;
    $.ajax({
        url: "/clients/",
        method: "POST",
        data: JSON.stringify({
            "mdp": MDP,
            "prenom": PRENOM,
            "nom": NOM,
            "age": AGE,
            "adresse": ADRESSE,
            "pays": PAYS,
            "courriel": COURRIEL
        }),
        data: JSON.stringify({
            "mdp": MDP,
            "prenom": PRENOM,
            "nom": NOM,
            "age": AGE,
            "adresse": ADRESSE,
            "pays": PAYS,
            "courriel": COURRIEL
        }),
        contentType: "application/json"
    });
}
/**
 * Fonction qui initie le lancement des fonctions de ce script. Appelée par "chargerSousContenu" dans navigation.js.
 * Remplace le DOMContentLoaded qui est lancé bien avant que le contenu associé à ce script ne soit dans l'écran.
 * @returns {Promise<void>}
 */
async function chargerinscription (){
    console.log("chargerinscription");
    // await chargerproduit();
    // await chargerpanier();
}