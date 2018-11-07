$(document).ready(function() {
    var swiper = new Swiper('.section-about_slider .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
        navigation: {
            nextEl: '.section-about_slider .swiper-button-next',
            prevEl: '.section-about_slider .swiper-button-prev',
        },
    });
    $('#sb_form_submit').click(
        function validate(){
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            var address = $('#sb_form_email').val();
            if(reg.test(address) == false) {
                $('#sb_form .form-subscribe_error').show();
                return false;
            }
            else{
                $('#sb_form .form-subscribe_error').hide();
                $('#sb_form .form-subscribe_valid').show();
            }
        });
    $('.menu-btn').click(function(e){
        e.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $(this).parent().toggleClass('header-menu_active');
    });
    $('#load_more_btn').click(function(e){
        e.preventDefault();
        var img_json = 'ajax/data.json';
        $.getJSON(img_json, {}).done(function( data ) {
            $.each( data.items, function( i, item ) {
                $('#projects').append(
                    '<div class="col">' +
                        '<div class="item-block">' +
                            '<img src="'+ item.src +'" alt="'+ item.alt +'">' +
                            '<div class="hover-container">' +
                                '<div class="favorite-block">' +
                                    '<a href="#" class="eye-icon"></a>' +
                                    '<a href="#" class="heart-icon"></a>' +
                                '</div>' +
                                '<div class="article-block">' +
                                    '<h5>' + item.title + '</h5>' +
                                    '<p>' + item.desc + '</p>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
                );
            });
        });
    });
})