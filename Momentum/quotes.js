const quotes = [
{
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
},
{
    quote: "Hakuna Matata!",
    author: "The Lion King",
},
{
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
},
{
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
},
{
    quote: "The only thing worse than starting something and falling.. is not starting something.",
    author: "SEth Godin"

},
{
    quote: "Our fate lives within us,you only have to be brave enough to see it.",
    author: "Merida"
},
{
    quote: "Success is not given for free. You have to be able to do anything for your goals.",
    quthor: "Coco"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;