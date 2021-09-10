



let klausimas1 = '';
let klausimas2 = '';
let klausimas3 = '';
let klausimas4 = '';
let klausimas5 = '';
let klausimas6 = '';
let klausimas7 = '';
let klausimas8 = '';
let klausimas9 = '';
let klausimas10 = '';

let bonusKlausimas = '';


const start = document.querySelector('.start'); 


function startClick() {
    klausimas1 = (Math.floor(Math.random() * 53) + 1);


}


start.addEventListener('click', startClick);