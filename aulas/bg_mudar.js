const tempo = new Date()
const hora =tempo.getHours()
const bg_mudar = document.querySelector("#bg-mudar");
const titulo = document.querySelector("#titulo");
const imagembg = document.createElement("img");

imagembg.setAttribute("src", " url(./photo/bg-second.jpg)")

if(hora > 18){
    bg_mudar.style.backgroundImage = "url(./photo/bg-second-1.jpg)"
    titulo.style.color = "#C74B0A";
}else if(hora < 18){
    bg_mudar.style.backgroundImage = "url(./photo/bg-main.jpg)"
    titulo.style.color = "#4DABBF";

}


console.log("A gora sao "+hora);