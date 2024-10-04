let inputElement = document.getElementById("input-id");
let message = document.getElementById("dom-msg");
let clear = document.getElementById("id-clear");

let check = (input) => {
    if (input <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) {
            return false;
        }
    }
    return true;
}

let submit = document.getElementById("sub-id");

submit.addEventListener("click", () => {
    let input = parseInt(inputElement.value);
    let result = check(input);
    if (result) {
        message.innerHTML = input + " is a prime number.";
    } else {
        message.innerHTML = input + " is not a prime number.";
    }
});

clear.addEventListener("click", () => {
    inputElement.value = "";
    message.innerHTML = "Result";
});
