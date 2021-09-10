



let random = 0;

let pirmas = (Math.floor(Math.random() * 53) + 1);

let question = 1;

let teisingiAtsakymai = 0;
let neteisingiAtsakymai = 0;


{document.querySelector(".img").style.display="none";}
{document.querySelector(".vienas").style.display="none";}
{document.querySelector(".du").style.display="none";}
{document.querySelector(".trys").style.display="none";}
{document.querySelector(".keturi").style.display="none";}
{document.querySelector(".laikmatis").style.display="none";}

// q1, q2, q3 ir t.t. tai klausimai ir ju numeriai. O bonusQ tai papildomas, bonus Klausimas.

let q1 = pirmas;

let q2 = (Math.floor(Math.random() * 53) + 1);

while (q1 === q2) {
    q2 = (Math.floor(Math.random() * 53) + 1);
};

let q3 = (Math.floor(Math.random() * 53) + 1);

while (q1 === q3 || q2 === q3) {
    q3 = (Math.floor(Math.random() * 53) + 1);
};

let q4 = (Math.floor(Math.random() * 53) + 1);

while (q1 === q4 || q2 === q4 || q3 === q4) {
    q4 = (Math.floor(Math.random() * 53) + 1);
};

let q5 = (Math.floor(Math.random() * 53) + 1);

while (q1 === q5 || q2 === q5 || q3 === q5 || q4 === q5) {
    q5 = (Math.floor(Math.random() * 53) + 1);
};

let q6 = (Math.floor(Math.random() * 53) + 1);

while (q1 === q6 || q2 === q6 || q3 === q6 || q4 === q6 || q5 === q6) {
    q6 = (Math.floor(Math.random() * 53) + 1);
};

let q7 = (Math.floor(Math.random() * 53) + 1);

while (q1 === q7 || q2 === q7 || q3 === q7 || q4 === q7 || q5 === q7 || q6 === q7) {
    q7 = (Math.floor(Math.random() * 53) + 1);
};

let q8 = (Math.floor(Math.random() * 53) + 1);

while (q1 === q8 || q2 === q8 || q3 === q8 || q4 === q8 || q5 === q8 || q6 === q8 || q7 === q8) {
    q8 = (Math.floor(Math.random() * 53) + 1);
};

let q9 = (Math.floor(Math.random() * 53) + 1);

while (q1 === q9 || q2 === q9 || q3 === q9 || q4 === q9 || q5 === q9 || q6 === q9 || q7 === q9 || q8 === q9) {
    q9 = (Math.floor(Math.random() * 53) + 1);
};

let q10 = (Math.floor(Math.random() * 53) + 1);

while (q1 === q10 || q2 === q10 || q3 === q10 || q4 === q10 || q5 === q10 || q6 === q10 || q7 === q10 || q8 === q10 || q9 === q10) {
    q10 = (Math.floor(Math.random() * 53) + 1);
};


let bonusQ = (Math.floor(Math.random() * 53) + 1);

while (q1 === bonusQ || q2 === bonusQ || q3 === bonusQ || q4 === bonusQ || q5 === bonusQ || q6 === bonusQ || q7 === bonusQ || q8 === bonusQ || q9 === bonusQ || q10 === bonusQ) {
    bonusQ = (Math.floor(Math.random() * 53) + 1);
};


const start = document.querySelector('.start'); 

const vienas = document.querySelector('.vienas'); 
const du = document.querySelector('.du'); 
const trys = document.querySelector('.trys'); 
const keturi = document.querySelector('.keturi'); 


function startClick() {
    {document.querySelector(".img").style.display="block";}
    {document.querySelector(".vienas").style.display="block";}
    {document.querySelector(".du").style.display="block";}
    {document.querySelector(".trys").style.display="block";}
    {document.querySelector(".keturi").style.display="block";}
    {document.querySelector(".laikmatis").style.display="block";}

    {document.querySelector(".titulinis").style.display="none";}
    {document.querySelector(".start").style.display="none";}
    {document.querySelector(".pastaba").style.display="none";}


}



if (question === 1 && q1 === 1 || question === 2 && q1 === 1 || question === 3 && q1 === 1 || 
    question === 4 && q1 === 1 || question === 5 && q1 === 1 || question === 6 && q1 === 1 || 
    question === 7 && q1 === 1 || question === 8 && q1 === 1 || question === 9 && q1 === 1 || 
    question === 10 && q1 === 1 || question === 11 && q1 === 1) {
        
}



function vienasClick() {
    console.log(1);
    console.log(pirmas);

    console.log(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, bonusQ);

    if (question !== 11) {

    }
}

function duClick() {
    console.log(2);
    console.log(pirmas);
}

function trysClick() {
    console.log(3);
    console.log(pirmas);
}

function keturiClick() {
    console.log(4);
    console.log(pirmas);
}


start.addEventListener('click', startClick);

vienas.addEventListener('click', vienasClick);
du.addEventListener('click', duClick);
trys.addEventListener('click', trysClick);
keturi.addEventListener('click', keturiClick);

