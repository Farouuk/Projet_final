function slapUser(user) {
    document.querySelector('#user').innerHTML = `
        <h3>${user.nom}</h3>
        <p>${user.courriel}</p>
    `

}

function connexion() {
    let COURRIEL = document.getElementById("courriel").value;
    let MDP = document.getElementById("mot-de-passe").value;
    console.log(document.getElementById("courriel").value);

    $.ajax({
        url: '/connexion',
        type: 'post',
        data: {
            courriel: COURRIEL,
            mdp: MDP,
        },
        contentType: "application/json",
        success: function (result) {
            TOKEN_CLIENT = result.token;
            TOKEN_ADMIN = result.token;
            ID_CLIENT = result.idClient;
            console.log(result);

            if (result.role === 'admin') {
                window.location.replace('#/accueil')
            } else {
                window.location.replace('#/produit')
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });

}

