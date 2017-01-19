function newFilm(poster,title,type,year){
    var f = $('<div></div>').addClass('f-card col-xs-12 col-sm-6 col-md-3');
    var img = $('<img>').attr("src",poster);
    if(title.length>25) title = title.substr(0,12)+"...";
    var tlt = $('<p>').html(title+"("+year+")").addClass("subtitle");
    f.append(img);
    f.append(tlt);
    $('#films-content').append(f);
}