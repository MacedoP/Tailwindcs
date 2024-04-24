const tempo = new Date()
const hora =tempo.getHours()
const bg_mudar = document.querySelector("#bg-mudar");
const titulo = document.querySelector("#titulo");
const imagembg = document.createElement("img");
const imagem_exbir = document.querySelector("#imagem-exbir")
const btnLeft =document.querySelector("#esquerdo")
const btnRight = document.querySelector("#direito") 

let imagemActual =0
const imagens =[
    "url(../photo/quarto.jpg)",
    "url(../photo/pisicina.jpg)"
];

imagembg.setAttribute("src", " url(./photo/bg-second.jpg)")

if(hora > 18){
    bg_mudar.style.backgroundImage = "url(./photo/bg-second-1.jpg)"
    titulo.style.color = "#C74B0A";
}else if(hora < 18){
    bg_mudar.style.backgroundImage = "url(./photo/bg-main.jpg)"
    titulo.style.color = "#4DABBF";

}

btnLeft.addEventListener('click', () => {
    imagem_exbir.style.backgroundImage = "url(../aulas/photo/varanda.jpg)"

    if(imagemActual < imagens.length){
        imagem_exbir.style.backgroundImage += "url(../aulas/photo/quarto.jpg)"
    }
  
})
btnRight.addEventListener('click',()=>{
    imagem_exbir.style.backgroundImage = "url(../aulas/photo/camas.jpg)"
})

console.log("A gora sao "+hora);