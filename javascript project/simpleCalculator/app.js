let input = document.getElementById("result")
let num = document.querySelectorAll(".numbers")
num.forEach((number)=>{
    number.addEventListener("click",()=>{
        const b = parseInt(number.getAttribute("id"))
        input.innerHTML += b
    })
})