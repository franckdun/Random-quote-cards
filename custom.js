const quotes = [{
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `Mae West`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `Albert Einstein`
}, {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    writer: `Babe Ruth`
}, {
    quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
    writer: `Steve Jobs`
}, {
    quote: `"In order to write about life first you must live it."`,
    writer: `Ernest Hemingway`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `Soren Kierkegaard`
}, {
    quote: `"The unexamined life is not worth living."`,
    writer: `Socrates`
}, {
    quote: `"Turn your wounds into wisdom."`,
    writer: `Oprah Winfrey`
}, {
    quote: `"There is no wrong decision, i make a decision and i make it right."`,
    writer: `Mohamed Ali`
}, {
    quote: `"It is not the objective that is too high, but it is the number of steps that is insufficient."`,
    writer: `Confucius`
}, {
    quote: `"The difference between a dream and a project is a date."`,
    writer: `Walt Disney 🏰`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `Dalai Lama`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `Dalai Lama`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `Dalai Lama`
}, {
    quote: `"I never lose. Either I win or I learn."`,
    writer: `Nelson Mandela`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `Dalai Lama`
}, {
    quote: `"Do not expect any new knowledge from men who observe the sky.
    And that never tires of the crazy race of passing stars."`,
    writer: `Garden of Achievements`
}, {
    quote: `"Individually, men seek meaning in their existence.
    But in general, common ambitions serve as a reference to be accepted and esteemed by many."`,
    writer: `Garden of Achievements`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `Dalai Lama`
}, {
    quote: `"La blockchain sera dieu et le code sera sa la loi."`,
    writer: `Garden of Achievements`
}, {
    quote: `"A man is very strong when he confesses his weakness."`,
    writer: `Honoré de Balzac The Skin of Sorrow`
}, {
    quote: `"No one can reach dawn without passing through the path of night."`,
    writer: `Khalil Gibran`
}, {
    quote: `" ͡° ͜ʖ ͡°  &nbsp;Sages have come and given you their wisdom, I\'m just coming to take a little from you ! "`,
    writer: `Garden of Achievements`
}, {
    quote: `"Live for each second without hesitation."`,
    writer: `Elton John`
},]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);


    quote.innerHTML = quotes[random].quote;


    writer.innerHTML = quotes[random].writer;
})

