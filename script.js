function swap25() {
    const div2 = document.getElementById("div2");
    const div5 = document.getElementById("div5");
    const temp = div2.innerHTML;
    div2.innerHTML = div5.innerHTML;
    div5.innerHTML = temp;
}

document.getElementById("script1-button").addEventListener("click", swap25);

document.getElementById("script1").addEventListener("click", swap25);