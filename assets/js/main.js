$(document).ready(function() {
    particlesJS.load('intro', 'assets/particles.json');

    $(window).width() > 1e3 && $("#fullpage").fullpage(), setTimeout(function() {
        $("body").hasClass("loaded") || $("body").addClass("loaded")
    }, 1000)
})
