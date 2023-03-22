let cube = document.querySelector(".cube");

var body = document.querySelector("body");

let colorInput = document.querySelector("#color");
let borderRadiusInput = document.querySelector("#border-radius");
let borderInput = document.querySelector("#border");
let boxShadowInput = document.querySelector("#box-shadow");
var allInputs = document.querySelector("#color, #border-radius, #border, #box-shadow");

var resetBtn = document.querySelector(".resetBtn");

function reset() {
    allInputs.value = "";
    colorInput.value = "#ffffff";
    borderRadiusInput.value = "";
    borderInput.value = "";
    boxShadowInput.value = "";

    cube.style.backgroundColor = "#ffffff";
    cube.style.borderRadius = "";
    cube.style.border = "";
    cube.style.boxShadow = "";
};



// CHANGE CUBE TO INPUT VALUES

borderRadiusInput.addEventListener('input', () => {
    cube.style.borderRadius = borderRadiusInput.value;
});

colorInput.addEventListener('input', () => {
    if (gradientInput.value == "") {
        cube.style.backgroundColor = colorInput.value;
    }
});

borderInput.addEventListener('input', () => {
    cube.style.border = borderInput.value;
});

boxShadowInput.addEventListener('input', () => {
    cube.style.boxShadow = boxShadowInput.value;
});



// ADVANCED MODE

var advanced = document.querySelector(".advancedOptions");
var showAdvancedBtn = document.querySelector("#showAdvanced");
var hideAdvancedBtn = document.querySelector("#hideAdvanced");

    // var

let cursorInput = document.querySelector("#cursor");
let transitionInput = document.querySelector("#transition");
let gradientInput = document.querySelector("#gradient");

function showAdvanced() {
    advanced.style.display = "";
    showAdvancedBtn.style.display = "none";
    hideAdvancedBtn.style.display = "";
};

function hideAdvanced() {
    advanced.style.display = "none";
    showAdvancedBtn.style.display = "";
    hideAdvancedBtn.style.display = "none";
};

cursorInput.addEventListener('input', () => {
    cube.style.cursor = cursorInput.value;
})

transitionInput.addEventListener('input', () => {
    cube.style.transition = transitionInput.value;
})

gradientInput.addEventListener('input', () => {
    if (gradientInput.value != "") {
        cube.style.backgroundImage = "linearGradient(" + gradientInput.value + ")";
        colorInput.value = "";
    }
})



// THEME 

var darkBtn = document.querySelector(".darkActivated-btn");
var lightBtn = document.querySelector(".lightActivated-btn");

var allText = document.querySelectorAll("h1 h2 h3 h4 h5 p");

var codeBtn = document.querySelector(".sourceCode-btn");

var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var h3 = document.querySelector("h3");
var h4 = document.querySelector("h4");
var p = document.querySelector("p");
var label = document.querySelectorAll("label");

function setLightMode() {
    console.log('Set light mode successfully!')
    body.style.backgroundColor = "#ffffff";
    darkBtn.style.display = "none";
    lightBtn.style.display = "";

    // allText.style.color = "rgb(0,0,0)"
    h1.style.color = "#000000"
    h2.style.color = "#000000"
    h3.style.color = "#000000"
    
    for(var h4Items = 0; h4Items < h4.length; h4Items++){
        h4.style.color = "#000000"    
    }
    codeBtn.style.border = "none"

    for(var labelItems = 0; labelItems < label.length; labelItems++){
        label[labelItems].style.color = "#000000"
    }
}

function setDarkMode() {
    console.log('Set dark mode successfully!')
    body.style.backgroundColor = "#323232"
    darkBtn.style.display = ""
    lightBtn.style.display = "none"

    

    h1.style.color = "#ffffff"
    h2.style.color = "#ffffff"
    h3.style.color = "#ffffff"
    for(var h4Items = 0; h4Items < h4.length; h4Items++){
    h4.style.color = "#ffffff"
    }
    codeBtn.style.border = "3px solid #f0f0f0"

    for(var labelItems = 0; labelItems < label.length; labelItems++){
        label[labelItems].style.color = "#ffffff"
    }
}



// COOKIES
function acceptCookies() {
    var cookieMenu = document.querySelector(".cookieMenu")
    cookieMenu.style.opacity = "0";
    cookieMenu.remove();
}

/* if(colorInput.value != "#ffffff" ) {
document.cookie = "color=" + colorInput.value + "; expires=";
} */

    
// HIGHLIGHT.JS

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
});



// EMBEDDING
    
function setOutputCode() {
    var outputCode = document.querySelector("#outputCode").innerHTML;
    
    outputCode.innerHTML = "/* Make-a-Cube */ \n \n #cube {\n     width: 200px; \n    height: 200px; \n \n    background-color: " + colorInput.value + "; \n     border-radius: " + borderRadiusInput.value + "; \n     border: " + borderInput.value + "; \n     box-shadow: " + boxShadowInput.value + "; \n \n     cursor: " + cursorInput.value + "; \n     transition: " + transitionInput.value + "; \n }"
}

    // Get HTML code
function copyOutput() {
    navigator.clipboard.writeText("<div id='cube'></div> \n <style> \n     /* Make-a-Cube */ \n \n     #cube {\n         width: 200px; \n        height: 200px; \n \n        background-color: " + colorInput.value + "; \n         border-radius: " + borderRadiusInput.value + "; \n         border: " + borderInput.value + "; \n         box-shadow: " + boxShadowInput.value + "; \n \n         cursor: " + cursorInput.value + "; \n         transition: " + transitionInput.value + "; \n } \n </style>")

    document.getElementById("copySuccess").style.visibility = "visible";

    /* if (borderRadiusInput.value && borderInput.value && boxShadowInput == "") {
        document.getElementById("copyDisclaimer").style.visibility = "visible";
        document.getElementById("copySuccess").style.visibility = "visible";

        document.getElementById("copySuccess").style.color = "#ff0000";
        document.getElementById("copySuccess").style.backgroundColor = "#ff000031"
    } */
    
}

