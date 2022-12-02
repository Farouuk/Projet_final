ID_CLIENT = 1
TOKEN_CLIENT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZENsaWVudCI6MSwicm9sZSI6ImNsaWVudCIsImlhdCI6MTYzNjc1MjI1MywiZXhwIjoxODM2NzUyMjUzfQ.qMcKC0NeuVseNSeGtyaxUvadutNAfzxlhL5LYPsRB8k"


function add_item(id_item) {
    $.ajax({
        url: "/clients/" + ID_CLIENT + "/panier",
        method: "POST",
        data: {"idProduit": id_item, "quantite": 1},
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', "Basic " + TOKEN_CLIENT);
        },
        success: function (result) {
            $('#item_counter').text(result.items.length)
            console.log(result)
            chargerpanier()
        }
    });
}


function item_to_html(item) {
    item_card = $('<div></div>')
        .addClass('card mb-4 rounded-3 shadow-sm');

    item_head = $('<div></div>')
        .addClass('card-header py-3')
        .append('<h4 class="my-0 fw-normal">' + item.nom + '</h4>');

    item_detail = $('<ul></ul>')
        .addClass('list-unstyled mt-3 mb-4')
        .append('<li>Qte dispo :' + item.qte_inventaire + '</li>')
        .append('<li>Categorie. :' + item.categorie.nom + '</li>')
        .append('<div class="d-flex justify-content-center">' + '<button type="button" class="btn btn-primary position-relative" onclick="add_item(' +item.id+ ')">' +
            '<i class="bi bi-cart-plus"></i>' + '</button>' + '</div>');

    item_body = $('<div></div>')
        .addClass('card-body')
        .append(' <h1 class="card-title text-center"> $' + item.prix + '</h1>')
        .append(item_detail)
        .append('<small class="small">' + item.description + '</small>' +
            '<p class="w-100 display-6 text-center">' +
            '</button>' +
            '</p>')
        .append('<img class="myImg"  src="images/' + item.nom + '.png" alt="' + item.nom + '" width="50%" height="50%">' +
            '<div id="myModal" class="modal">' +
            '<span class="close">&times;</span>' +
            '<img class="modal-content" id="img">' +
            '<div id="caption"></div>' +
            '</div>');

    item_card.append(item_head).append(item_body);

    return $('<div></div>').addClass('col-md-3').append(item_card);
}



function chargerproduit() {
    $.ajax({
        url: "/produits",
        success: function (result) {
            // console.log(result);
            $.each(result, function (key, value) {
            item = item_to_html(value);
            $('#list_items').append(item);

                var modal = document.getElementById("myModal");

                // Get the image and insert it inside the modal - use its "alt" text as a caption
                var img = document.getElementsByClassName("myImg");
                var modalImg = document.getElementById("img");
                var captionText = document.getElementById("caption");

                for (const e in img) {
                    img[e].onclick = function () {
                        modalImg.src = this.src;
                        modal.style.display = "block";
                        captionText.innerHTML = this.alt;
                    }
                }


                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];

                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                    modal.style.display = "none";
                }

            });
        }
    });

}

function remove_item(id_item) {
    $.ajax({
        url: "/clients/" + ID_CLIENT + "/panier/" + id_item,
        method: "DELETE",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', "Basic " + TOKEN_CLIENT);
        },
        success: function (result) {
            console.log(result)
            $('#cart_details').empty();
            chargerpanier();
        }
    });
}

function chargerpanier() {
    $.ajax({
        url: "/clients/" + ID_CLIENT + "/panier",
        method: "GET",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', "Basic " + TOKEN_CLIENT);
        },
        success: function (result) {
            $('#total').empty();
            $("#total").text(result.valeur);
            $.each(result.items, function (key, value) {

                item = $("<tr>" +
                    "<td>" + value.nomProduit + "</td> " +
                    '<td> <img id ="imgPanier" class ="center" src="images/' + value.nomProduit + '.png"> </td>' +
                    "<td>" + value.prix.toFixed(2) + "</td> " +
                    "<td>" + value.quantite + "</td> " +
                    "<td>" + (value.prix * value.quantite).toFixed(2) + "</td> " +
                    '<td> <h3 class="bi bi-x-square-fill" onclick="remove_item(' +value.id + ')"></h3><br></section></td>' +
                    "</tr>");

                $('#cart_details').append(item);
            });
        }
    });
}

function one(obj){
    var item = $(obj).prev().andSelf().remove();
}


$(function () {

});


// $.ajax
// ({
//     type: "GET",
//     url: "clients",
//     dataType: 'json',
//     // async: false,
//     // data: '{}',
//     beforeSend: function (xhr){
//         xhr.setRequestHeader('Authorization', "Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZENsaWVudCI6MCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjM2NzUyMzAxLCJleHAiOjE4MzY3NTk1MDF9.QYtVOl6o87doRiT2EsezLqtSpz27K-nEZ4KqcmZV5Ac");
//     },
//     success: function (result){
//         console.log(result)
//     }
// });
