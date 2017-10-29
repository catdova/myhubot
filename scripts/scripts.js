module.exports = function(droid06) {
	droid06.hear(/Hello!/, function(res) {
		return res.send("Hi there!");
	});


	droid06.respond(/Tell me a joke/, function(res) {
		return res.send("Want to hear a joke about the newspaper? Nevermind... it's tearable!");
	});
/*
	droid06.respond(/Tell me another joke/, function(res) {
		return res.send("How does a penguin build it’s house? Igloos it together.");
	});

	droid06.hear(/I'm sad/), function(msg) {
		return msg.send("Maybe this will chear you up! Why can't you hear a pterodactyl go to the bathroom? The p is silent.");
	};

	droid06.respond(/tell me a knock knock joke/), function(msg){
		return msg.send("Knock knock!");
	}

	droid06.respond(/who's there/), function(msg){
		var whosThere = ["Amos","Woo", "Hutch", "Radio","Ida"];
		var rand = whosThere[Math.floor(Math.random() * whosThere.length)];
		return msg.send(rand)
	}

	droid06.respond(/(.*) who/, function(msg) {
  	var punchline;
  	punchline = msg.match[1];
 	console.log(punchline);
  	switch (punchline) {
	  	case "Amos":
	   		return msg.reply("A mosquito bit me!");
	   		break;
		case "Woo":
			return msg.reply("Don't get too excited, it's only a joke.");
  			break;
		case "Hutch":
			return msg.reply("Bless you!");
		 	break;
		case "Radio":
			return msg.reply("Radio not, here I come!");
			break;
		case "Ida":
			return msg.reply("Ida like to be your friend!");
			break;
		default:
			return msg.reply("you ruined my joke");
	  }
});

*/
}

