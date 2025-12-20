audio = document.querySelector(".audio-mp3")
botao_audio = document.querySelector("#audio-section")
let tocando = false
audio.volume = 0.3;
function rodaraudio(){
    if (tocando==false)
        audio.play();
    else
        audio.pause();
    tocando = !tocando;
}
function primeiravez(){
    audio.play();
    tocando = !tocando;
    document.removeEventListener("click",primeiravez);
}
botao_audio.addEventListener("click",rodaraudio)
document.addEventListener("click",primeiravez)
const container = document.getElementsByClassName('container')[0];
const caixa_ref = document.getElementsByClassName('caixa')[0];

const itens = container.children;
if (itens.length<=3){
    let widthTotal = 22*itens.length;
   container.style.width = widthTotal + "vh";}



ultimo = 0;
header = document.querySelector("header");
document.addEventListener("scroll",()=>{

    atual = window.scrollY;

    if (atual>ultimo){
        header.style.transform = "translateY(-100%)";//.height = "30px" tbm funciona 
    }
    else{
        header.style.transform = "none";//.height = "60px" tbm funciona
    }
    ultimo = atual;
})