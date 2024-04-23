const containerEl = document.querySelector('.container');
const ballEl = document.querySelector('.ball');
const snakeEl = document.querySelector('.snake');

// Store our playground and snake dimension
const containerElWidth = 400;
const containerElHeight = 400;
const snakeElWidth = 20;
const snakeElHeight = 20;

// Randomly find the next position of our ball and update it to the DOM
const posX = Math.floor(Math.random() * (containerElWidth / snakeElWidth ));
const posY = Math.floor(Math.random() * (containerElHeight / snakeElHeight ));
const leftPos = posX * 20;
const topPos = posY * 20;

ballEl.style = `
    left: ${leftPos}px;
    top: ${topPos}px;
`


    snakeEl.setTimeout(() => {
        snakeEl.style.left += '20px';
    }, 1000);








