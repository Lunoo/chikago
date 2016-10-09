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
    $('.form input, .form textarea').blur(function(){
        if($(this).val()){
            $(this).next().hide();
        } else {
            $(this).next().show();
        }
    })
    $('.header-nav a').click(function(e){
        e.preventDefault();
        var $href = $(this).attr('href');
        $top = $($href).offset().top;
        $('body,html').animate({scrollTop: $top}, 1000);
        //window.location = $href;
    })
    // var controller = new ScrollMagic.Controller();
    // // build scene
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: ".slider"
    // })
    // .setTween("header", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
    // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    // .addTo(controller);
})
