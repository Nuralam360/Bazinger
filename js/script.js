// form_validation js start

var fname = document.querySelector('#fname');
var fname_err = document.querySelector('#fname_err')

var email = document.querySelector('#email');
var email_err = document.querySelector('#email_err')
var email_regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var sub = document.querySelector('#sub');
var sub_err = document.querySelector('#sub_err')

var massage = document.querySelector('#massage');
var massage_err = document.querySelector('#massage_err')



function form_valid() {
    if (fname.value == '') {
        fname_err.innerHTML = 'Enter your name';
        fname_err.style.color = 'red';
        fname.style.borderColor = 'red';
        fname.focus();

        return false;
    } else if (email.value == '') {
        email_err.innerHTML = 'Enter your email';
        email_err.style.color = 'red';
        email.style.borderColor = 'red';
        email.focus();

        return false;
    } else if (!email_regx.test(email.value)) {
        email_err.innerHTML = 'Type a valid email';
        email_err.style.color = 'red';
        email.style.borderColor = 'red';
        email.focus();

        return false;
    } else if (sub.value == '') {
        sub_err.innerHTML = 'Enter your subject';
        sub_err.style.color = 'red';
        sub.style.borderColor = 'red';
        sub.focus();

        return false;
    } else if (massage.value == '') {
        massage_err.innerHTML = 'Type a massage';
        massage_err.style.color = 'red';
        massage.style.borderColor = 'red';
        massage.focus();

        return false;
    }

}

function remove() {
    if (fname.value != '') {
        fname_err.innerHTML = '';
        fname.style.borderColor = 'inherit';
    }
    if (email.value != '') {
        email_err.innerHTML = '';
        email.style.borderColor = 'inherit';
    }
    if (sub.value != '') {
        sub_err.innerHTML = '';
        sub.style.borderColor = 'inherit';
    }
}



fname.addEventListener('blur', remove)
email.addEventListener('blur', remove)
sub.addEventListener('blur', remove)

// form_validation js end

// animation js start

let navOff = $('#nav').offset().top

$(window).scroll(function () {
    let scrolling = $(this).scrollTop();


    if (scrolling > navOff) {
        $('#nav').addClass('menu_fix');
    } else {
        $('#nav').removeClass('menu_fix');
    }

});


$('.top').click(function () {
    $('html, body').animate({
        scrollTop: 0,
    }, 1500)
});


$(window).scroll(function () {
    let scrolling = $(this).scrollTop();

    if (scrolling > 300) {
        $('.top').fadeIn()
    } else {
        $('.top').fadeOut()
    }


});

// animation js end

// slider js start
$(function () {

    $('.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        dots: true,
    });

});
// slider js end