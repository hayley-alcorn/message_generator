const quotes = {
    'love quotes':['Some people are worth melting for. - Olaf', 'Love is a song that never ends. - Bambi', "My dream wouldn't be complete without you in it. - Tiana"],
    'friendship quotes': ['Just keep swimming. - Dory', "You've got a friend in me. - Toy Story", 'Any day spent with you is my favorite day. So, today is my new favorite day - Winnie the Pooh.'],
    'inspirational quotes': ['The past can hurt. But the way I see it, you can either run from it, or learn from it. - Rafiki', "You're mad. Bonkers. Off your head ... But i'll tell you a secret ... some of the best people are. - Alice",'Life is a journey to be experienced, not a problem to be solved. - Winnie the Pooh']
};

let resultQuote = [];

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

function generateRandomQuote(quote) {
  for (let disneyquote in quotes) {
    let newNum = generateRandomNumber(quote[disneyquote].length)

    switch(disneyquote) {
        case 'love quotes':
            resultQuote.push(quote[disneyquote][newNum])
            break
        case 'friendship quotes':
            resultQuote.push(quote[disneyquote][newNum])
            break
        case 'inspirational quotes':
            resultQuote.push(quote[disneyquote][newNum])
            break
        default:
            resultQuote.push("Anything is possible.")
    }
  }
  console.log(resultQuote);
}

generateRandomQuote(quotes);