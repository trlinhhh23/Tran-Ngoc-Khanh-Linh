$(document).ready(function () {
    // Hàm kiểm tra overlay
    function checkOverlay() {
        var header = $('header');
        var background = $('.background');

        // Lấy kích thước và tọa độ của header và background
        var headerRect = header[0].getBoundingClientRect();
        var backgroundRect = background[0].getBoundingClientRect();

        // Kiểm tra xem header có đè lên background không
        if (
            headerRect.left < backgroundRect.right &&
            headerRect.right > backgroundRect.left &&
            headerRect.top < backgroundRect.bottom &&
            headerRect.bottom > backgroundRect.top
        ) {
            $('.red-fill').addClass('black-fill');
            $('#blink').addClass('black-fill');
            $('header').find('hr').addClass('black-fill');

            $('.header-left > span').hover(function () {
                $(this).css('text-decoration-color', 'var(--black');
            }, function () {
                $(this).css('text-decoration-color', 'transparent');
            });
            $('.header-right > span > a').hover(function () {
                $(this).css('text-decoration-color', 'var(--black');
            }, function () {
                $(this).css('text-decoration-color', 'transparent');
            });
            $('#hamburger > span').css('background', 'var(--white)')
            $('.open').find('span').css('background', 'var(--red)')

        } else {
            $('.red-fill').removeClass('black-fill');
            $('#blink').removeClass('black-fill');
            $('header').find('hr').removeClass('black-fill');

            $('.header-left > span').hover(function () {
                $(this).css('text-decoration-color', 'var(--red)');
            }, function () {
                $(this).css('text-decoration-color', 'transparent');
            });
            $('.header-right > span > a').hover(function () {
                $(this).css('text-decoration-color', 'var(--red)');
            }, function () {
                $(this).css('text-decoration-color', 'transparent');
            });

            $('#hamburger > span').css('background', 'var(--red)')
        }
    }

    // Gọi hàm kiểm tra khi trang được tải xong và khi có sự kiện scroll hoặc resize
    $(window).on('load scroll resize', function () {
        checkOverlay();
    });
    $('#hamburger').on('click', function () {
        checkOverlay();
    });
});