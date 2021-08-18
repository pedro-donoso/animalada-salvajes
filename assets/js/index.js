import {
    Animal,
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila
} from "./investigados.js"

const data = (async function() {
    const animalElement = document.querySelector("#animal")
    const edadElement = document.querySelector("#edad")
    const comentariosElement = document.querySelector("#comentarios")
    const previewElement = document.querySelector("#preview")

    const RegistrarElement = document.querySelector("#Registrar")
    const tarjetas = [];

    const playerElement = document.getElementById("player")

    let Animales = [];

    try {
        const Request = await fetch("/animales.json");
        const ParsedRequest = await Request.json();

        Animales = ParsedRequest.animales;

    } catch (e) {
        console.error(e)
    }

    function vista() {
        const elementos = document.querySelector(".tarjetas");


        elementos.innerHTML = ""

        tarjetas.forEach(animal => {
            const carta = document.createElement("div")
            const fotito = document.createElement("div");
            const botonera = document.createElement("div");

            carta.classList.add("card", "text-white", "bg-primary")
            carta.style.width = "150px";
            fotito.innerHTML = `<img src="./assets/imgs/${animal.Img}" class="card-img-top"/>`
            botonera.classList.add("card-body", "p-0")
            botonera.innerHTML = `<a href="#" >
            <img class="p-1" src="./assets/imgs/audio.svg" style="width:50px"/>
            </a>`;

            fotito.addEventListener("click", () => {
                $("#modal").modal("show");
                const modalBody = document.querySelector(".modal-body");
                modalBody.innerHTML = `
                <img src="./assets/imgs/${animal.Img}" style="width: 400px" class="img-fluid" />
                <p class="text-white text-center pt-1" style="font-size: 12px"> ${animal.Nombre}</p>
                <p class="text-white text-center" style="font-size: 12px">${animal.Edad}</p>
                <hr>
                <p class="text-white text-center" style="font-size: 12px">${animal.Comentarios}</p>
                `
            })


            botonera.addEventListener("click", () => {
                if (animal.Nombre === "Leon") {
                    animal.Rugir(playerElement);
                } else if (animal.Nombre === "Lobo") {
                    animal.Aullar(playerElement)
                } else if (animal.Nombre === "Aguila") {
                    animal.Chillar(playerElement)
                } else if (animal.Nombre === "Serpiente") {
                    animal.Sisear(playerElement)
                } else if (animal.Nombre === "Oso") {
                    animal.Gruñir(playerElement)
                }
            })

            carta.appendChild(fotito)
            carta.appendChild(botonera)

            elementos.appendChild(carta)
        })



    }

    animalElement.addEventListener("change", () => {
        const eleccion = animalElement.value;
        const hallado = Animales.find(animal => animal.name === eleccion)

        previewElement.setAttribute("src", `./assets/imgs/${hallado.imagen}`)
    });

    RegistrarElement.addEventListener("click", () => {
        const nombre = animalElement.value;
        const edad = edadElement.value;
        const comentarios = comentariosElement.value;
        const {
            imagen,
            sonido
        } = Animales.find(animal => animal.name === nombre)

        switch (nombre) {
            case "Leon":
                {
                    const leon = new Leon(nombre, edad, imagen, comentarios, sonido);
                    tarjetas.push(leon);
                }
                break;
            case "Lobo":
                {
                    const lobo = new Lobo(nombre, edad, imagen, comentarios, sonido);
                    tarjetas.push(lobo);
                }
                break;
            case "Oso":
                {
                    const oso = new Oso(nombre, edad, imagen, comentarios, sonido);
                    tarjetas.push(oso);
                }
                break;
            case "Aguila":
                {
                    const aguila = new Aguila(nombre, edad, imagen, comentarios, sonido);
                    tarjetas.push(aguila);
                }
                break;
            case "Serpiente":
                {
                    const serpiente = new Serpiente(nombre, edad, imagen, comentarios, sonido);
                    tarjetas.push(serpiente);
                }
                break;
        }

        console.log({
            tarjetas
        })
        vista();
    })

})()