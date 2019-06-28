window.onload = function () {
    function clock() {
        var date = new Date(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();

        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;

        document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec;
    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 1000);
        clock()
    }

    clockStart()

    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 7000);

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }

    $('.blockSup').click(function () {
        if ($(this).attr('supType') == 1) {
            $('.blockSup-rate[supType="1"]').css('display', 'block') &&
            $('.blockSup-rate[supType="1"]').siblings('.titSup').css('display', 'none');
        } else if ($(this).attr('supType') == 2) {
            $('.blockSup-rate[supType="2"]').css('display', 'block') &&
            $('.blockSup-rate[supType="2"]').siblings('.titSup').css('display', 'none');
        } else if ($(this).attr('supType') == 3) {
            $('.blockSup-rate[supType="3"]').css('display', 'block') &&
            $('.blockSup-rate[supType="3"]').siblings('.titSup').css('display', 'none');
        } else if ($(this).attr('supType') == 4) {
            $('.blockSup-rate[supType="4"]').css('display', 'block') &&
            $('.blockSup-rate[supType="4"]').siblings('.titSup').css('display', 'none');
        } else if ($(this).attr('supType') == 5) {
            $('.blockSup-rate[supType="5"]').css('display', 'block') &&
            $('.blockSup-rate[supType="5"]').siblings('.titSup').css('display', 'none');
        } else if ($(this).attr('supType') == 6) {
            $('.blockSup-rate[supType="6"]').css('display', 'block') &&
            $('.blockSup-rate[supType="6"]').siblings('.titSup').css('display', 'none');
        }
    })

    $('.itemPack  button').click(function () {
        if ($(this).attr('packType') == 1) {
            $('.packSup-rate[packType = "1"]').css('display', 'block') &&
            $('.packSup-rate[packType = "1"]').siblings('.disPack').css('display', 'none');
        } else if ($(this).attr('packType') == 2) {
            $('.packSup-rate[packType = "2"]').css('display', 'block') &&
            $('.packSup-rate[packType = "2"]').siblings('.disPack').css('display', 'none');
        } else if ($(this).attr('packType') == 3) {
            $('.packSup-rate[packType = "3"]').css('display', 'block') &&
            $('.packSup-rate[packType = "3"]').siblings('.disPack').css('display', 'none');
        } else if ($(this).attr('packType') == 4) {
            $('.packSup-rate[packType = "4"]').css('display', 'block') &&
            $('.packSup-rate[packType = "4"]').siblings('.disPack').css('display', 'none');
        } else if ($(this).attr('packType') == 5) {
            $('.packSup-rate[packType = "5"]').css('display', 'block') &&
            $('.packSup-rate[packType = "5"]').siblings('.disPack').css('display', 'none');
        } else if ($(this).attr('packType') == 6) {
            $('.packSup-rate[packType = "6"]').css('display', 'block') &&
            $('.packSup-rate[packType = "6"]').siblings('.disPack').css('display', 'none');
        }
    })

}


