function swap25() {
    const div2 = document.getElementById("div2");
    const div5 = document.getElementById("div5");
    const temp = div2.innerHTML;
    div2.innerHTML = div5.innerHTML;
    div5.innerHTML = temp;
}

document.getElementById("script1-button").addEventListener("click", swap25);

function pentagonArea() {
    const side = Number(document.getElementById("script2-input").value);
    const area = Math.sqrt(5*(5+2*Math.sqrt(5)))*(side**2)/4;

    const script2Result = document.getElementById("script2-result");
    
    script2Result.innerHTML = `Script 2 result: ${area}`;
}

document.getElementById("script2-button").addEventListener("click", pentagonArea);