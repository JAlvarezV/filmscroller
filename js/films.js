function getFilms() {
	var title = $('#s-input').val();
	if(title !== "") {
		$.getJSON("http://www.omdbapi.com/?s=" + title + "&page=" + page, function (data) {
			if (data["Response"] == "True") {
				totalPages = Math.ceil(data["totalResults"] / 10);
				$('#f-content').fadeOut(150);
				$('body').css("background-color", "#e3e5e8");
				var temp = data["Search"];
				for (i = 0; i < temp.length; i++) {
					newFilm(temp[i]["Poster"], temp[i]["Title"], temp[i]["Type"], temp[i]["Year"]);
				}
				page++;
			} else {
				$('#errors').html(data["Error"]);
			}
		});
	}
};