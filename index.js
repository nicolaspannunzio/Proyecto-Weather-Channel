let boton = document.querySelector(".btn")
let input = document.querySelector("input")
let ciudad = document.querySelector("#ciudad")
let temp = document.querySelector("#temperatura")
let descripcion = document.querySelector("#descripcion")
let icon = document.querySelector("#wicon")
let container = document.querySelector(".container")

function cargarCiudad(){
    let ciudadElegida = input.value
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudadElegida + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data){ 
        container.style.visibility = "visible"
        ciudad.textContent = data.name
         temp.innerHTML = data.main.temp + "°C"
        icon.setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png")
        descripcion.innerHTML = data.weather[0].main
        console.log(data)
    })
}

boton.addEventListener("click", cargarCiudad)

