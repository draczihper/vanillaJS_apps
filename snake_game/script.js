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
const ballLeftPos = posX * 20;
const ballTopPos = posY * 20;

ballEl.style.left = ballLeftPos + "px";
ballEl.style.top = ballTopPos + "px";

let snakeElPosX = 0;
let snakeElPosY = 0;
let speedFactor = 0.05;


function animate(time, lastTime) {
    if (lastTime != null) {
    snakeElPosX += (time - lastTime) * speedFactor;
    // snakeElPosY += (time - lastTime) * speedFactor;
    }
    if (snakeEl.style.left == 400 + 'px') {
        snakeElPosX = 0;
        // snakeEl.style.left = (snakeElPosX + 20) + 'px';
    } else {
        snakeEl.style.left = (snakeElPosX + 20) + "px";
    }
    snakeEl.style.top = (snakeElPosY + 20) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
    }
    requestAnimationFrame(animate);









