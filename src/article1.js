// background animation

let pastDegree = 360;
let html = document.querySelector("*");
html.style.background = `linear-gradient(77deg, #fc2d21, #7b89d4ff)`;
setInterval(() => {
    let hexCodes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
                    "a", "b", "c", "d", "e", "f"];
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
date.textContent = "17/3/2026";
title.textContent = "The Holiday homework";
document.title = "The Holiday homework";
story.innerHTML = `For holidays, it means a short or long break from school for some people. 
<br><br>But for students that go to daycares', and the 5th and 6th grades', it means homework, 
daycare even during the holidays, and hiding all of the infinite homework in your shower 
bag. So, most people finish their holiday homework as soon as they get home, or spread the 
homework thru several days. However for daycares students, they only finish their 
holiday homework in the nick of time. <br><br> Why do this though? It's because to avoid 
the daycare teachers to punish them if they can't finish all of them on time. Students that 
go to their homes usually do their homework, rest for a bit, then continue to do it until 
7:30pm. But the daycare centres force you to do the homework without rest and with a fixed 
time limit of normally 6-6:59pm. This limits forces you do the homework all at once, 
scientific research show the opposite though. As prolonged/chronic stress increases white 
blood cells in their acute phase of inflammation to circulate all throughout the body. In the 
end, amplifying the immune response by recruiting more cells, increasing vascular 
permeability, and promoting further white blood cells to migrate and bond. In summary, 
persistent activation during chronic inflammation can lead to the immune system to be damaged
and can lead to numerous long-term health risks. <br><br>However, doing the holiday homework 
last minute doesn't help to, as you constantly stress about your parents to tell you to go
to sleep already, and how much homework there are left. So, most 6th graders now do most
of their easy holiday homework in school, and finish the much harder, much energy-consuming
homework last-minute.<br><br>This article is to warn the teachers about giving too much 
holiday homework though, as stress causes health-risks making you sick, the attendance rate
goes down, prompting the attendance award to go to much lower grades.
`