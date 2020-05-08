$(function(){
    const child = ".child";
    $(child) .hide();
    $("#menu > li").hover(function(){
        $(child, this).stop().slideDown(300);
    },function(){
        $(child,this).stop().slideUp(300);
    })


    $(window).scroll(function(){
        if($(this).scrollTop() > 700){
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        };
    });



   

   

   






    $(window).scroll(function(){
        $('.mission').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin')
            }
        })
    })
    $(window).scroll(function(){
        $('.news').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin')
            }
        })
    })
    $(window).scroll(function(){
        $('.service').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin')
            }
        })
    })
    $(window).scroll(function(){
        $('.introduce').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin')
            }
        })
    })
    $(window).scroll(function(){
        $('.introduce').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin')
            }
        })
    })



});






