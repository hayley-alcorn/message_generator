const quotes = ['Just keep swimming.', 
"You've got a friend in me", 
'Some people are worth melting for.', 
'Any day spent with you is my favorite day. So, today is my new favorite day.', 
'The past can hurt. But the way I see it, you can either run from it, or learn from it.'];

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

function generateRandomQuote(quote) {
  let newNum = generateRandomNumber(quotes.length)
  console.log(quotes[newNum])
}

generateRandomQuote(quotes)