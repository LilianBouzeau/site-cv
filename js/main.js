$(document).ready(function() { /*tout mettre a l'intérieur*/
    /*Alerte formulaire contact*/
    $('#formulaire').on('submit', function() {
        $('#navAlert').append('<div style="z-index:2000;margin:auto;" class="alert alert-success text-center col-6" role="alert">' +
            '<p>Le formulaire s\'est bien envoyé. <i class="fas fa-check"></i></p>' +
            '</div>');
    });
    /*animation scroll*/
    var taille = $('.separateur1-1').offset()
    $('.separateur1-1').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 400) {;
            $('.separateur1-1').show(2000);
        };
    });
    var taille = $('.separateur3-1').offset()
    $('.separateur3-1').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 400) {;
            $('.separateur3-1').fadeTo(1500, 1);
        };
    });
    var taille = $('.separateur2-1').offset()
    $('.separateur2-1').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 900) {;
            $('.separateur2-1').show(2000);
        };
    });
    var taille = $('.separateur3-2').offset()
    $('.separateur3-2').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 900) {;
            $('.separateur3-2').fadeTo(1500, 1);
        };
    });
    var taille = $('.separateur1-2').offset()
    $('.separateur1-2').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 1800) {;
            $('.separateur1-2').show(2000);
        };
    });
    var taille = $('.separateur3-3').offset()
    $('.separateur3-3').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 1800) {;
            $('.separateur3-3').fadeTo(1500, 1);
        };
    });
    var taille = $('.separateur2-2').offset()
    $('.separateur2-2').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 2200) {;
            $('.separateur2-2').show(2000);
        };
    });
    var taille = $('.separateur3-4').offset()
    $('.separateur3-4').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 2200) {;
            $('.separateur3-4').fadeTo(1500, 1);
        };
    });
    /*animation image*/
    var taille = $('.separateurImage1').offset()
    $('.separateurImage1').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 875) {;
            $('.separateurImage1').fadeTo(2000, 1);
        };
    });
    var taille = $('.separateurImage2').offset()
    $('.separateurImage2').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 1750) {;
            $('.separateurImage2').fadeTo(2000, 1);
        };
    });
    /*animation footer*/
    var taille = $('.separateurFooter').offset()
    $('.separateurFooter').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 2900) {;
            $('.separateurFooter').show(2000);
        };
    });
    var taille = $('.separateurFooter2').offset()
    $('.separateurFooter2').hide();
    $(document).on('scroll', function() {
        var scroll = $(document).scrollTop();
        if (scroll >= 2900) {;
            $('.separateurFooter2').fadeTo(1500, 1);
        };
    });
});