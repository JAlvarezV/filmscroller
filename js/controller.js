$(document).ready(function(){
    page=1;
    totalPages=0;
	$('#s-button').click(function (e) {
        e.preventDefault();
        page=1;
        totalPages=0;
        getFilms();
    });

    $(window).on("scroll", function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            getFilms();
        }
    });

    $body = $("body");

    $(document).on({
        ajaxStart: function() { $body.addClass("loading");},
        ajaxStop: function() { $body.removeClass("loading"); }
    });


});	