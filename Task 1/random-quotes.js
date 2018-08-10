displayRandomQuote = function () {
    var quotes = {
        0: "All computers wait at the same speed.",
        1: "A good programmer looks both ways before crossing a one-way street.",
        2: "Computers do not solve problems, they execute solutions.",
        3: "The best thing about a boolean is even if you are wrong, you are only off by a bit",
        4: "Ubuntu is an ancient African word, meaning 'can’t configure Debian'",
        5: "Without requirements or design, programming is the art of adding bugs to an empty 'text' file."

    }
    var rand = Math.floor(Math.random() * Object.keys(quotes).length);
    console.log(quotes[rand]);
}
displayRandomQuote();
