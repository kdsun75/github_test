const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year:1979
    }
];
/*
const newmovies = movies.map(function(movie){
    return `${movie.title} - ${movie.score / 10}`;
});
*/
/*
const newMovies = movies.map((movie) => {
    return `${movie.title} - ${movie.score / 10}`;
});
*/
//const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`);
/*
setTimeout(() => {
    console.log('hello!!!')
}, 3000)
*/
/*
setInterval(() => {
    console.log(Math.random())
}, 2000);
*/
/*
const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.filter(n => {
    return n < 10
});
*/
/*
const goodmovies = movies.filter(movie => movie.score > 80);
console.log(goodmovies);

const recentmovies = movies.filter(movie => movie.year>1990);
console.log(recentmovies);

movies.filter(movie => movie.score > 80).map(m => m.title);
*/
/*
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
*/
/*
for(let price of prices){
    total += price;
}

console.log(total)

prices.reduce((totalnum, currentnum) => {
    return totalnum+currentnum;
});
*/
/*
const tot = movies.reduce((total, currentScore) => {
   if(total.score > currentScore.score)
        return total;
    return currentScore; 
});
*/
/*
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae'};
*/




















