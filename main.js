



let klausimas1;


const start = document.querySelector('.start'); 


function startClick() {
    klausimas1 = (Math.floor(Math.random() * 53) + 1);


}


start.addEventListener('click', startClick);