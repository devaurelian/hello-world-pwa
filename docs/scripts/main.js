/* eslint-disable require-jsdoc */

import * as utils from "/scripts/utils.js";

let helloWorldMessages;
const messageElem = document.getElementById("message");
const titleElem = document.getElementById("title");


/**
 * 
 * @param {*} message 
 * @param {*} lang 
 */
function setHelloWorldMessage(message, lang) {
    messageElem.textContent = message;
    document.title = `Hello World in ${lang}`;

}


// Apply the random colors as soon as possible
// document.body.style.color = utils.getContrastYIQ(r, g, b);


function shuffle() {
    // Generate and apply a random background color
    const [r, g, b] = utils.getRandomRGB();
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Add text contrast effect, if needed
    messageElem.classList.toggle("contrast", utils.needsContrastColor(r, g, b));

    const randomIndex = utils.getRandomInt(helloWorldMessages.length);
    const [lang, message] = helloWorldMessages[randomIndex];
    messageElem.textContent = message;
    document.title = `Hello World in ${lang}`;
    title.textContent = document.title;
    console.log(document.title);
}


fetch("/scripts/helloworld.json")
    .then(response => response.json())
    .then(data => {
        helloWorldMessages = data;
        shuffle();
    });

document.getElementById("shuffle").addEventListener("click", () => {
    shuffle();
});
