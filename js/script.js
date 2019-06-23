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
        currentSlide = (currentSlide + 1)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }


}
