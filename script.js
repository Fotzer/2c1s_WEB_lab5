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
    console.log(document.cookie);
}

document.getElementById("script3-button").addEventListener("click", script3);

function onLoad() {
    function checkCookiesScript3() {
        const cookieScript3Value = document.cookie
            .split(";")
            .find((row) => row.startsWith("script3Cookie="))
            ?.split("=")[1];

        if(cookieScript3Value !== undefined) {
            alert(`Script3 cookies = ${cookieScript3Value}, cookies will be deleted after "OK" button click`);
            document.cookie = `username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=fotzer.github.io; path=/2c1s_WEB_lab5`;
            alert(`Cookies were deleted`);
        }
    }
    console.log(document.cookie);
    checkCookiesScript3();
}

document.onload = onLoad;
window.addEventListener("load", onLoad);