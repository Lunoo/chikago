$(function(){
    // SLIDER
    $('.slider .arrow-right').click(function(){
        $slider = $(this).parents('.slider');
        $active = $slider.find('.active');
        $active.toggleClass('active').next().toggleClass('active');
        if($active.next().length == 0){
            $slider.find('li:first-child').toggleClass('active');
        }
    })
    $('.slider .arrow-left').click(function(){
        $slider = $(this).parents('.slider');
        $active = $slider.find('.active');
        $active.toggleClass('active').prev().toggleClass('active');
        if($active.prev().length == 0){
            $slider.find('li:last-child').toggleClass('active');
        }
    }) 
})
