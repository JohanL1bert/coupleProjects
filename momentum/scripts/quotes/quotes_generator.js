const footerSection = document.querySelector('.footer');

export const quoteBtn = footerSection.querySelector('button');
const quote = footerSection.querySelector('.quote');
const author = footerSection.querySelector('.author');

//FIXME: Переписать под API
export const getJsonData = async (lang) => { 
    try{
        const getLang = lang;
        const quotes = './scripts/quotes/quote2.json';
        const response = await fetch(quotes);
        const data = await response.json();
        const getLen = quoteGenerator(data)
        const randomNum = randomNumber(getLen);
        const getQuote = filterQuote(data, randomNum, getLang);
        writeQuote(getQuote);
    } catch(err) {
        console.error(err);
    }
}

const quoteGenerator = (getQuote) => {
    return getQuote.length -1;
}

const randomNumber = (max) => {
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
}

const filterQuote = (data, num, lang) => {
    return data[num][lang];
}

const writeQuote = (getQuote) => {
    quote.textContent = getQuote.quote;
    author.textContent = getQuote.author;
} 

