$(function(){
    $('.gallery a').fancybox({
        wrapCss: 'gal',
        helpers : {
            thumbs  : {
                width   : 50,
                height  : 50
            }
        }
    });
    $('.header-callback .callback').fancybox({
        wrapCss: 'call-form'
    });

    // Form

    $('.form input, .form textarea').blur(function(){
        if($(this).val()){
            $(this).next().hide();
        } else {
            $(this).next().show();
        }
    })

    // Navigation

    $('.header-nav a:not(.separate)').click(function(e){
        e.preventDefault();
        var $href = $(this).attr('href');
        $top = $($href).offset().top;
        $('body,html').animate({scrollTop: $top}, 1000);
    })

    // For Demo purposes only (show hover effect on mobile devices)

    // [].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
    //     el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
    // } );
    new WOW().init();

    // Headers slide effect

    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-1", duration: 300})
    .setTween(".second .title", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-1", duration: 300})
    .setTween(".second i.line", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-2", duration: 300})
    .setTween(".seventh .title", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-2", duration: 300})
    .setTween(".seventh i.line", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-3", duration: 300})
    .setTween(".eigth .title", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-3", duration: 300})
    .setTween(".eigth i.line", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-4", duration: 300})
    .setTween(".ninth .title", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-4", duration: 300})
    .setTween(".ninth i.line", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-5", duration: 300})
    .setTween(".eleventh .title", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-5", duration: 300})
    .setTween(".eleventh i.line", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-6", duration: 300})
    .setTween(".thirteenth .title", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-6", duration: 300})
    .setTween(".thirteenth i.line", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-7", duration: 300})
    .setTween(".fifteenth .title", {transform: "translateX(0)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-7", duration: 300})
    .setTween(".fifteenth i.line", {transform: "translateX(0)"}).addTo(controller);

    // Header effect

    new ScrollMagic.Scene({triggerElement: ".first .trigger-0"})
        .setClassToggle(".header", "zipped").addTo(controller);

    // Panorama

    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-2", duration: 1500})
    .setTween(".seventh", {backgroundPosition: "-181px 0"}).addTo(controller);

    // First block parallax effect

    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-0", duration: 800})
    .setTween(".block1", {left: "15%"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-0", duration: 1100})
    .setTween(".block2", {right: "10%"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-0", duration: 1100})
    .setTween(".first h2", {transform: "translateX(50%)"}).addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: ".trigger-0", duration: 1100})
    .setTween(".first .subheader", {transform: "translateX(50%)"}).addTo(controller);
})
