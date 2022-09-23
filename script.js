//evento del boton

let home = document.getElementById ("home");
let events = document.getElementById ("events");
let news = document.getElementById ("news");
let imgenchange = document.getElementById ("imgenchange");

home.onclick = function(){
    imgenchange.src ="./assets/producto2.jpg"
}

news.onclick = function(){
    imgenchange.src ="./assets/producto2.jpg"
}

events.onclick = function(){
    imgenchange.src ="./assets/producto.jpg"
}

//buscador


 document.getElementById("botonsearch").addEventListener("click",mostrat_buscador);
document.getElementById("botonsearch").addEventListener("click ", ocultar_buscador);

 botonsearch = document.getElementById("botonsearch");
 inputsearch = document.getElementById("inputsearch")

 function mostrat_buscador(){
  botonsearch.style.display = "block";
  inputsearch.style.display = "block";
  inputsearch.focus();
    
 }
//buscador
document.getElementById("inputsearch").addEventListener("keyup",buscador_interno);
 function ocultar_buscador(){
    botonsearch.style.display = "none";
 }


 function buscador_interno(){
    filter = inputsearch.value.toUpperCase();
    li = box-search.getElementByTagName();

    for (i= 0; 1 <li.length;1++){
        a=li[i].getElementByTagName("a")[0];
        textValue = a.textContent || a.innerText;
    if(textValue.toUpperCase().indexOf(filter)> -1){
li[1].style.display=""
 }
 


 

 }
 
 }