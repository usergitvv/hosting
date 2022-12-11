$(document).ready(function() { 

    // Burger /==============================/

    $('#burgerBtn').on('click', function(event) {
        event.preventDefault();        

        $('.line-1').toggleClass('active');
        $('.line-2').toggleClass('rotate2');
        $('.line-3').toggleClass('rotate3');

        $('#nav').toggleClass('header__nav_show');
        $('body').toggleClass('lock');
    });

    // Spoiler ('accordion') for footer__body-item /=====================/

    let footTitle = $('.footer__body-item_title');

    footTitle.on('click', function() {
        $(this).toggleClass('opened').next().slideToggle(300);
        $(footTitle).not(this).removeClass('opened').next().slideUp(300);        
    });

    // Modal /========================/

    $('.btn_intro').on('click', function() {

        $('body').addClass('lock');
        $('.modal[data-modal="window-get_started"]').fadeIn(300).addClass('modal_opened');        
        setTimeout(alertWindow, 400);       
    });

    $('.btn_footer').on('click', function() {

        $('body').addClass('lock');
        $('.modal[data-modal="window-subscribe"]').fadeIn(300).addClass('modal_opened');        
        setTimeout(alertWindow, 400);       
    });

    $('.btn-login').on('click', function() {        
        $('.modal[data-modal="window-password"]').fadeIn(300).addClass('modal_opened');        
        setTimeout(alertWindow, 400);       
    });

    $('.btn-login.btn-login_burger').on('click', function() {        
        $('.modal[data-modal="window-password"]').fadeIn(300).addClass('modal_opened');
    });

    $('.btn_intro.btn_blog').off();

    $('.modal__close').on('click', function() {    
        $('body').removeClass('lock');              
        $('.modal').fadeOut(300).removeClass('modal_opened');
    });
    
    $('.login__close').on('click', function() {
        $('.modal').fadeOut(300).removeClass('modal_opened');
    });

    function alertWindow() {
        alert("Attention, the opened window is a demo, it's not functional.");
    }

    
    $('body').keyup(function(event) {
        
        if (event.which == 27) {
            $('.modal').fadeOut(300).removeClass('modal_opened');
            $('body').removeClass('lock');
        }
    });

        $('#btnEmail').off();
        $('#btnTel').off();
        $('#btnLogin').off();
        $('#btnPassword').off();

    // Smooth scroll to section /================================/

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let scrollEl = $(this).data('scroll');
        let scrollElPos = $(scrollEl).offset().top;

        $(':root').animate({
            scrollTop: scrollElPos - $('#header').height()
        }, 400);

    });


    // Progressbar /===========================/      
        
        let docHeight = ($(document).height() - $(window).outerHeight());
        let ratio = docHeight/$('.scrollheight').width();
                
        $(document).on('scroll', function() {
            resizeBlock();         
        });
        
        $(window).on('resize', function() {
            resizeBlock()
        });
        
        function resizeBlock() {
            docHeight = ($(document).height() - $(window).outerHeight());
            ratio = docHeight/$('.scrollheight').width();
            
            let infoPos = $('#header').offset().top;           

            $('.scrollheight__info').css({
                width:  (infoPos/ratio) + 'px'                
            })                 
        }

        resizeBlock();
            
});  

