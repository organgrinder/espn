
// ESPN API Key: 3q8x3mfbka42zht8sewwhjmt

function initialize() {

} // end initialize

function loadPlayers() {
	var base = "http://api.espn.com/v1/";
	var suffix = "sports/basketball/mens-college-basketball/athletes";
	var url = "" + base + suffix;
	$.get(
		url,
		{ 
			_accept: "application",
			apikey: "3q8x3mfbka42zht8sewwhjmt",
			enable: "stats",
			limit: 500
		},
		function(data) {
			if (data) { 
				$("#display_results").html("<h3>These are some NCAA basketball players who were born outside the US</h3>");
				$.each(data.sports[0].leagues[0].athletes, function(index, item) {
					if (item.birthPlace.country && item.birthPlace.city != "USA") {
						$("#display_results").append(
							"<h4>" + item.displayName + ": </h4>" +
							item.birthPlace.city + ", " +
							item.birthPlace.country);	
					}
				});
			} else {
				$("#display_results").html("Error loading data from API");
			}
		}
	);
} // end loadPlayers
