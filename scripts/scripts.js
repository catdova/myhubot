module.exports = function(droid06) {
	droid06.hear(/Hello!/, function(res) {
		return res.send("Hi there!");
	});


	droid06.respond(/Tell me a joke/, function(res) {
		return res.send("Want to hear a joke about the newspaper? Nevermind... it's tearable!");
	});

	droid06.respond(/Tell me another joke/, function(res) {
		return res.send("How does a penguin build it’s house? Igloos it together.");
	});

	droid06.hear(/Im sad/, function(res) {
		return res.send("Maybe this will cheer you up! Why can't you hear a pterodactyl go to the bathroom? The p is silent.");
	});

	droid06.respond(/tell me a knock knock joke/, function(res){
		return res.send("Knock knock!");
	});

	droid06.respond(/(who\'s there)/, function(res){
		var whosThere = ["Amos","Woo", "Hutch", "Radio","Ida"];
		console.log(whosThere);
		var rand = whosThere[Math.floor(Math.random() * whosThere.length)];

		return res.send(rand);
	});
 
	droid06.respond(/((.*)+ who)/, function(res) {
	  	var punchline;
	  	punchline = res.match[0];
	  	console.log(res.match);
	 	console.log(punchline);
	  	switch (punchline) {
		  	case "Amos":
		   		return res.reply("A mosquito bit me!");
		   		break;
			case "Woo":
				return res.reply("Don't get too excited, it's only a joke.");
	  			break;
			case "Hutch":
				return res.reply("Bless you!");
			 	break;
			case "Radio":
				return res.reply("Radio not, here I come!");
				break;
			case "Ida":
				return res.reply("Ida like to be your friend!");
				break;
			default:
				return res.reply("you ruined my joke");
				break;
		}
	});

};

