

let botaoSom = document.querySelector(".botao-som")
let vidio = document.querySelector(".vidio")
let botao = document.querySelector(".link-info") 
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")


//ligar o som
botaoSom.addEventListener("click", ligaSom)



function ligaSom() {

    vidio.muted = false
}

//mostrar o modal

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
modal.style.display = "block"
}

function esconderModal () {
    modal.style.display = "none"
}


//tocar o tundum

window.addEventListener("load", tocarAudio)


function tocarAudio() {

    audio.play()
}