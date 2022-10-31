
const quotes = [
    { quote: 'Many  of lifes failures are people who did not realize how close they were to success when they gave up.', author:'Thomas Edison'},

    { quote: 'If you want to achieve greatness stop asking for permission.', author: 'Anonymous' },   

    { quote: 'Things work out best for those who make the best of how things work out.', author: 'John Wooden' },  

    { quote: 'If you are not willing to risk the usual you will have to settle for the ordinary.', author: 'Jim Rohn' }, 

    { quote: 'All our dreams can come true if we have the courage to pursue them.', author: 'Walt Disney' },

    { quote: 'Success is walking from failure to failure with no loss of enthusiasm.', author: 'Winston Churchill' },

    { quote: 'Try not to become a person of success, but rather try to become a person of value.', author: 'Albert Einstein' },

    { quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.', author: 'Eleanor Roosevelt' },

    { quote: ' successful man is one who can lay a firm foundation with the bricks others have thrown at him.', author: 'David Brinkley' },

    { quote: 'No one can make you feel inferior without your consent.', author: 'Eleanor Roosevelt' },

    { quote: 'The whole secret of a successful life is to find out what is ones destiny to do, and then do it.', author: 'Henry Ford' },

    { quote: 'What seems to us as bitter trials are often blessings in disguise.', author: 'Oscar Wilde' },

    { quote: 'The distance between insanity and genius is measured only by success.', author: 'Bruce Feirstein' },

    { quote: 'When you stop chasing the wrong things, you give the right things a chance to catch you.', author: 'Lolly Daskal' },

    { quote: 'To live a creative life, we must lose our fear of being wrong.', author: 'Anonymous' }];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
function init(){
    const todaysQuote=quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = `By (${todaysQuote.author})`;
}
init();
setInterval(init,60000);