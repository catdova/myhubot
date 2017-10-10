module.exports = function(droid06) {
	droid06.hear(/Hello!/, function(res) {
		return res.send("Hi there!");
	});
}

// droid06.respond(/Tell me a joke/, function(res) {
// 	return res.send("Want to hear a joke about the newspaper? Nevermind... it's tearable!");
// });


// droid06.respond(/Tell me another joke/, function(res) {
// 	return res.send("How does a penguin build it’s house? Igloos it together.");
// });

// droid06.hear(/guys/, function(res) {
// 	return res.send("Why not try 'buds' instead?");
// });
