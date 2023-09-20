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

}

document.getElementById("script2-button").addEventListener("click", script3);