//evento del boton

let home = document.getElementById("home");
let events = document.getElementById("events");
let news = document.getElementById("news");
let imgenchange = document.getElementById("imgenchange");
document.querySelector('#btnSearch').disabled = true;
let search = document.getElementById('search')

home.onclick = function () {
  imgenchange.src = "./assets/img0.jpg"
}

news.onclick = function () {
  imgenchange.src = "./assets/producto.jpg"
}

events.onclick = function () {
  imgenchange.src = "./assets/img0.jpg"
}


// function habilitar() {
//   search = document.getElementById('search').value;
//   val = 0;

//   if (val == 0) {

//     if (search.length == 0) {
//       document.getElementById('#btnSearch').disabled = true;
//     }
//     val++;
//   } else {
//     document.getElementById('#btnSearch').disabled = false;
//   }

//   search.addEventListener('keyup', habilitar());

// }


let searching = document.getElementById('search');



let btn = document.querySelector('#btnSearch');
btn.disabled = true

function num(str) {
  return /\d/.test(str);
}
function x() {
  let search = searching.value;

  if (!isNaN(search) || search == "" || num(search)) {
    btn.disabled = true;
  } else {
    if (search.length >= 2) {
      btn.disabled = false;
    }
  }
}
searching.addEventListener('input', x, false)




//document.querySelector('#btnSearch').disabled = true;

// function contieneNumero(str) {
//   return /\d/.test(str);
// }
// document.getElementById('search').addEventListener('input', function () {
//   let search = document.getElementById('search').value;
//   if (!isNaN(search) || search == "" || contieneNumero(search)) {
//     document.querySelector('#btnSearch').disabled = true;
//   } else {
//     if (search.length >= 2) {
//       document.querySelector('#btnSearch').disabled = false;
//     }
//   }

// }, false) 


