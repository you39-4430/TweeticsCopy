import './scss/app.scss';

$(function () {
    $(window).on("load scroll", function () {
        if ($(this).scrollTop() == 0) {
            $('.l-header').removeClass('u-background')
        } else {
            $('.l-header').addClass('u-background')
        }
    });

    $('.is-required').on("keyup change blur", function () {
        if ($(this).val() == '') {
            $(this).parent('.is-error').addClass('error-open')
        } else {
            $(this).parent('.is-error').removeClass('error-open')
        }
    });

    $('.p-form__button').click(function () {
        $('.p-form__list').find('.is-required').each(function () {
            var tel = $('.p-form__input[name="number"]').val();
            var hyphen = tel.split('-');
            var hyphenLen = hyphen.length;
            if (hyphenLen === 1 && (!tel.match(/^0.*/) || tel.match(/[0-9]{10,11}/g) != tel)) {
                $('.p-form__input[name="number"]').parent('.is-error').addClass('error-open');
            }
            if (!document.contact.address.value.match(/.+@.+\..+/)) {
                $('.p-form__input[name="address"]').parent('.is-error').addClass('error-open');
            }
            if ($(this).val() == "") {
                $(this).parent('.is-error').addClass('error-open');
            } else {
                $(this).parent('.is-error').removeClass('error-open')
            }
        });
    });

    $('.p-form__button').click(function () {
        $('.p-form__list').find('.is-required').each(function () {
            var adjust = -69;
            var speed = 400;
            var href = "#contact";
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top + adjust;
            var tel = $('.p-form__input[name="number"]').val();
            var hyphen = tel.split('-');
            var hyphenLen = hyphen.length;
            if (hyphenLen === 1 && (!tel.match(/^0.*/) || tel.match(/[0-9]{10,11}/g) != tel)) {
                $('body,html').animate({
                    scrollTop: position
                }, speed, 'swing');
                return false
            } else if (!document.contact.address.value.match(/.+@.+\..+/)) {
                $('body,html').animate({
                    scrollTop: position
                }, speed, 'swing');
                return false
            } else if ($(this).val() == "") {
                $('body,html').animate({
                    scrollTop: position
                }, speed, 'swing');
                return false
            } else if ($('.p-check__checkBox').prop('checked') == false) {
                $('body,html').animate({
                    scrollTop: position
                }, speed, 'swing');
                return false
            } else {
                $('body,html').animate({
                    scrollTop: position
                }, speed, 'swing');
                $('.p-form__inner').css('display', 'none');
                $('.p-contact__title').css('display', 'none');
                $('.p-formCheck').css('display', 'block');
                $('.p-contact__title--check').css('display', 'block');
                return false
            }
        });
    });

    $('.p-scroll').click(function () {
        var adjust = -69;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

    $('.is-open').click(function () {
        var check = $(this).hasClass('open')
        if (check) {
            $(this).removeClass('open');
            $('.l-header__nav--sp').slideUp()
        } else {
            $(this).addClass('open');
            $('.l-header__nav--sp').slideDown();
        }
    });

    $('.l-header__link--sp').click(function () {
        $('.l-header__nav--sp').slideUp()
        $('.is-open').removeClass('open');
    });

    $('.is-required').on("keyup change blur", function () {
        $('.p-formCheck__name').text($('input[name="name"]').val());
        $('.p-formCheck__company').text($('input[name="company"]').val());
        $('.p-formCheck__manager').text($('input[name="manager"]').val());
        $('.p-formCheck__id').text($('input[name="id"]').val());
        $('.p-formCheck__select').text($('select[name="select"]').val());
        $('.p-formCheck__address').text($('input[name="address"]').val());
        $('.p-formCheck__number').text($('input[name="number"]').val());
        $('.p-formCheck__inquiry').text($('textarea[name="inquiry"]').val());
    });

    $('.p-formCheck__return').click(function () {
        $('.p-form__inner').css('display', 'block');
        $('.p-contact__title').css('display', 'block');
        $('.p-formCheck').css('display', 'none');
        $('.p-contact__title--check').css('display', 'none');
    });


});