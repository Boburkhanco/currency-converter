var som = document.querySelector("#natija-som");
var dollar = document.querySelector("#natija-dollar");
var euro = document.querySelector("#natija-euro");
var ruble = document.querySelector("#natija-ruble");
var userAmount = document.querySelector("#kiritilgan-summa");
var forma = document.querySelector(".forma");
var subm = document.querySelector(".btn")



subm.addEventListener("click", e => {
    e.preventDefault()
    console.log(userAmount.value)
    som.textContent = ((userAmount.value) / 1 + " " + "so'm");
    dollar.textContent = ((userAmount.value / 10705.26).toFixed(0) + " " + "dollar");
    euro.textContent = ((userAmount.value / 12356.01).toFixed(0) + " " + "euro");
    ruble.textContent = ((userAmount.value / 149.31).toFixed(0) + " " + "ruble");
})


