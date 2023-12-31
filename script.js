function swap25() {
    const div2 = document.getElementById("div2");
    const div5 = document.getElementById("div5");
    const temp = div2.innerHTML;
    div2.innerHTML = div5.innerHTML;
    div5.innerHTML = temp;
}

document.getElementById("script1-button").addEventListener("click", swap25);


function pentagonArea(event) {
    const side = Number(document.getElementById("script2-input").value);
    const script2Result = document.getElementById("script2-result");

    if(side <= 0) {
        script2Result.innerHTML = `Script 2 result: Invalid number`;
    } else {
        const area = Math.sqrt(5*(5+2*Math.sqrt(5)))*(side**2)/4;
        script2Result.innerHTML = `Script 2 result: ${area}`;
    }
    
}

document.getElementById("script2-button").addEventListener("click", pentagonArea);


function script3() {
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    const input = document.getElementById("script3-input").value;
    const reversedValue = reverseString(input);
    alert(reversedValue);

    document.cookie = `script3Cookie=${reversedValue}`;
}

document.getElementById("script3-button").addEventListener("click", script3);

function setBorderColor(color) {
    const midBody = document.getElementById("midbody");
    midBody.style.backgroundColor = color;

    const elements = document.getElementsByClassName("border-change");
    
    
    for(const element of elements) {
        element.style.borderColor  = color;
    }
}

function script4() {
    const color = document.getElementById("script4-input").value;
    setBorderColor(color);

    localStorage.setItem("border-color", color);
}

document.getElementById("script4-button").addEventListener("click", script4);


function toggleScript5FormVisibility() {
    const script5Div = document.getElementById("script5-div");
    script5Div.classList.toggle("hidden");
}

document.getElementById("x").addEventListener("click", toggleScript5FormVisibility);

function checkCssForTags() {
    const tags = localStorage.getItem("tagList").split(" ");

    for(const tag of tags) {
        const css = localStorage.getItem(tag);

        for(const element of document.getElementsByTagName(tag)) {
            element.style.cssText = css;
        }
    }
}

function addCssToTag() {
    const tag = document.getElementById("script5-input").value;
    const css = document.getElementById("script5-textarea").value;

    if(tag !== "tagList") {
        let tagList = localStorage.getItem("tagList").split(" ");
        if(!tagList.includes(tag)) {
            tagList.push(tag);
            tagList = tagList.join(" ");
            localStorage.setItem("tagList", tagList);
        }

        localStorage.setItem(tag, css);

        checkCssForTags();
    } else {
        alert("hehehe");
    }
}

document.getElementById("script5-button1").addEventListener("click", addCssToTag);

function removeCssFromTag() {
    const tag = document.getElementById("script5-input").value;

    if(tag !== "tagList") {
        localStorage.removeItem(tag);
        
        let tagList = localStorage.getItem("tagList").split(" ");
        if(tagList.includes(tag)) {

            tagList = tagList.filter((element) => {
                return element !== tag;
            });

            tagList = tagList.join(" ");
            localStorage.setItem("tagList", tagList);
        }

        for(const element of document.getElementsByTagName(tag)) {
            element.style.cssText = "";
        }

    } else {
        alert("hehehe");
    }
}

document.getElementById("script5-button2").addEventListener("click", removeCssFromTag);


function onLoad() {
    function checkCookiesScript3() {
        const cookieScript3Value = document.cookie
            .split(";")
            .find((row) => row.startsWith("script3Cookie="))
            ?.split("=")[1];

        if(cookieScript3Value !== undefined) {
            alert(`Script3 cookies = ${cookieScript3Value}, cookies will be deleted after "OK" button click`);
            document.cookie = `script3Cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
            alert(`Cookies were deleted`);
            location.reload();
        }
    }

    function checkBorderColor() {
        const color = localStorage.getItem("border-color");
        if(color !== undefined) {
            setBorderColor(color);
        }
    }

    if(localStorage.getItem("tagList") === null) {
        localStorage.setItem("tagList", "");
    }

    checkCookiesScript3();
    checkCssForTags();
    checkBorderColor();
}

window.addEventListener("load", onLoad);
