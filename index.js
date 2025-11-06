const boton = document.getElementById("freet");
const welcome = document.getElementById("welcome");
const seet = document.getElementById("seet");
const google = document.querySelector(".google");
const content = document.querySelector(".content")
const nuevoh2 = document.createElement("h2")
const searchinput = document.getElementById("searchinp")




content.appendChild(nuevoh2)

google.addEventListener("click", () => {
    google.style.display = "none";
})

seet.addEventListener("click", () => {
    welcome.textContent = "Welcome";
    welcome.style.color = "white";
    content.appendChild(nuevoh2)
    nuevoh2.textContent = "Buscaste: " + searchinput.value;
});

boton.addEventListener("click", () => {
    welcome.textContent = "Se cambio";
    welcome.style.color = "red";
});