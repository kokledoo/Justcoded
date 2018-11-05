$(document).ready(function() {
    var swiper = new Swiper('.section-about_slider .swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: '.section-about_slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1
            }
        }
    });
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);
    $('.btn-see-all').click(function(e){
        e.preventDefault();
        $.getJSON('ajax/example.json', {}, function(json){
            $('#portfolio').html('');
            $('#portfolio').append('To: '   + json.note.to + '<br/>')
                .append('From: ' + json.note.from + '<br/>')
                .append('<b>'    + json.note.heading + '</b><br/>')
                .append(           json.note.body + '<br/>');
        });
    });
})