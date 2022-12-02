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
            let TOKEN_CLIENT = result.token;
            let TOKEN_ADMIN = result.token;
            let ID_CLIENT = result.idClient;
            console.log(result);

            if (result.role === 'admin') {
                localStorage.setItem('token', TOKEN_ADMIN);
                window.location.replace('#/accueil')
            } else {
                localStorage.setItem('token', TOKEN_CLIENT);
                window.location.replace('#/produit')
            }

            localStorage.setItem('idClient', ID_CLIENT);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });

}

