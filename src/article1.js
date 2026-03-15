// background animation

let pastDegree = 360;
let html = document.querySelector("*");
html.style.background = `linear-gradient(77deg, #fc2d21, #7b89d4ff)`;
setInterval(() => {
    let hexCodes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"]
    let color1 = "";
    let color2 = "";
    let degree = 72837;
    if (pastDegree == 360) {
        degree = 0;
    } else {
        degree = pastDegree + 1;
    }
    for (let i=0;i<6;i++) {
        let chance1 = hexCodes[Math.floor(Math.random() * hexCodes.length)];
        let chance2 = hexCodes[Math.floor(Math.random() * hexCodes.length)];
        color1 += chance1;
        color2 += chance2;
    };
    html.style.background = `linear-gradient(${degree}deg, #${color1}, #${color2})`;
}, 1575);

let date = document.querySelector(".date");
let title = document.querySelector(".title");
let story = document.querySelector(".story");
let actualNameDiv = document.querySelector(".actual-names");

actualNameDiv.style.display = "flex";
date.textContent = "12/3/2026";
title.textContent = "The JYQK situation is getting more and more intense";
document.title = "The JYQK situation is getting more and more intense";
story.innerHTML = `Jacqueline Quadri and Yacoub Kaczmar are going into the danger zone, people already trying to seperate them. <br><br>Recap, back in November 2025, Jacqueline and Yacoub was found dating and messaging intimate messages to each other. People was outraged, and Yacoub reputation went downhill. But in January 2026, after the holidays, they were found texting even more intimate messages during a visit to a Buddhist temple. The fact is, Jacqueline and Yacoub denies any accusations, even though their chats were leaked in December and January respectfully. Some people in 6M are making jokes of the relationship, and Yacoub is beating them up for that. Most notablly, Jackson Lanier getting beat up for "no reason" according to him. And recently during a visit to the school library, Jackson and Yermanez Hermatino got permission from Yacoub to readv their chats in 3 seconds, but they can read super fast. And what they read instantly shocked them to their core. The messages included <span style="color: red">"An error has occured while loading this font. Please reload the page</span>". Of course, Yacoub had to made them promise not to share with others and the media, so we put our guesses on the high-stakes texts. \n Other to that though, no known verified sources did we get our hands on.`