const blue = document.getElementById("blue");
const red = document.getElementById("red");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

blue.addEventListener("click", () => blue.style.backgroundColor = "black");
red.addEventListener("click", () => red.style.backgroundColor = "black");
green.addEventListener("click", () => green.style.backgroundColor = "black");
yellow.addEventListener("click", () => yellow.style.backgroundColor = "black");


document.addEventListener("keydown", function (event) {

    const keyDiv = document.getElementById("key");

    if (event.key === "a") {
        keyDiv.style.backgroundColor = "pink";
    }

    else if (event.key === "s") {
        keyDiv.style.backgroundColor = "orange";
    }

    else if (event.key === "d") {
        keyDiv.style.backgroundColor = "skyblue";
    }

    else if (event.key === "q") {
        crearDiv("purple");
    }

    else if (event.key === "w") {
        crearDiv("gray");
    }

    else if (event.key === "e") {
        crearDiv("brown");
    }

});


function crearDiv(color) {

    const nuevoDiv = document.createElement("div");

    nuevoDiv.classList.add("nuevo");
    nuevoDiv.style.backgroundColor = color;

    document.getElementById("nuevos").appendChild(nuevoDiv);

}