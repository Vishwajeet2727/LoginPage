/*let but = document.querySelector("#mode");
let currentmode ="light";

but.addEventListener("click",()=>{
    if(currentmode === "light")
    {
       currentmode = "dark";
       document.querySelector("body").style.backgroundColor ="black";
    }
    else
    {
        currentmode = "light";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currentmode);
});*/

let modeBtn = document.querySelector("#mode");
let body = document.body;

// Load saved theme
let currentMode = localStorage.getItem("theme") || "light";
applyTheme(currentMode);

modeBtn.addEventListener("click", () => {
    currentMode = currentMode === "light" ? "dark" : "light";
    localStorage.setItem("theme", currentMode);
    applyTheme(currentMode);
});

function applyTheme(mode) {
    if (mode === "dark") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        modeBtn.innerText = "Light Mode";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        modeBtn.innerText = "Dark Mode";
    }
}

