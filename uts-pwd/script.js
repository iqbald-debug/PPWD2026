const menit = document.querySelector(".minute");
const detik = document.querySelector(".secon");
const milidetik = document.querySelector(".milisecon");
const tombol = document.querySelectorAll(".tombol");

const start = document.querySelector(".Start");
const reset = document.querySelector(".reset");


start.addEventListener("click", function(){
    detik.textContent = "59";
    menit.textContent = "30";
});

reset.addEventListener("click", function(){
    detik.textContent = "00";
    menit.textContent = "0";
    milidetik.textContent = "00";

});



