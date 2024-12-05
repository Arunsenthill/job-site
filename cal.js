var arun = document.getElementById("aarun");
function display(num) {
    if (arun.textContent === "0") {
        Text.innerText = num
    }
    else {
        arun.value += num;
    }

}
function del() {
    if (arun.innerText.length === 1) {
        arun.innerText = "0"
    }
    else {
        arun.innerText = arun.innerText.substring(0, arun.innerText.length - 1)
    }
}

function calculate() {
    let dis = eval(arun.value)
    arun.value = dis




}
