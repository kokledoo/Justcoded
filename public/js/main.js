$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
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
    $('body').on('click', '.delete-item', function(e) {
        $(this).closest('.wishlist-cart').remove();
    });
    $('body').on('click', '.clear-list-btn', function(e) {
        $('.cards-holder').html("<p class='empty-list text-uppercase'>your wishlist is empty</p>");
    });
})