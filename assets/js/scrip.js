$(document).ready(function (){
    $("a").click(function(event) {
        event.preventDefault();

        var gato = this.hash;
            $("html").animate(
                {
                    scrolltop:$(gato).offset().top,
                },
                800
            );
    });
});