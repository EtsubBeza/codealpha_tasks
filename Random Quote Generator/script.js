const quotes = [
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  }
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

// Show a quote on initial load
window.onload = getRandomQuote;
newQuoteBtn.addEventListener("click", getRandomQuote);
