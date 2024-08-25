

function checkMenuVisibility() {
    // Kiểm tra nếu phần tử có id là "check-menu" được chọn
    if ($("#check-menu").is(":checked")) {
        // Hiển thị menu-mobile và thêm lớp tilt-in-right-1-visible
        $("#menu-mobile").css("display", "block");
        $("#menu-mobile").addClass("slide-in-top");
        $("#menu-mobile").removeClass("slide-out-top");

        // Hiển thị các phần tử li và language từ từ
        $("#menu-mobile ul li, #menu-mobile .language").each(function (index) {
            var delay = index * 300; // Đặt thời gian delay giữa các phần tử
            $(this).delay(delay).queue(function (next) {
                $(this).removeClass("d-none");
                $(this).removeClass("slide-out-right");
                $(this).addClass("tilt-in-right-1");
                next();
            });
        });
    } else {
        // Ẩn các phần tử li và language từ từ
        $("#menu-mobile ul li, #menu-mobile .language").each(function (index) {
            var delay = index * 300; // Đặt thời gian delay giữa các phần tử
            $(this).delay(delay).queue(function (next) {
                $(this).removeClass("tilt-in-right-1");
                $(this).addClass("slide-out-right");
                next();
            });
        });

        // Đóng menu-mobile và thêm lớp slide-out-right-visible
        setTimeout(function () {
            $("#menu-mobile").removeClass("slide-in-top");
            $("#menu-mobile").addClass("slide-out-top");
        }, 1200);

    }
}

$(document).ready(function () {
    // icon hamburger animate
    $('#hamburger').click(function () {
        $('#hamburger').toggleClass('open');
    });

    //text design change 
    var words = ["design", "sketch", "layout", "code", "imagine", "sculpt"];
    var index = 0;

    function changeText() {
        switch (words[index]) {
            case "imagine":
                if ($(window).width() > 767) {
                    $('#change-word').css('transform', 'scaleX(0.85) translateX(-6%)');
                } else {
                    $('#change-word').css('transform', 'scaleX(0.85)');
                }
                break;
            case "layout":
                $('#change-word').css('transform', 'scaleX(0.9)');
                break;
            default:
                $('#change-word').css('transform', 'scaleX(1)');
                break;
        }

        $('#change-word').text(words[index]);

        index = (index + 1) % words.length;
    }
    setInterval(changeText, 1500);

    //check mobile menu 
    $("#check-menu").change(function () {
        checkMenuVisibility();
    });

    //check box language selection
    $('#box-vi').click(function () {
        $('#box-vi').addClass('box-fill');
        $('#box-en').removeClass('box-fill');
    });
    $('#box-en').click(function () {
        $('#box-en').addClass('box-fill');
        $('#box-vi').removeClass('box-fill');
    });
    $('#box-light').click(function () {
        $('#box-light').addClass('box-fill');
        $('#box-dark').removeClass('box-fill');
    });
    $('#box-dark').click(function () {
        $('#box-dark').addClass('box-fill');
        $('#box-light').removeClass('box-fill');
    });
    //home btn 
    $('.home-btn').click(function (e) {
        window.location.href = 'index.html';

    });


    //preload
    setInterval(function () {
        $('#preloader').addClass('hide-preloader');
    }, 100);

    // $("#dark-btn").click(function () {
    //     // Lấy root element
    //     var root = document.documentElement;
    //     var color = root.style.getPropertyValue("--white");
    //     // Toggle giá trị variables
    //     if (color === "#F1EFE4") {
    //         root.style.setProperty("--white", "#12110D");
    //         root.style.setProperty("--black", "#F1EFE4");
    //         $('#octopus-start').attr('src', 'img/octopus-white.gif');
    //         $('#octopus-end').attr('src', 'img/octopus-end-white.gif');
    //         $('#octopus-fly').css('background', 'url(img/octopus-fly-white.gif) 62% 60% no-repeat');
    //         $('#dark-btn').html('DARK');
    //     } else {
    //         root.style.setProperty("--white", "#F1EFE4");
    //         root.style.setProperty("--black", "#12110D"); $('#dark-btn').html('LIGHT');
    //         $('#octopus-start').attr('src', 'img/octopus.gif');
    //         $('#octopus-end').attr('src', 'img/octopus-end.gif');
    //         $('#octopus-fly').css('background', 'url(img/octopus-fly.gif) 62% 60% no-repeat');
    //     }
    // });
    // $("#box-light").click(function () {  // Lấy root element
    //     var root = document.documentElement;
    //     var color = root.style.getPropertyValue("--white");
    //     root.style.setProperty("--white", "#12110D");
    //     root.style.setProperty("--black", "#F1EFE4");
    //     console.log("box light clicked");
    //     root.style.setProperty("--white", "#F1EFE4");
    //     root.style.setProperty("--black", "#12110D"); $('#dark-btn').html('LIGHT');
    //     $('#octopus-start').attr('src', 'img/octopus.gif');
    //     $('#octopus-end').attr('src', 'img/octopus-end.gif');
    //     $('#octopus-fly').css('background', 'url(img/octopus-fly.gif) 62% 60% no-repeat');

    // });
    // $("#box-dark").click(function () {// Lấy root element
    //     var root = document.documentElement;
    //     var color = root.style.getPropertyValue("--white");
    //     console.log("box light clicked");
    //     root.style.setProperty("--white", "#12110D");
    //     root.style.setProperty("--black", "#F1EFE4");
    //     $('#octopus-start').attr('src', 'img/octopus-white.gif');
    //     $('#octopus-end').attr('src', 'img/octopus-end-white.gif');
    //     $('#octopus-fly').css('background', 'url(img/octopus-fly-white.gif) 62% 60% no-repeat');
    //     $('#dark-btn').html('DARK');

    // });


    var language = "en";

    $("[data-vi], [data-en]").each(function () {
        if (language == "vi") {
            $(this).html($(this).data("vi"));
        } else if (language == "en") {
            $(this).html($(this).data("en"));
        }
    });

    $("#vie").click(function () {
        if (language == "vi") {
            language = "en";
            $('#vie').html('VIE');
        } else {
            language = "vi"; $('#vie').html('ENG');
        }

        $("[data-vi], [data-en]").each(function () {
            if (language == "vi") {
                $(this).html($(this).data("vi"));
            } else if (language == "en") {
                $(this).html($(this).data("en"));
            }
        });
    });
    $("#box-vi").click(function () {  // Lấy root element
        if (language == "vi") {
            language = "en";
            $('#vie').html('VIE');
        } else {
            language = "vi"; $('#vie').html('ENG');
        }

        $("[data-vi], [data-en]").each(function () {
            if (language == "vi") {
                $(this).html($(this).data("vi"));
            } else if (language == "en") {
                $(this).html($(this).data("en"));
            }
        });
    });
    $("#box-en").click(function () {// Lấy root element
        if (language == "vi") {
            language = "en";
            $('#vie').html('VIE');
        } else {
            language = "vi"; $('#vie').html('ENG');
        }

        $("[data-vi], [data-en]").each(function () {
            if (language == "vi") {
                $(this).html($(this).data("vi"));
            } else if (language == "en") {
                $(this).html($(this).data("en"));
            }
        });

    });
}); 