const modal = document.querySelector(".class")
const mascara = document.querySelector(".mascaraas")

function clicounobotao(){
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function escondermodal(){
    modal.style.left = '-30%'
    mascara.style.visibility = 'hidden'
}