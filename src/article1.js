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