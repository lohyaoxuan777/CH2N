// background animation

let pastDegree = 360;
let html = document.querySelector("*");
html.style.background = `linear-gradient(77deg, #996e9b, #4fff4fff)`;
setInterval(() => {
    let hexCodes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
                    "a", "b", "c", "d", "e", "f"]
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

date.textContent = "16/3/2026";
title.textContent = "KH Food";
document.title = "KH Food";
story.innerHTML = `KH food has been regarded as the "best food money can buy", according 
to the parents of KH "victims" that never even tried it before.<br><br> However according to 
the KH "victims", they say that KH Food is: rations, tastes like bland MREs and it's 
cooked in a dirt hole. But I personally think that the school's nutrition meals are even worse.
Especially the burgers, their meat is salmon apparently with a mysterious pink liquid. Thankfully, 
less people are eating the school meals anymore from people supposedly getting food poisoning. But 
sadly KH Food still long stands.<br><br>So what can we help to stop these poisoning foods 
consumers? Many people that bring their food from home to share with daycare students and most
importantly, KH victims. However, the KH sphere is slowly growing and the home-cooked food
population is shrinking from people telling stories about KH food and the parents doubting
and sending their kids to the KH gulag.<br><br> In conclusion and to help stop the KH sphere
to grow, is to stop telling KH stories to your parents of course. Why are the parents doubting
their kids? We absolutely have no idea. (new article coming soon)`;