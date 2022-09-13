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
