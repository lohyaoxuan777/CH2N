let articles = document.querySelectorAll(".news");
let news1Title = document.querySelector(".news1-title");
let news1Desc = document.querySelector(".news1-desc");
let news2Title = document.querySelector(".news2-title");
let news2Desc = document.querySelector(".news2-desc");

// * CHANGE THIS
news1Title.textContent = "(13/3/26) The Holiday Homework";
news1Desc.innerHTML = "For holidays, it means a short or long break from school for some people. But for s<span class=\"read-more\">Read More...</span>";
news2Title.textContent = "(16/3/26) KH Food";
news2Desc.innerHTML = "KH food has been regarded as the \"best food money can buy\", according to the pa<span class=\"read-more\">Read More...</span>";

articles.forEach((asdf) => {
    asdf.addEventListener("click", () => {
        if (asdf.classList[1] == "news1") {
            location.href = "article1.html";
        } else if (asdf.classList[1] == "news2") {
            location.href = "article2.html";
        } else if (asdf.classList[1] == "news3") {
            location.href = "article3.html";
        } else if (asdf.classList[1] == "news4") {
            location.href = "article4.html";
        } else if (asdf.classList[1] == "news5") {
            location.href = "article5.html";
        };
    });
});
// background animation

let pastDegree = 360;
let html = document.querySelector("*");
html.style.background = `linear-gradient(77deg, #a67f3b, #f7a82d)`;
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