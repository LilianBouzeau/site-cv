//mode sombre et claire navbar
//sombre
var body = document.body;
var btnT = document.getElementById("btnTheme");
btnT.addEventListener("click", couleurT);

function couleurT() {
    setTimeout((function() {
        body.style.backgroundColor = "#141d26";
        body.style.color = "#ffffff";
    }), 200)
}
//clair
var body = document.body;
var btnT2 = document.getElementById("btnTheme2");
btnT2.addEventListener("click", couleurT2);

function couleurT2() {
    setTimeout((function() {
        body.style.backgroundColor = "#FFFFFF";
        body.style.color = "#000000";
    }), 200)
}
//bouton top
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 800) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
$(document).ready(function() {
    $("#myBtn").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});
//regex formulaire contact
var validation = document.getElementById("submitContact");
//regex prenom
var prenom = document.getElementById("prenom");
var prenom_m = document.getElementById("prenom_manquant")
var prenom_v = /^[a-zA-zéèàîïÎÏÉÈ][a-zéêèàîïç]+([-'\s]a-zA-zéèàîïÎÏÉÈ][a-zéêèàîïç]+)?/;
validation.addEventListener('click', f_valid);

function f_valid(e) {
    if (prenom.validity.valueMissing) {
        e.preventDefault();
        prenom_m.innerHTML = 'Prénom manquant <i class="fas fa-exclamation"></i>';
        prenom_m.style.color = "red";
    } else if (prenom_v.test(prenom.value) == false) {
        event.preventDefault();
        prenom_m.innerHTML = 'Format incorrect <i class="fas fa-exclamation-triangle"></i>';
        prenom_m.style.color = "orange";
    } else {}
}
//regex nom
var nom = document.getElementById("nom");
var nom_m = document.getElementById("nom_manquant")
var nom_v = /^[a-zA-zéèàîïÎÏÉÈ][a-zéêèàîïç]+([-'\s]a-zA-zéèàîïÎÏÉÈ][a-zéêèàîïç]+)?/;
validation.addEventListener('click', f_valid1);

function f_valid1(e) {
    if (nom.validity.valueMissing) {
        e.preventDefault();
        nom_m.innerHTML = 'Nom manquant <i class="fas fa-exclamation"></i> ';
        nom_m.style.color = "red";
    } else if (nom_v.test(nom.value) == false) {
        event.preventDefault();
        nom_m.innerHTML = 'Format incorrect <i class="fas fa-exclamation-triangle"></i>';
        nom_m.style.color = "orange";
    } else {}
}
//regex email
var email = document.getElementById("email");
var email_m = document.getElementById("email_manquant")
var email_v = /[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})/;
validation.addEventListener('click', f_valid2);

function f_valid2(e) {
    if (email.validity.valueMissing) {
        e.preventDefault();
        email_m.innerHTML = 'Email manquant <i class="fas fa-exclamation"></i>';
        email_m.style.color = "red";
    } else if (email_v.test(email.value) == false) {
        event.preventDefault();
        email_m.innerHTML = 'Format incorrect <i class="fas fa-exclamation-triangle"></i>';
        email_m.style.color = "orange";
    } else {}
}
//regex telephone
var telephone = document.getElementById("telephone");
var telephone_m = document.getElementById("telephone_manquant")
var telephone_v = /(\+\d+(\s|-))?0\d(\s|-)?(\d{2}(\s|-)?){4}/;
validation.addEventListener('click', f_valid3);

function f_valid3(e) {
    if (telephone.validity.valueMissing) {
        e.preventDefault();
        telephone_m.innerHTML = 'Numéro de téléphone manquant <i class="fas fa-exclamation"></i>';
        telephone_m.style.color = "red";
    } else if (telephone_v.test(telephone.value) == false) {
        event.preventDefault();
        telephone_m.innerHTML = 'Format incorrect <i class="fas fa-exclamation-triangle"></i> ';
        telephone_m.style.color = "orange";
    } else {}
}
//regex message
var message = document.getElementById("message");
var message_m = document.getElementById("message_manquant")
validation.addEventListener('click', f_valid4);

function f_valid4(e) {
    if (message.validity.valueMissing) {
        e.preventDefault();
        message_m.innerHTML = 'Message manquant <i class="fas fa-exclamation"></i>';
        message_m.style.color = "red";
    } else {}
}