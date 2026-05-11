$(document).ready(function () {
    
    // Loader masked
    function hideLoader() {
        $('#loader').fadeOut(500, function () {
            $(this).remove();
        });
    }

    setTimeout(hideLoader, 1500);
    window.addEventListener('reactLoaded', hideLoader);

    // navbar scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // hamburger
    $('.hamburger').on('click', function () {
        $('.nav-menu').toggleClass('open');
    });

    // smooth scroll
    $(document).on('click', '.nav-link', function (e) {
        e.preventDefault();
        const section = $(this).data('section');
        const target = $('#' + section);

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 600, 'swing');
        }

        $('.nav-menu').removeClass('open');
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // Active link whule scrolling
    $(window).on('scroll', function () {
        let scrollPos = $(window).scrollTop() + 120;

        $('.section-container').each(function () {
            let top = $(this).offset().top;
            let bottom = top + $(this).outerHeight();
            let id = $(this).attr('id');

            if (scrollPos >= top && scrollPos < bottom) {
                $('.nav-link').removeClass('active');
                $(`.nav-link[data-section="${id}"]`).addClass('active');
            }
        });
    });

    // scroll reveal
    function checkVisibility() {
        $('.skill-card, .project-card, .timeline-item').each(function () {
            let top = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > top + 60) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    setTimeout(checkVisibility, 600);

    // skiills bars animation
    function animateBars() {
        $('.skill-bar-fill').each(function () {
            let top = $(this).closest('.skill-card').offset().top;
            let windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > top + 50 && !$(this).hasClass('animated')) {
                let target = $(this).data('width');
                $(this).css('width', target + '%');
                $(this).addClass('animated');
            }
        });
    }

    $(window).on('scroll', animateBars);
    setTimeout(animateBars, 600);

    // timeline
    $(document).on('click', '.timeline-toggle', function () {
        const desc = $(this).siblings('.timeline-desc');
        desc.toggleClass('open');

        if (desc.hasClass('open')) {
            $(this).html('<i class="fa-solid fa-minus"></i> Réduire');
        } else {
            $(this).html('<i class="fa-solid fa-plus"></i> Voir détails');
        }
    });

    // form validation
    $(document).on('submit', '#contact-form', function (e) {
        e.preventDefault();
        let valid = true;

        const nom = $('#field-nom');
        if (nom.val().trim().length < 2) {
            nom.addClass('error');
            nom.siblings('.form-error').addClass('show');
            valid = false;
        } else {
            nom.removeClass('error');
            nom.siblings('.form-error').removeClass('show');
        }

        const email = $('#field-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.val())) {
            email.addClass('error');
            email.siblings('.form-error').addClass('show');
            valid = false;
        } else {
            email.removeClass('error');
            email.siblings('.form-error').removeClass('show');
        }

        const msg = $('#field-message');
        if (msg.val().trim().length < 10) {
            msg.addClass('error');
            msg.siblings('.form-error').addClass('show');
            valid = false;
        } else {
            msg.removeClass('error');
            msg.siblings('.form-error').removeClass('show');
        }

        if (valid) {
            showToast('Message envoyé avec succès !', 'success');
            $(this)[0].reset();
        } else {
            showToast('Veuillez corriger les erreurs.');
        }
    });

    // email copied
    function showToast(message, type) {
        type = type || 'default';
        $('.toast').remove();
        const toast = $('<div class="toast ' + type + '">' + message + '</div>');
        $('body').append(toast);
        setTimeout(function () {
            toast.fadeOut(300, function () { $(this).remove(); });
        }, 3000);
    }

    window.addEventListener('copyEmail', function (e) {
        showToast('Email copié : ' + e.detail.email, 'success');
    });

    // Back to top
     const backToTop = $('<div class="back-to-top"><i class="fa-solid fa-arrow-up"></i></div>');
    $('body').append(backToTop);

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            backToTop.addClass('show');
        } else {
            backToTop.removeClass('show');
        }
    });

    backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // ===== HOVER EFFETS LIENS CONTACT =====
    $(document).on('mouseenter', '.c-link', function () {
        $(this).find('i').css('transform', 'scale(1.2)');
    }).on('mouseleave', '.c-link', function () {
        $(this).find('i').css('transform', 'scale(1)');
    });

    console.log('%c CV chargé avec jQuery', 'color: #E85D5D; font-weight: bold; font-size: 14px');
})