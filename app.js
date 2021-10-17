let botao = document.getElementById('botao')
let interruptor = document.querySelector('div.interruptor')
let corpo = document.body
let cont = 0

function apagarAcender(){
    if (cont == 0){
        corpo.style.cssText = 'background-image: var(--luz_apagada);'
        botao.style.cssText = 'background-image: var(--luz_apagada); transform: translateX(150px);'
        interruptor.style.cssText = 'background-image: var(--luz_acesa);'
        cont++
    } else {
        corpo.style.cssText = 'background-image: var(--luz_acesa);'
        botao.style.cssText = 'background-image: var(--luz_acesa);'
        interruptor.style.cssText = 'background-image: var(--luz_apagada);'
        cont = 0
    }
}
    