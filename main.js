



let random = 0;

let picture = 0;

const pirmas = (Math.floor(Math.random() * 53) + 1);

let question = 1;

let questionX;

let teisingiAtsakymai = 0;
let neteisingiAtsakymai = 0;


{ document.querySelector(".img").style.display = "none"; }
{ document.querySelector(".vienas").style.display = "none"; }
{ document.querySelector(".du").style.display = "none"; }
{ document.querySelector(".trys").style.display = "none"; }
{ document.querySelector(".keturi").style.display = "none"; }
{ document.querySelector(".laikmatis").style.display = "none"; }

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




if (question === 1) {
    questionX = q1;
} else if (question === 2) {
    questionX = q2;
} else if (question === 3) {
    questionX = q3;
} else if (question === 4) {
    questionX = q4;
} else if (question === 5) {
    questionX = q5;
} else if (question === 6) {
    questionX = q6;
} else if (question === 7) {
    questionX = q7;
} else if (question === 8) {
    questionX = q8;
} else if (question === 9) {
    questionX = q9;
} else if (question === 10) {
    questionX = q10;
} else if (question === 11) {
    questionX = bonusQ;
}




console.log(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, bonusQ);
console.log(questionX);





let img = document.querySelector(".img");

let ats1 = document.querySelector(".vienas");
let ats2 = document.querySelector(".du");
let ats3 = document.querySelector(".trys");
let ats4 = document.querySelector(".keturi");



function startClick() {
    { document.querySelector(".img").style.display = "block"; }
    { document.querySelector(".vienas").style.display = "block"; }
    { document.querySelector(".du").style.display = "block"; }
    { document.querySelector(".trys").style.display = "block"; }
    { document.querySelector(".keturi").style.display = "block"; }
    { document.querySelector(".laikmatis").style.display = "block"; }

    { document.querySelector(".titulinis").style.display = "none"; }
    { document.querySelector(".start").style.display = "none"; }
    { document.querySelector(".pastaba").style.display = "none"; }

    // questionX = q1;

    if (questionX === 1) {
        img = document.querySelector(".img");
        img.src = "./pictures/alfa-romeo.jpg";
        img.height = 290;
        ats1.innerText = "alfa romeo"; // teisingas
        ats2.innerText = "datsun";
        ats3.innerText = "infiniti";
        ats4.innerText = "peugeot";
    } else if (questionX === 2) {
        img = document.querySelector(".img");
        img.src = "./pictures/audi.png";
        img.height = 290;
        ats1.innerText = "lamborghini";
        ats2.innerText = "volvo";
        ats3.innerText = "audi"; // teisingas
        ats4.innerText = "mitsubishi";
    } else if (questionX === 3) {
        img = document.querySelector(".img");
        img.src = "./pictures/bentley.png";
        img.height = 290;
        ats1.innerText = "bentley"; // teisingas
        ats2.innerText = "bugatti";
        ats3.innerText = "dodge"; 
        ats4.innerText = "rover";
    } else if (questionX === 4) {
        img = document.querySelector(".img");
        img.src = "./pictures/bmw.png";
        img.height = 290;
        ats1.innerText = "fiat"; 
        ats2.innerText = "buick";
        ats3.innerText = "audi"; 
        ats4.innerText = "bmw"; // teisingas
    } else if (questionX === 5) {
        img = document.querySelector(".img");
        img.src = "./pictures/bugatti.jpg";
        img.height = 290;
        ats1.innerText = "buick"; 
        ats2.innerText = "bugatti"; // teisingas
        ats3.innerText = "chevrolet"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 6) {
        img = document.querySelector(".img");
        img.src = "./pictures/buick.jpg";
        img.height = 290;
        ats1.innerText = "cadillac"; 
        ats2.innerText = "buick"; // teisingas
        ats3.innerText = "pontiac"; 
        ats4.innerText = "mitsubishi"; 
    } else if (questionX === 7) {
        img = document.querySelector(".img");
        img.src = "./pictures/cadillac.jpg";
        img.height = 290;
        ats1.innerText = "bentley"; 
        ats2.innerText = "datsun"; 
        ats3.innerText = "cadillac"; // teisingas
        ats4.innerText = "plymouth"; 
    } else if (questionX === 8) {
        img = document.querySelector(".img");
        img.src = "./pictures/chevrolet.jpg";
        img.height = 290;
        ats1.innerText = "pontiac"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "cadillac"; 
        ats4.innerText = "chevrolet"; // teisingas
    } else if (questionX === 9) {
        img = document.querySelector(".img");
        img.src = "./pictures/chrysler.jpg";
        img.height = 290;
        ats1.innerText = "jaguar"; 
        ats2.innerText = "infiniti"; 
        ats3.innerText = "citroen"; 
        ats4.innerText = "chrysler"; // teisingas
    } else if (questionX === 10) {
        img = document.querySelector(".img");
        img.src = "./pictures/citroen.png";
        img.height = 290;
        ats1.innerText = "citroen"; // teisingas
        ats2.innerText = "lotus"; 
        ats3.innerText = "maserati"; 
        ats4.innerText = "seat"; 
    } else if (questionX === 11) {
        img = document.querySelector(".img");
        img.src = "./pictures/datsun.jpg";
        img.height = 290;
        ats1.innerText = "general motors co"; 
        ats2.innerText = "datsun"; // teisingas
        ats3.innerText = "kia"; 
        ats4.innerText = "alfa romeo"; 
    } else if (questionX === 12) {
        img = document.querySelector(".img");
        img.src = "./pictures/dodge.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "peugeot"; 
        ats3.innerText = "jaguar"; 
        ats4.innerText = "dodge"; // teisingas
    } else if (questionX === 13) {
        img = document.querySelector(".img");
        img.src = "./pictures/ferrari.png";
        img.height = 290;
        ats1.innerText = "lamborghini"; 
        ats2.innerText = "vauxhall"; 
        ats3.innerText = "ferrari"; // teisingas
        ats4.innerText = "lotus"; 
    } else if (questionX === 14) {
        img = document.querySelector(".img");
        img.src = "./pictures/fiat.png";
        img.height = 290;
        ats1.innerText = "opel"; 
        ats2.innerText = "lincoln"; 
        ats3.innerText = "fiat"; // teisingas
        ats4.innerText = "ford"; 
    } else if (questionX === 15) {
        img = document.querySelector(".img");
        img.src = "./pictures/ford.jpg";
        img.height = 290;
        ats1.innerText = "ford"; // teisingas
        ats2.innerText = "kia"; 
        ats3.innerText = "lexus"; 
        ats4.innerText = "fiat"; 
    } else if (questionX === 16) {
        img = document.querySelector(".img");
        img.src = "./pictures/general-motors-co.jpg";
        img.height = 290;
        ats1.innerText = "chrysler"; 
        ats2.innerText = "general motors co"; // teisingas
        ats3.innerText = "suzuki"; 
        ats4.innerText = "volga"; 
    } else if (questionX === 17) {
        img = document.querySelector(".img");
        img.src = "./pictures/hyundai.jpg";
        img.height = 290;
        ats1.innerText = "infiniti"; 
        ats2.innerText = "honda"; 
        ats3.innerText = "hyundai"; // teisingas
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 18) {
        img = document.querySelector(".img");
        img.src = "./pictures/honda.jpg";
        img.height = 290;
        ats1.innerText = "hyundai"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "volvo"; 
        ats4.innerText = "honda"; // teisingas
    } else if (questionX === 19) {
        img = document.querySelector(".img");
        img.src = "./pictures/infiniti.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "infiniti"; // teisingas
        ats3.innerText = "maserati"; 
        ats4.innerText = "lincoln"; 
    } else if (questionX === 20) {
        img = document.querySelector(".img");
        img.src = "./pictures/jaguar.jpg";
        img.height = 290;
        ats1.innerText = "alfa romeo"; 
        ats2.innerText = "lotus"; 
        ats3.innerText = "jaguar"; // teisingas
        ats4.innerText = "peugeot"; 
    } else if (questionX === 21) {
        img = document.querySelector(".img");
        img.src = "./pictures/kia.png";
        img.height = 290;
        ats1.innerText = "kia"; // teisingas
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "dodge"; 
    } else if (questionX === 22) {
        img = document.querySelector(".img");
        img.src = "./pictures/lada.jpg";
        img.height = 290;
        ats1.innerText = "saab"; 
        ats2.innerText = "vauxhall"; 
        ats3.innerText = "volga"; 
        ats4.innerText = "lada"; // teisingas
    } else if (questionX === 23) {
        img = document.querySelector(".img");
        img.src = "./pictures/lamborghini.png";
        img.height = 290;
        ats1.innerText = "maserati"; 
        ats2.innerText = "ferrari"; 
        ats3.innerText = "lamborghini"; // teisingas
        ats4.innerText = "lotus"; 
    } else if (questionX === 24) {
        img = document.querySelector(".img");
        img.src = "./pictures/lancia.png";
        img.height = 290;
        ats1.innerText = "tesla"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "lexus"; 
        ats4.innerText = "lancia"; // teisingas
    } else if (questionX === 25) {
        img = document.querySelector(".img");
        img.src = "./pictures/lexus.png";
        img.height = 290;
        ats1.innerText = "lexus"; // teisingas
        ats2.innerText = "lancia"; 
        ats3.innerText = "lincoln"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 26) {
        img = document.querySelector(".img");
        img.src = "./pictures/lincoln.jpg";
        img.height = 290;
        ats1.innerText = "pontiac"; 
        ats2.innerText = "lincoln"; // teisingas
        ats3.innerText = "buick"; 
        ats4.innerText = "cadillac"; 
    } else if (questionX === 27) {
        img = document.querySelector(".img");
        img.src = "./pictures/lotus.png";
        img.height = 290;
        ats1.innerText = "rolls royce"; 
        ats2.innerText = "rover"; 
        ats3.innerText = "lotus"; // teisingas
        ats4.innerText = "lamborghini"; 
    } else if (questionX === 28) {
        img = document.querySelector(".img");
        img.src = "./pictures/maserati.png";
        img.height = 290;
        ats1.innerText = "maserati"; // teisingas
        ats2.innerText = "cadillac"; 
        ats3.innerText = "porsche"; 
        ats4.innerText = "volkswagen"; 
    } else if (questionX === 29) {
        img = document.querySelector(".img");
        img.src = "./pictures/mazda.png";
        img.height = 290;
        ats1.innerText = "volkswagen"; 
        ats2.innerText = "mercedes"; 
        ats3.innerText = "mini"; 
        ats4.innerText = "mazda"; // teisingas
    } else if (questionX === 30) {
        img = document.querySelector(".img");
        img.src = "./pictures/mercedes.png";
        img.height = 290;
        ats1.innerText = "mitsubishi"; 
        ats2.innerText = "mercedes"; // teisingas
        ats3.innerText = "renault"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 31) {
        img = document.querySelector(".img");
        img.src = "./pictures/mini.png";
        img.height = 290;
        ats1.innerText = "general motors co"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "mini"; // teisingas
        ats4.innerText = "jaguar"; 
    } else if (questionX === 32) {
        img = document.querySelector(".img");
        img.src = "./pictures/mitsubishi.png";
        img.height = 290;
        ats1.innerText = "mercedes"; 
        ats2.innerText = "bentley"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "mitsubishi"; // teisingas
    } else if (questionX === 33) {
        img = document.querySelector(".img");
        img.src = "./pictures/nissan.png";
        img.height = 290;
        ats1.innerText = "nissan"; // teisingas
        ats2.innerText = "datsun"; 
        ats3.innerText = "lancia"; 
        ats4.innerText = "opel"; 
    } else if (questionX === 34) {
        img = document.querySelector(".img");
        img.src = "./pictures/opel.png";
        img.height = 290;
        ats1.innerText = "opel"; // teisingas
        ats2.innerText = "rover"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 35) {
        img = document.querySelector(".img");
        img.src = "./pictures/peugeot.png";
        img.height = 290;
        ats1.innerText = "dodge"; 
        ats2.innerText = "peugeot"; // teisingas
        ats3.innerText = "saab"; 
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 36) {
        img = document.querySelector(".img");
        img.src = "./pictures/plymouth.png";
        img.height = 290;
        ats1.innerText = "porsche"; 
        ats2.innerText = "pontiac"; 
        ats3.innerText = "plymouth"; // teisingas
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 37) {
        img = document.querySelector(".img");
        img.src = "./pictures/pontiac.png";
        img.height = 290;
        ats1.innerText = "bugatti"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "cadillac"; 
        ats4.innerText = "pontiac"; // teisingas
    } else if (questionX === 38) {
        img = document.querySelector(".img");
        img.src = "./pictures/porsche.png";
        img.height = 290;
        ats1.innerText = "lamborghini"; 
        ats2.innerText = "lotus"; 
        ats3.innerText = "porsche"; // teisingas
        ats4.innerText = "lancia"; 
    } else if (questionX === 39) {
        img = document.querySelector(".img");
        img.src = "./pictures/renault.png";
        img.height = 290;
        ats1.innerText = "renault"; // teisingas
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "maserati"; 
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 40) {
        img = document.querySelector(".img");
        img.src = "./pictures/rolls-royce.jpg";
        img.height = 290;
        ats1.innerText = "bentley"; 
        ats2.innerText = "rolls royce"; // teisingas
        ats3.innerText = "bugatti"; 
        ats4.innerText = "rover"; 
    } else if (questionX === 41) {
        img = document.querySelector(".img");
        img.src = "./pictures/rover.jpg";
        img.height = 290;
        ats1.innerText = "lincoln"; 
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "subaru"; 
        ats4.innerText = "rover"; // teisingas
    } else if (questionX === 42) {
        img = document.querySelector(".img");
        img.src = "./pictures/saab.png";
        img.height = 290;
        ats1.innerText = "saab"; // teisingas
        ats2.innerText = "suzuki"; 
        ats3.innerText = "skoda"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 43) {
        img = document.querySelector(".img");
        img.src = "./pictures/seat.jpg";
        img.height = 290;
        ats1.innerText = "seat"; // teisingas
        ats2.innerText = "suzuki"; 
        ats3.innerText = "subaru"; 
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 44) {
        img = document.querySelector(".img");
        img.src = "./pictures/skoda.png";
        img.height = 290;
        ats1.innerText = "infiniti"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "honda"; 
        ats4.innerText = "skoda"; // teisingas
    } else if (questionX === 45) {
        img = document.querySelector(".img");
        img.src = "./pictures/ssangyong.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "ssangyong"; // teisingas
        ats3.innerText = "bentley"; 
        ats4.innerText = "audi"; 
    } else if (questionX === 46) {
        img = document.querySelector(".img");
        img.src = "./pictures/subaru.png";
        img.height = 290;
        ats1.innerText = "opel"; 
        ats2.innerText = "saab"; 
        ats3.innerText = "subaru"; // teisingas
        ats4.innerText = "volkswagen"; 
    } else if (questionX === 47) {
        img = document.querySelector(".img");
        img.src = "./pictures/suzuki.jpg";
        img.height = 290;
        ats1.innerText = "subaru"; 
        ats2.innerText = "suzuki"; // teisingas
        ats3.innerText = "skoda"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 48) {
        img = document.querySelector(".img");
        img.src = "./pictures/tesla.png";
        img.height = 290;
        ats1.innerText = "toyota"; 
        ats2.innerText = "porsche"; 
        ats3.innerText = "tesla"; // teisingas
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 49) {
        img = document.querySelector(".img");
        img.src = "./pictures/toyota.jpg";
        img.height = 290;
        ats1.innerText = "tesla"; 
        ats2.innerText = "cadillac"; 
        ats3.innerText = "datsun"; 
        ats4.innerText = "toyota"; // teisingas
    } else if (questionX === 50) {
        img = document.querySelector(".img");
        img.src = "./pictures/vauxhall.jpg";
        img.height = 290;
        ats1.innerText = "vauxhall"; // teisingas
        ats2.innerText = "volga"; 
        ats3.innerText = "volkswagen"; 
        ats4.innerText = "volvo"; 
    } else if (questionX === 51) {
        img = document.querySelector(".img");
        img.src = "./pictures/volga.png";
        img.height = 290;
        ats1.innerText = "lada"; 
        ats2.innerText = "volga"; // teisingas
        ats3.innerText = "plymouth"; 
        ats4.innerText = "mitsubishi"; 
    } else if (questionX === 52) {
        img = document.querySelector(".img");
        img.src = "./pictures/volkswagen.png";
        img.height = 290;
        ats1.innerText = "citroen"; //answers[52][0]
        ats2.innerText = "subaru"; //answers[52][1]
        ats3.innerText = "volkswagen"; // teisingas //answers[52][2]
        ats4.innerText = "infiniti"; //answers[52][3]
    } else if (questionX === 53) {
        img = document.querySelector(".img");
        img.src = "./pictures/volvo.png";
        img.height = 290;
        ats1.innerText = "rolls royce"; 
        ats2.innerText = "renault"; 
        ats3.innerText = "volkswagen"; 
        ats4.innerText = "volvo"; // teisingas
    }
}





// if (question === 1 && q1 === 1 || question === 2 && q2 === 1 || question === 3 && q3 === 1 ||
//     question === 4 && q4 === 1 || question === 5 && q5 === 1 || question === 6 && q6 === 1 ||
//     question === 7 && q7 === 1 || question === 8 && q8 === 1 || question === 9 && q9 === 1 ||
//     question === 10 && q10 === 1 || question === 11 && bonusQ === 1) {
//     picture = 1;
//     img = document.querySelector(".img");
//     img.src = "./pictures/alfa-romeo.jpg";
//     img.height = 290;
//     ats1.innerText = "alfa romeo";
//     ats2.innerText = "datsun";
//     ats3.innerText = "infiniti";
//     ats4.innerText = "peugeot";
// }

// if (question === 1 && q1 === 2 || question === 2 && q2 === 2 || question === 3 && q3 === 2 ||
//     question === 4 && q4 === 2 || question === 5 && q5 === 2 || question === 6 && q6 === 2 ||
//     question === 7 && q7 === 2 || question === 8 && q8 === 2 || question === 9 && q9 === 2 ||
//     question === 10 && q10 === 2 || question === 11 && bonusQ === 2) {
//     picture = 2;
//     img = document.querySelector(".img");
//     img.src = "./pictures/audi.png";
//     img.height = 290;
//     ats1.innerText = "lamborghini";
//     ats2.innerText = "volvo";
//     ats3.innerText = "audi";
//     ats4.innerText = "mitsubishi";
// }








function vienasClick() {
    // console.log("vienas");
    // console.log("teisingiAtsakymai", teisingiAtsakymai);
    // console.log("neteisingiAtsakymai", neteisingiAtsakymai);
    
    if (question === 11) {

    }

    if (questionX === 1) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 2) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 3) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 4) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 5) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 6) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 7) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 8) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 9) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 10) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 11) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 12) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 13) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 14) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 15) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 16) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 17) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 18) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 19) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 20) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 21) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 22) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 23) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 24) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 25) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 26) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 27) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 28) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 29) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 30) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 31) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 32) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 33) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 34) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 35) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 36) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 37) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 38) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 39) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 40) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 41) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 42) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 43) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 44) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 45) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 46) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 47) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 48) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 49) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 50) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 51) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 52) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 53) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    }

    if (question === 1) {
        questionX = q1;
    } else if (question === 2) {
        questionX = q2;
    } else if (question === 3) {
        questionX = q3;
    } else if (question === 4) {
        questionX = q4;
    } else if (question === 5) {
        questionX = q5;
    } else if (question === 6) {
        questionX = q6;
    } else if (question === 7) {
        questionX = q7;
    } else if (question === 8) {
        questionX = q8;
    } else if (question === 9) {
        questionX = q9;
    } else if (question === 10) {
        questionX = q10;
    } else if (question === 11) {
        questionX = bonusQ;
    }

    if (questionX === 1) {
        img = document.querySelector(".img");
        img.src = "./pictures/alfa-romeo.jpg";
        img.height = 290;
        ats1.innerText = "alfa romeo"; // teisingas
        ats2.innerText = "datsun";
        ats3.innerText = "infiniti";
        ats4.innerText = "peugeot";
    } else if (questionX === 2) {
        img = document.querySelector(".img");
        img.src = "./pictures/audi.png";
        img.height = 290;
        ats1.innerText = "lamborghini";
        ats2.innerText = "volvo";
        ats3.innerText = "audi"; // teisingas
        ats4.innerText = "mitsubishi";
    } else if (questionX === 3) {
        img = document.querySelector(".img");
        img.src = "./pictures/bentley.png";
        img.height = 290;
        ats1.innerText = "bentley"; // teisingas
        ats2.innerText = "bugatti";
        ats3.innerText = "dodge"; 
        ats4.innerText = "rover";
    } else if (questionX === 4) {
        img = document.querySelector(".img");
        img.src = "./pictures/bmw.png";
        img.height = 290;
        ats1.innerText = "fiat"; 
        ats2.innerText = "buick";
        ats3.innerText = "audi"; 
        ats4.innerText = "bmw"; // teisingas
    } else if (questionX === 5) {
        img = document.querySelector(".img");
        img.src = "./pictures/bugatti.jpg";
        img.height = 290;
        ats1.innerText = "buick"; 
        ats2.innerText = "bugatti"; // teisingas
        ats3.innerText = "chevrolet"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 6) {
        img = document.querySelector(".img");
        img.src = "./pictures/buick.jpg";
        img.height = 290;
        ats1.innerText = "cadillac"; 
        ats2.innerText = "buick"; // teisingas
        ats3.innerText = "pontiac"; 
        ats4.innerText = "mitsubishi"; 
    } else if (questionX === 7) {
        img = document.querySelector(".img");
        img.src = "./pictures/cadillac.jpg";
        img.height = 290;
        ats1.innerText = "bentley"; 
        ats2.innerText = "datsun"; 
        ats3.innerText = "cadillac"; // teisingas
        ats4.innerText = "plymouth"; 
    } else if (questionX === 8) {
        img = document.querySelector(".img");
        img.src = "./pictures/chevrolet.jpg";
        img.height = 290;
        ats1.innerText = "pontiac"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "cadillac"; 
        ats4.innerText = "chevrolet"; // teisingas
    } else if (questionX === 9) {
        img = document.querySelector(".img");
        img.src = "./pictures/chrysler.jpg";
        img.height = 290;
        ats1.innerText = "jaguar"; 
        ats2.innerText = "infiniti"; 
        ats3.innerText = "citroen"; 
        ats4.innerText = "chrysler"; // teisingas
    } else if (questionX === 10) {
        img = document.querySelector(".img");
        img.src = "./pictures/citroen.png";
        img.height = 290;
        ats1.innerText = "citroen"; // teisingas
        ats2.innerText = "lotus"; 
        ats3.innerText = "maserati"; 
        ats4.innerText = "seat"; 
    } else if (questionX === 11) {
        img = document.querySelector(".img");
        img.src = "./pictures/datsun.jpg";
        img.height = 290;
        ats1.innerText = "general motors co"; 
        ats2.innerText = "datsun"; // teisingas
        ats3.innerText = "kia"; 
        ats4.innerText = "alfa romeo"; 
    } else if (questionX === 12) {
        img = document.querySelector(".img");
        img.src = "./pictures/dodge.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "peugeot"; 
        ats3.innerText = "jaguar"; 
        ats4.innerText = "dodge"; // teisingas
    } else if (questionX === 13) {
        img = document.querySelector(".img");
        img.src = "./pictures/ferrari.png";
        img.height = 290;
        ats1.innerText = "lamborghini"; 
        ats2.innerText = "vauxhall"; 
        ats3.innerText = "ferrari"; // teisingas
        ats4.innerText = "lotus"; 
    } else if (questionX === 14) {
        img = document.querySelector(".img");
        img.src = "./pictures/fiat.png";
        img.height = 290;
        ats1.innerText = "opel"; 
        ats2.innerText = "lincoln"; 
        ats3.innerText = "fiat"; // teisingas
        ats4.innerText = "ford"; 
    } else if (questionX === 15) {
        img = document.querySelector(".img");
        img.src = "./pictures/ford.jpg";
        img.height = 290;
        ats1.innerText = "ford"; // teisingas
        ats2.innerText = "kia"; 
        ats3.innerText = "lexus"; 
        ats4.innerText = "fiat"; 
    } else if (questionX === 16) {
        img = document.querySelector(".img");
        img.src = "./pictures/general-motors-co.jpg";
        img.height = 290;
        ats1.innerText = "chrysler"; 
        ats2.innerText = "general motors co"; // teisingas
        ats3.innerText = "suzuki"; 
        ats4.innerText = "volga"; 
    } else if (questionX === 17) {
        img = document.querySelector(".img");
        img.src = "./pictures/hyundai.jpg";
        img.height = 290;
        ats1.innerText = "infiniti"; 
        ats2.innerText = "honda"; 
        ats3.innerText = "hyundai"; // teisingas
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 18) {
        img = document.querySelector(".img");
        img.src = "./pictures/honda.jpg";
        img.height = 290;
        ats1.innerText = "hyundai"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "volvo"; 
        ats4.innerText = "honda"; // teisingas
    } else if (questionX === 19) {
        img = document.querySelector(".img");
        img.src = "./pictures/infiniti.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "infiniti"; // teisingas
        ats3.innerText = "maserati"; 
        ats4.innerText = "lincoln"; 
    } else if (questionX === 20) {
        img = document.querySelector(".img");
        img.src = "./pictures/jaguar.jpg";
        img.height = 290;
        ats1.innerText = "alfa romeo"; 
        ats2.innerText = "lotus"; 
        ats3.innerText = "jaguar"; // teisingas
        ats4.innerText = "peugeot"; 
    } else if (questionX === 21) {
        img = document.querySelector(".img");
        img.src = "./pictures/kia.png";
        img.height = 290;
        ats1.innerText = "kia"; // teisingas
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "dodge"; 
    } else if (questionX === 22) {
        img = document.querySelector(".img");
        img.src = "./pictures/lada.jpg";
        img.height = 290;
        ats1.innerText = "saab"; 
        ats2.innerText = "vauxhall"; 
        ats3.innerText = "volga"; 
        ats4.innerText = "lada"; // teisingas
    } else if (questionX === 23) {
        img = document.querySelector(".img");
        img.src = "./pictures/lamborghini.png";
        img.height = 290;
        ats1.innerText = "maserati"; 
        ats2.innerText = "ferrari"; 
        ats3.innerText = "lamborghini"; // teisingas
        ats4.innerText = "lotus"; 
    } else if (questionX === 24) {
        img = document.querySelector(".img");
        img.src = "./pictures/lancia.png";
        img.height = 290;
        ats1.innerText = "tesla"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "lexus"; 
        ats4.innerText = "lancia"; // teisingas
    } else if (questionX === 25) {
        img = document.querySelector(".img");
        img.src = "./pictures/lexus.png";
        img.height = 290;
        ats1.innerText = "lexus"; // teisingas
        ats2.innerText = "lancia"; 
        ats3.innerText = "lincoln"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 26) {
        img = document.querySelector(".img");
        img.src = "./pictures/lincoln.jpg";
        img.height = 290;
        ats1.innerText = "pontiac"; 
        ats2.innerText = "lincoln"; // teisingas
        ats3.innerText = "buick"; 
        ats4.innerText = "cadillac"; 
    } else if (questionX === 27) {
        img = document.querySelector(".img");
        img.src = "./pictures/lotus.png";
        img.height = 290;
        ats1.innerText = "rolls royce"; 
        ats2.innerText = "rover"; 
        ats3.innerText = "lotus"; // teisingas
        ats4.innerText = "lamborghini"; 
    } else if (questionX === 28) {
        img = document.querySelector(".img");
        img.src = "./pictures/maserati.png";
        img.height = 290;
        ats1.innerText = "maserati"; // teisingas
        ats2.innerText = "cadillac"; 
        ats3.innerText = "porsche"; 
        ats4.innerText = "volkswagen"; 
    } else if (questionX === 29) {
        img = document.querySelector(".img");
        img.src = "./pictures/mazda.png";
        img.height = 290;
        ats1.innerText = "volkswagen"; 
        ats2.innerText = "mercedes"; 
        ats3.innerText = "mini"; 
        ats4.innerText = "mazda"; // teisingas
    } else if (questionX === 30) {
        img = document.querySelector(".img");
        img.src = "./pictures/mercedes.png";
        img.height = 290;
        ats1.innerText = "mitsubishi"; 
        ats2.innerText = "mercedes"; // teisingas
        ats3.innerText = "renault"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 31) {
        img = document.querySelector(".img");
        img.src = "./pictures/mini.png";
        img.height = 290;
        ats1.innerText = "general motors co"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "mini"; // teisingas
        ats4.innerText = "jaguar"; 
    } else if (questionX === 32) {
        img = document.querySelector(".img");
        img.src = "./pictures/mitsubishi.png";
        img.height = 290;
        ats1.innerText = "mercedes"; 
        ats2.innerText = "bentley"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "mitsubishi"; // teisingas
    } else if (questionX === 33) {
        img = document.querySelector(".img");
        img.src = "./pictures/nissan.png";
        img.height = 290;
        ats1.innerText = "nissan"; // teisingas
        ats2.innerText = "datsun"; 
        ats3.innerText = "lancia"; 
        ats4.innerText = "opel"; 
    } else if (questionX === 34) {
        img = document.querySelector(".img");
        img.src = "./pictures/opel.png";
        img.height = 290;
        ats1.innerText = "opel"; // teisingas
        ats2.innerText = "rover"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 35) {
        img = document.querySelector(".img");
        img.src = "./pictures/peugeot.png";
        img.height = 290;
        ats1.innerText = "dodge"; 
        ats2.innerText = "peugeot"; // teisingas
        ats3.innerText = "saab"; 
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 36) {
        img = document.querySelector(".img");
        img.src = "./pictures/plymouth.png";
        img.height = 290;
        ats1.innerText = "porsche"; 
        ats2.innerText = "pontiac"; 
        ats3.innerText = "plymouth"; // teisingas
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 37) {
        img = document.querySelector(".img");
        img.src = "./pictures/pontiac.png";
        img.height = 290;
        ats1.innerText = "bugatti"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "cadillac"; 
        ats4.innerText = "pontiac"; // teisingas
    } else if (questionX === 38) {
        img = document.querySelector(".img");
        img.src = "./pictures/porsche.png";
        img.height = 290;
        ats1.innerText = "lamborghini"; 
        ats2.innerText = "lotus"; 
        ats3.innerText = "porsche"; // teisingas
        ats4.innerText = "lancia"; 
    } else if (questionX === 39) {
        img = document.querySelector(".img");
        img.src = "./pictures/renault.png";
        img.height = 290;
        ats1.innerText = "renault"; // teisingas
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "maserati"; 
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 40) {
        img = document.querySelector(".img");
        img.src = "./pictures/rolls-royce.jpg";
        img.height = 290;
        ats1.innerText = "bentley"; 
        ats2.innerText = "rolls royce"; // teisingas
        ats3.innerText = "bugatti"; 
        ats4.innerText = "rover"; 
    } else if (questionX === 41) {
        img = document.querySelector(".img");
        img.src = "./pictures/rover.jpg";
        img.height = 290;
        ats1.innerText = "lincoln"; 
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "subaru"; 
        ats4.innerText = "rover"; // teisingas
    } else if (questionX === 42) {
        img = document.querySelector(".img");
        img.src = "./pictures/saab.png";
        img.height = 290;
        ats1.innerText = "saab"; // teisingas
        ats2.innerText = "suzuki"; 
        ats3.innerText = "skoda"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 43) {
        img = document.querySelector(".img");
        img.src = "./pictures/seat.jpg";
        img.height = 290;
        ats1.innerText = "seat"; // teisingas
        ats2.innerText = "suzuki"; 
        ats3.innerText = "subaru"; 
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 44) {
        img = document.querySelector(".img");
        img.src = "./pictures/skoda.png";
        img.height = 290;
        ats1.innerText = "infiniti"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "honda"; 
        ats4.innerText = "skoda"; // teisingas
    } else if (questionX === 45) {
        img = document.querySelector(".img");
        img.src = "./pictures/ssangyong.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "ssangyong"; // teisingas
        ats3.innerText = "bentley"; 
        ats4.innerText = "audi"; 
    } else if (questionX === 46) {
        img = document.querySelector(".img");
        img.src = "./pictures/subaru.png";
        img.height = 290;
        ats1.innerText = "opel"; 
        ats2.innerText = "saab"; 
        ats3.innerText = "subaru"; // teisingas
        ats4.innerText = "volkswagen"; 
    } else if (questionX === 47) {
        img = document.querySelector(".img");
        img.src = "./pictures/suzuki.jpg";
        img.height = 290;
        ats1.innerText = "subaru"; 
        ats2.innerText = "suzuki"; // teisingas
        ats3.innerText = "skoda"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 48) {
        img = document.querySelector(".img");
        img.src = "./pictures/tesla.png";
        img.height = 290;
        ats1.innerText = "toyota"; 
        ats2.innerText = "porsche"; 
        ats3.innerText = "tesla"; // teisingas
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 49) {
        img = document.querySelector(".img");
        img.src = "./pictures/toyota.jpg";
        img.height = 290;
        ats1.innerText = "tesla"; 
        ats2.innerText = "cadillac"; 
        ats3.innerText = "datsun"; 
        ats4.innerText = "toyota"; // teisingas
    } else if (questionX === 50) {
        img = document.querySelector(".img");
        img.src = "./pictures/vauxhall.jpg";
        img.height = 290;
        ats1.innerText = "vauxhall"; // teisingas
        ats2.innerText = "volga"; 
        ats3.innerText = "volkswagen"; 
        ats4.innerText = "volvo"; 
    } else if (questionX === 51) {
        img = document.querySelector(".img");
        img.src = "./pictures/volga.png";
        img.height = 290;
        ats1.innerText = "lada"; 
        ats2.innerText = "volga"; // teisingas
        ats3.innerText = "plymouth"; 
        ats4.innerText = "mitsubishi"; 
    } else if (questionX === 52) {
        img = document.querySelector(".img");
        img.src = "./pictures/volkswagen.png";
        img.height = 290;
        ats1.innerText = "citroen"; //answers[52][0]
        ats2.innerText = "subaru"; //answers[52][1]
        ats3.innerText = "volkswagen"; // teisingas //answers[52][2]
        ats4.innerText = "infiniti"; //answers[52][3]
    } else if (questionX === 53) {
        img = document.querySelector(".img");
        img.src = "./pictures/volvo.png";
        img.height = 290;
        ats1.innerText = "rolls royce"; 
        ats2.innerText = "renault"; 
        ats3.innerText = "volkswagen"; 
        ats4.innerText = "volvo"; // teisingas
    }

    console.log("vienas");
    console.log("teisingiAtsakymai", teisingiAtsakymai);
    console.log("neteisingiAtsakymai", neteisingiAtsakymai);

    // if (picture === 1) {
    //     teisingiAtsakymai = teisingiAtsakymai + 1;
    //     question = question + 1;
    // }
    // if (picture === 2) {
    //     neteisingiAtsakymai = neteisingiAtsakymai + 1;
    //     question = question + 1;
    // }
}

function duClick() {
    // console.log("du");
    // console.log("teisingiAtsakymai", teisingiAtsakymai);
    // console.log("neteisingiAtsakymai", neteisingiAtsakymai);

    if (question === 11) {

    }

    if (questionX === 1) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 2) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 3) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 4) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 5) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 6) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 7) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 8) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 9) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 10) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 11) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 12) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 13) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 14) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 15) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 16) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 17) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 18) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 19) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 20) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 21) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 22) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 23) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 24) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 25) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 26) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 27) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 28) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 29) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 30) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 31) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 32) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 33) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 34) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 35) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 36) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 37) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 38) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 39) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 40) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 41) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 42) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 43) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 44) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 45) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 46) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 47) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 48) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 49) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 50) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 51) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 52) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 53) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    }

    if (question === 1) {
        questionX = q1;
    } else if (question === 2) {
        questionX = q2;
    } else if (question === 3) {
        questionX = q3;
    } else if (question === 4) {
        questionX = q4;
    } else if (question === 5) {
        questionX = q5;
    } else if (question === 6) {
        questionX = q6;
    } else if (question === 7) {
        questionX = q7;
    } else if (question === 8) {
        questionX = q8;
    } else if (question === 9) {
        questionX = q9;
    } else if (question === 10) {
        questionX = q10;
    } else if (question === 11) {
        questionX = bonusQ;
    }

    if (questionX === 1) {
        img = document.querySelector(".img");
        img.src = "./pictures/alfa-romeo.jpg";
        img.height = 290;
        ats1.innerText = "alfa romeo"; // teisingas
        ats2.innerText = "datsun";
        ats3.innerText = "infiniti";
        ats4.innerText = "peugeot";
    } else if (questionX === 2) {
        img = document.querySelector(".img");
        img.src = "./pictures/audi.png";
        img.height = 290;
        ats1.innerText = "lamborghini";
        ats2.innerText = "volvo";
        ats3.innerText = "audi"; // teisingas
        ats4.innerText = "mitsubishi";
    } else if (questionX === 3) {
        img = document.querySelector(".img");
        img.src = "./pictures/bentley.png";
        img.height = 290;
        ats1.innerText = "bentley"; // teisingas
        ats2.innerText = "bugatti";
        ats3.innerText = "dodge"; 
        ats4.innerText = "rover";
    } else if (questionX === 4) {
        img = document.querySelector(".img");
        img.src = "./pictures/bmw.png";
        img.height = 290;
        ats1.innerText = "fiat"; 
        ats2.innerText = "buick";
        ats3.innerText = "audi"; 
        ats4.innerText = "bmw"; // teisingas
    } else if (questionX === 5) {
        img = document.querySelector(".img");
        img.src = "./pictures/bugatti.jpg";
        img.height = 290;
        ats1.innerText = "buick"; 
        ats2.innerText = "bugatti"; // teisingas
        ats3.innerText = "chevrolet"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 6) {
        img = document.querySelector(".img");
        img.src = "./pictures/buick.jpg";
        img.height = 290;
        ats1.innerText = "cadillac"; 
        ats2.innerText = "buick"; // teisingas
        ats3.innerText = "pontiac"; 
        ats4.innerText = "mitsubishi"; 
    } else if (questionX === 7) {
        img = document.querySelector(".img");
        img.src = "./pictures/cadillac.jpg";
        img.height = 290;
        ats1.innerText = "bentley"; 
        ats2.innerText = "datsun"; 
        ats3.innerText = "cadillac"; // teisingas
        ats4.innerText = "plymouth"; 
    } else if (questionX === 8) {
        img = document.querySelector(".img");
        img.src = "./pictures/chevrolet.jpg";
        img.height = 290;
        ats1.innerText = "pontiac"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "cadillac"; 
        ats4.innerText = "chevrolet"; // teisingas
    } else if (questionX === 9) {
        img = document.querySelector(".img");
        img.src = "./pictures/chrysler.jpg";
        img.height = 290;
        ats1.innerText = "jaguar"; 
        ats2.innerText = "infiniti"; 
        ats3.innerText = "citroen"; 
        ats4.innerText = "chrysler"; // teisingas
    } else if (questionX === 10) {
        img = document.querySelector(".img");
        img.src = "./pictures/citroen.png";
        img.height = 290;
        ats1.innerText = "citroen"; // teisingas
        ats2.innerText = "lotus"; 
        ats3.innerText = "maserati"; 
        ats4.innerText = "seat"; 
    } else if (questionX === 11) {
        img = document.querySelector(".img");
        img.src = "./pictures/datsun.jpg";
        img.height = 290;
        ats1.innerText = "general motors co"; 
        ats2.innerText = "datsun"; // teisingas
        ats3.innerText = "kia"; 
        ats4.innerText = "alfa romeo"; 
    } else if (questionX === 12) {
        img = document.querySelector(".img");
        img.src = "./pictures/dodge.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "peugeot"; 
        ats3.innerText = "jaguar"; 
        ats4.innerText = "dodge"; // teisingas
    } else if (questionX === 13) {
        img = document.querySelector(".img");
        img.src = "./pictures/ferrari.png";
        img.height = 290;
        ats1.innerText = "lamborghini"; 
        ats2.innerText = "vauxhall"; 
        ats3.innerText = "ferrari"; // teisingas
        ats4.innerText = "lotus"; 
    } else if (questionX === 14) {
        img = document.querySelector(".img");
        img.src = "./pictures/fiat.png";
        img.height = 290;
        ats1.innerText = "opel"; 
        ats2.innerText = "lincoln"; 
        ats3.innerText = "fiat"; // teisingas
        ats4.innerText = "ford"; 
    } else if (questionX === 15) {
        img = document.querySelector(".img");
        img.src = "./pictures/ford.jpg";
        img.height = 290;
        ats1.innerText = "ford"; // teisingas
        ats2.innerText = "kia"; 
        ats3.innerText = "lexus"; 
        ats4.innerText = "fiat"; 
    } else if (questionX === 16) {
        img = document.querySelector(".img");
        img.src = "./pictures/general-motors-co.jpg";
        img.height = 290;
        ats1.innerText = "chrysler"; 
        ats2.innerText = "general motors co"; // teisingas
        ats3.innerText = "suzuki"; 
        ats4.innerText = "volga"; 
    } else if (questionX === 17) {
        img = document.querySelector(".img");
        img.src = "./pictures/hyundai.jpg";
        img.height = 290;
        ats1.innerText = "infiniti"; 
        ats2.innerText = "honda"; 
        ats3.innerText = "hyundai"; // teisingas
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 18) {
        img = document.querySelector(".img");
        img.src = "./pictures/honda.jpg";
        img.height = 290;
        ats1.innerText = "hyundai"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "volvo"; 
        ats4.innerText = "honda"; // teisingas
    } else if (questionX === 19) {
        img = document.querySelector(".img");
        img.src = "./pictures/infiniti.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "infiniti"; // teisingas
        ats3.innerText = "maserati"; 
        ats4.innerText = "lincoln"; 
    } else if (questionX === 20) {
        img = document.querySelector(".img");
        img.src = "./pictures/jaguar.jpg";
        img.height = 290;
        ats1.innerText = "alfa romeo"; 
        ats2.innerText = "lotus"; 
        ats3.innerText = "jaguar"; // teisingas
        ats4.innerText = "peugeot"; 
    } else if (questionX === 21) {
        img = document.querySelector(".img");
        img.src = "./pictures/kia.png";
        img.height = 290;
        ats1.innerText = "kia"; // teisingas
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "dodge"; 
    } else if (questionX === 22) {
        img = document.querySelector(".img");
        img.src = "./pictures/lada.jpg";
        img.height = 290;
        ats1.innerText = "saab"; 
        ats2.innerText = "vauxhall"; 
        ats3.innerText = "volga"; 
        ats4.innerText = "lada"; // teisingas
    } else if (questionX === 23) {
        img = document.querySelector(".img");
        img.src = "./pictures/lamborghini.png";
        img.height = 290;
        ats1.innerText = "maserati"; 
        ats2.innerText = "ferrari"; 
        ats3.innerText = "lamborghini"; // teisingas
        ats4.innerText = "lotus"; 
    } else if (questionX === 24) {
        img = document.querySelector(".img");
        img.src = "./pictures/lancia.png";
        img.height = 290;
        ats1.innerText = "tesla"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "lexus"; 
        ats4.innerText = "lancia"; // teisingas
    } else if (questionX === 25) {
        img = document.querySelector(".img");
        img.src = "./pictures/lexus.png";
        img.height = 290;
        ats1.innerText = "lexus"; // teisingas
        ats2.innerText = "lancia"; 
        ats3.innerText = "lincoln"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 26) {
        img = document.querySelector(".img");
        img.src = "./pictures/lincoln.jpg";
        img.height = 290;
        ats1.innerText = "pontiac"; 
        ats2.innerText = "lincoln"; // teisingas
        ats3.innerText = "buick"; 
        ats4.innerText = "cadillac"; 
    } else if (questionX === 27) {
        img = document.querySelector(".img");
        img.src = "./pictures/lotus.png";
        img.height = 290;
        ats1.innerText = "rolls royce"; 
        ats2.innerText = "rover"; 
        ats3.innerText = "lotus"; // teisingas
        ats4.innerText = "lamborghini"; 
    } else if (questionX === 28) {
        img = document.querySelector(".img");
        img.src = "./pictures/maserati.png";
        img.height = 290;
        ats1.innerText = "maserati"; // teisingas
        ats2.innerText = "cadillac"; 
        ats3.innerText = "porsche"; 
        ats4.innerText = "volkswagen"; 
    } else if (questionX === 29) {
        img = document.querySelector(".img");
        img.src = "./pictures/mazda.png";
        img.height = 290;
        ats1.innerText = "volkswagen"; 
        ats2.innerText = "mercedes"; 
        ats3.innerText = "mini"; 
        ats4.innerText = "mazda"; // teisingas
    } else if (questionX === 30) {
        img = document.querySelector(".img");
        img.src = "./pictures/mercedes.png";
        img.height = 290;
        ats1.innerText = "mitsubishi"; 
        ats2.innerText = "mercedes"; // teisingas
        ats3.innerText = "renault"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 31) {
        img = document.querySelector(".img");
        img.src = "./pictures/mini.png";
        img.height = 290;
        ats1.innerText = "general motors co"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "mini"; // teisingas
        ats4.innerText = "jaguar"; 
    } else if (questionX === 32) {
        img = document.querySelector(".img");
        img.src = "./pictures/mitsubishi.png";
        img.height = 290;
        ats1.innerText = "mercedes"; 
        ats2.innerText = "bentley"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "mitsubishi"; // teisingas
    } else if (questionX === 33) {
        img = document.querySelector(".img");
        img.src = "./pictures/nissan.png";
        img.height = 290;
        ats1.innerText = "nissan"; // teisingas
        ats2.innerText = "datsun"; 
        ats3.innerText = "lancia"; 
        ats4.innerText = "opel"; 
    } else if (questionX === 34) {
        img = document.querySelector(".img");
        img.src = "./pictures/opel.png";
        img.height = 290;
        ats1.innerText = "opel"; // teisingas
        ats2.innerText = "rover"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 35) {
        img = document.querySelector(".img");
        img.src = "./pictures/peugeot.png";
        img.height = 290;
        ats1.innerText = "dodge"; 
        ats2.innerText = "peugeot"; // teisingas
        ats3.innerText = "saab"; 
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 36) {
        img = document.querySelector(".img");
        img.src = "./pictures/plymouth.png";
        img.height = 290;
        ats1.innerText = "porsche"; 
        ats2.innerText = "pontiac"; 
        ats3.innerText = "plymouth"; // teisingas
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 37) {
        img = document.querySelector(".img");
        img.src = "./pictures/pontiac.png";
        img.height = 290;
        ats1.innerText = "bugatti"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "cadillac"; 
        ats4.innerText = "pontiac"; // teisingas
    } else if (questionX === 38) {
        img = document.querySelector(".img");
        img.src = "./pictures/porsche.png";
        img.height = 290;
        ats1.innerText = "lamborghini"; 
        ats2.innerText = "lotus"; 
        ats3.innerText = "porsche"; // teisingas
        ats4.innerText = "lancia"; 
    } else if (questionX === 39) {
        img = document.querySelector(".img");
        img.src = "./pictures/renault.png";
        img.height = 290;
        ats1.innerText = "renault"; // teisingas
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "maserati"; 
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 40) {
        img = document.querySelector(".img");
        img.src = "./pictures/rolls-royce.jpg";
        img.height = 290;
        ats1.innerText = "bentley"; 
        ats2.innerText = "rolls royce"; // teisingas
        ats3.innerText = "bugatti"; 
        ats4.innerText = "rover"; 
    } else if (questionX === 41) {
        img = document.querySelector(".img");
        img.src = "./pictures/rover.jpg";
        img.height = 290;
        ats1.innerText = "lincoln"; 
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "subaru"; 
        ats4.innerText = "rover"; // teisingas
    } else if (questionX === 42) {
        img = document.querySelector(".img");
        img.src = "./pictures/saab.png";
        img.height = 290;
        ats1.innerText = "saab"; // teisingas
        ats2.innerText = "suzuki"; 
        ats3.innerText = "skoda"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 43) {
        img = document.querySelector(".img");
        img.src = "./pictures/seat.jpg";
        img.height = 290;
        ats1.innerText = "seat"; // teisingas
        ats2.innerText = "suzuki"; 
        ats3.innerText = "subaru"; 
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 44) {
        img = document.querySelector(".img");
        img.src = "./pictures/skoda.png";
        img.height = 290;
        ats1.innerText = "infiniti"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "honda"; 
        ats4.innerText = "skoda"; // teisingas
    } else if (questionX === 45) {
        img = document.querySelector(".img");
        img.src = "./pictures/ssangyong.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "ssangyong"; // teisingas
        ats3.innerText = "bentley"; 
        ats4.innerText = "audi"; 
    } else if (questionX === 46) {
        img = document.querySelector(".img");
        img.src = "./pictures/subaru.png";
        img.height = 290;
        ats1.innerText = "opel"; 
        ats2.innerText = "saab"; 
        ats3.innerText = "subaru"; // teisingas
        ats4.innerText = "volkswagen"; 
    } else if (questionX === 47) {
        img = document.querySelector(".img");
        img.src = "./pictures/suzuki.jpg";
        img.height = 290;
        ats1.innerText = "subaru"; 
        ats2.innerText = "suzuki"; // teisingas
        ats3.innerText = "skoda"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 48) {
        img = document.querySelector(".img");
        img.src = "./pictures/tesla.png";
        img.height = 290;
        ats1.innerText = "toyota"; 
        ats2.innerText = "porsche"; 
        ats3.innerText = "tesla"; // teisingas
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 49) {
        img = document.querySelector(".img");
        img.src = "./pictures/toyota.jpg";
        img.height = 290;
        ats1.innerText = "tesla"; 
        ats2.innerText = "cadillac"; 
        ats3.innerText = "datsun"; 
        ats4.innerText = "toyota"; // teisingas
    } else if (questionX === 50) {
        img = document.querySelector(".img");
        img.src = "./pictures/vauxhall.jpg";
        img.height = 290;
        ats1.innerText = "vauxhall"; // teisingas
        ats2.innerText = "volga"; 
        ats3.innerText = "volkswagen"; 
        ats4.innerText = "volvo"; 
    } else if (questionX === 51) {
        img = document.querySelector(".img");
        img.src = "./pictures/volga.png";
        img.height = 290;
        ats1.innerText = "lada"; 
        ats2.innerText = "volga"; // teisingas
        ats3.innerText = "plymouth"; 
        ats4.innerText = "mitsubishi"; 
    } else if (questionX === 52) {
        img = document.querySelector(".img");
        img.src = "./pictures/volkswagen.png";
        img.height = 290;
        ats1.innerText = "citroen"; //answers[52][0]
        ats2.innerText = "subaru"; //answers[52][1]
        ats3.innerText = "volkswagen"; // teisingas //answers[52][2]
        ats4.innerText = "infiniti"; //answers[52][3]
    } else if (questionX === 53) {
        img = document.querySelector(".img");
        img.src = "./pictures/volvo.png";
        img.height = 290;
        ats1.innerText = "rolls royce"; 
        ats2.innerText = "renault"; 
        ats3.innerText = "volkswagen"; 
        ats4.innerText = "volvo"; // teisingas
    }

    console.log("du");
    console.log("teisingiAtsakymai", teisingiAtsakymai);
    console.log("neteisingiAtsakymai", neteisingiAtsakymai);

    // if (picture === 1) {
    //     neteisingiAtsakymai = neteisingiAtsakymai + 1;
    //     question = question + 1;
    // }
    // if (picture === 2) {
    //     neteisingiAtsakymai = neteisingiAtsakymai + 1;
    //     question = question + 1;
    // }
}

function trysClick() {
    // console.log("trys");
    // console.log("teisingiAtsakymai", teisingiAtsakymai);
    // console.log("neteisingiAtsakymai", neteisingiAtsakymai);

    if (question === 11) {

    }

    if (questionX === 1) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 2) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 3) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 4) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 5) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 6) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 7) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 8) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 9) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 10) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 11) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 12) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 13) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 14) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 15) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 16) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 17) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 18) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 19) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 20) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 21) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 22) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 23) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 24) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 25) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 26) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 27) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 28) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 29) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 30) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 31) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 32) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 33) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 34) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 35) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 36) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 37) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 38) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 39) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 40) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 41) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 42) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 43) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 44) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 45) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 46) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 47) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 48) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 49) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 50) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 51) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 52) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 53) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    }

    if (question === 1) {
        questionX = q1;
    } else if (question === 2) {
        questionX = q2;
    } else if (question === 3) {
        questionX = q3;
    } else if (question === 4) {
        questionX = q4;
    } else if (question === 5) {
        questionX = q5;
    } else if (question === 6) {
        questionX = q6;
    } else if (question === 7) {
        questionX = q7;
    } else if (question === 8) {
        questionX = q8;
    } else if (question === 9) {
        questionX = q9;
    } else if (question === 10) {
        questionX = q10;
    } else if (question === 11) {
        questionX = bonusQ;
    }

    if (questionX === 1) {
        img = document.querySelector(".img");
        img.src = "./pictures/alfa-romeo.jpg";
        img.height = 290;
        ats1.innerText = "alfa romeo"; // teisingas
        ats2.innerText = "datsun";
        ats3.innerText = "infiniti";
        ats4.innerText = "peugeot";
    } else if (questionX === 2) {
        img = document.querySelector(".img");
        img.src = "./pictures/audi.png";
        img.height = 290;
        ats1.innerText = "lamborghini";
        ats2.innerText = "volvo";
        ats3.innerText = "audi"; // teisingas
        ats4.innerText = "mitsubishi";
    } else if (questionX === 3) {
        img = document.querySelector(".img");
        img.src = "./pictures/bentley.png";
        img.height = 290;
        ats1.innerText = "bentley"; // teisingas
        ats2.innerText = "bugatti";
        ats3.innerText = "dodge"; 
        ats4.innerText = "rover";
    } else if (questionX === 4) {
        img = document.querySelector(".img");
        img.src = "./pictures/bmw.png";
        img.height = 290;
        ats1.innerText = "fiat"; 
        ats2.innerText = "buick";
        ats3.innerText = "audi"; 
        ats4.innerText = "bmw"; // teisingas
    } else if (questionX === 5) {
        img = document.querySelector(".img");
        img.src = "./pictures/bugatti.jpg";
        img.height = 290;
        ats1.innerText = "buick"; 
        ats2.innerText = "bugatti"; // teisingas
        ats3.innerText = "chevrolet"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 6) {
        img = document.querySelector(".img");
        img.src = "./pictures/buick.jpg";
        img.height = 290;
        ats1.innerText = "cadillac"; 
        ats2.innerText = "buick"; // teisingas
        ats3.innerText = "pontiac"; 
        ats4.innerText = "mitsubishi"; 
    } else if (questionX === 7) {
        img = document.querySelector(".img");
        img.src = "./pictures/cadillac.jpg";
        img.height = 290;
        ats1.innerText = "bentley"; 
        ats2.innerText = "datsun"; 
        ats3.innerText = "cadillac"; // teisingas
        ats4.innerText = "plymouth"; 
    } else if (questionX === 8) {
        img = document.querySelector(".img");
        img.src = "./pictures/chevrolet.jpg";
        img.height = 290;
        ats1.innerText = "pontiac"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "cadillac"; 
        ats4.innerText = "chevrolet"; // teisingas
    } else if (questionX === 9) {
        img = document.querySelector(".img");
        img.src = "./pictures/chrysler.jpg";
        img.height = 290;
        ats1.innerText = "jaguar"; 
        ats2.innerText = "infiniti"; 
        ats3.innerText = "citroen"; 
        ats4.innerText = "chrysler"; // teisingas
    } else if (questionX === 10) {
        img = document.querySelector(".img");
        img.src = "./pictures/citroen.png";
        img.height = 290;
        ats1.innerText = "citroen"; // teisingas
        ats2.innerText = "lotus"; 
        ats3.innerText = "maserati"; 
        ats4.innerText = "seat"; 
    } else if (questionX === 11) {
        img = document.querySelector(".img");
        img.src = "./pictures/datsun.jpg";
        img.height = 290;
        ats1.innerText = "general motors co"; 
        ats2.innerText = "datsun"; // teisingas
        ats3.innerText = "kia"; 
        ats4.innerText = "alfa romeo"; 
    } else if (questionX === 12) {
        img = document.querySelector(".img");
        img.src = "./pictures/dodge.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "peugeot"; 
        ats3.innerText = "jaguar"; 
        ats4.innerText = "dodge"; // teisingas
    } else if (questionX === 13) {
        img = document.querySelector(".img");
        img.src = "./pictures/ferrari.png";
        img.height = 290;
        ats1.innerText = "lamborghini"; 
        ats2.innerText = "vauxhall"; 
        ats3.innerText = "ferrari"; // teisingas
        ats4.innerText = "lotus"; 
    } else if (questionX === 14) {
        img = document.querySelector(".img");
        img.src = "./pictures/fiat.png";
        img.height = 290;
        ats1.innerText = "opel"; 
        ats2.innerText = "lincoln"; 
        ats3.innerText = "fiat"; // teisingas
        ats4.innerText = "ford"; 
    } else if (questionX === 15) {
        img = document.querySelector(".img");
        img.src = "./pictures/ford.jpg";
        img.height = 290;
        ats1.innerText = "ford"; // teisingas
        ats2.innerText = "kia"; 
        ats3.innerText = "lexus"; 
        ats4.innerText = "fiat"; 
    } else if (questionX === 16) {
        img = document.querySelector(".img");
        img.src = "./pictures/general-motors-co.jpg";
        img.height = 290;
        ats1.innerText = "chrysler"; 
        ats2.innerText = "general motors co"; // teisingas
        ats3.innerText = "suzuki"; 
        ats4.innerText = "volga"; 
    } else if (questionX === 17) {
        img = document.querySelector(".img");
        img.src = "./pictures/hyundai.jpg";
        img.height = 290;
        ats1.innerText = "infiniti"; 
        ats2.innerText = "honda"; 
        ats3.innerText = "hyundai"; // teisingas
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 18) {
        img = document.querySelector(".img");
        img.src = "./pictures/honda.jpg";
        img.height = 290;
        ats1.innerText = "hyundai"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "volvo"; 
        ats4.innerText = "honda"; // teisingas
    } else if (questionX === 19) {
        img = document.querySelector(".img");
        img.src = "./pictures/infiniti.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "infiniti"; // teisingas
        ats3.innerText = "maserati"; 
        ats4.innerText = "lincoln"; 
    } else if (questionX === 20) {
        img = document.querySelector(".img");
        img.src = "./pictures/jaguar.jpg";
        img.height = 290;
        ats1.innerText = "alfa romeo"; 
        ats2.innerText = "lotus"; 
        ats3.innerText = "jaguar"; // teisingas
        ats4.innerText = "peugeot"; 
    } else if (questionX === 21) {
        img = document.querySelector(".img");
        img.src = "./pictures/kia.png";
        img.height = 290;
        ats1.innerText = "kia"; // teisingas
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "dodge"; 
    } else if (questionX === 22) {
        img = document.querySelector(".img");
        img.src = "./pictures/lada.jpg";
        img.height = 290;
        ats1.innerText = "saab"; 
        ats2.innerText = "vauxhall"; 
        ats3.innerText = "volga"; 
        ats4.innerText = "lada"; // teisingas
    } else if (questionX === 23) {
        img = document.querySelector(".img");
        img.src = "./pictures/lamborghini.png";
        img.height = 290;
        ats1.innerText = "maserati"; 
        ats2.innerText = "ferrari"; 
        ats3.innerText = "lamborghini"; // teisingas
        ats4.innerText = "lotus"; 
    } else if (questionX === 24) {
        img = document.querySelector(".img");
        img.src = "./pictures/lancia.png";
        img.height = 290;
        ats1.innerText = "tesla"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "lexus"; 
        ats4.innerText = "lancia"; // teisingas
    } else if (questionX === 25) {
        img = document.querySelector(".img");
        img.src = "./pictures/lexus.png";
        img.height = 290;
        ats1.innerText = "lexus"; // teisingas
        ats2.innerText = "lancia"; 
        ats3.innerText = "lincoln"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 26) {
        img = document.querySelector(".img");
        img.src = "./pictures/lincoln.jpg";
        img.height = 290;
        ats1.innerText = "pontiac"; 
        ats2.innerText = "lincoln"; // teisingas
        ats3.innerText = "buick"; 
        ats4.innerText = "cadillac"; 
    } else if (questionX === 27) {
        img = document.querySelector(".img");
        img.src = "./pictures/lotus.png";
        img.height = 290;
        ats1.innerText = "rolls royce"; 
        ats2.innerText = "rover"; 
        ats3.innerText = "lotus"; // teisingas
        ats4.innerText = "lamborghini"; 
    } else if (questionX === 28) {
        img = document.querySelector(".img");
        img.src = "./pictures/maserati.png";
        img.height = 290;
        ats1.innerText = "maserati"; // teisingas
        ats2.innerText = "cadillac"; 
        ats3.innerText = "porsche"; 
        ats4.innerText = "volkswagen"; 
    } else if (questionX === 29) {
        img = document.querySelector(".img");
        img.src = "./pictures/mazda.png";
        img.height = 290;
        ats1.innerText = "volkswagen"; 
        ats2.innerText = "mercedes"; 
        ats3.innerText = "mini"; 
        ats4.innerText = "mazda"; // teisingas
    } else if (questionX === 30) {
        img = document.querySelector(".img");
        img.src = "./pictures/mercedes.png";
        img.height = 290;
        ats1.innerText = "mitsubishi"; 
        ats2.innerText = "mercedes"; // teisingas
        ats3.innerText = "renault"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 31) {
        img = document.querySelector(".img");
        img.src = "./pictures/mini.png";
        img.height = 290;
        ats1.innerText = "general motors co"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "mini"; // teisingas
        ats4.innerText = "jaguar"; 
    } else if (questionX === 32) {
        img = document.querySelector(".img");
        img.src = "./pictures/mitsubishi.png";
        img.height = 290;
        ats1.innerText = "mercedes"; 
        ats2.innerText = "bentley"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "mitsubishi"; // teisingas
    } else if (questionX === 33) {
        img = document.querySelector(".img");
        img.src = "./pictures/nissan.png";
        img.height = 290;
        ats1.innerText = "nissan"; // teisingas
        ats2.innerText = "datsun"; 
        ats3.innerText = "lancia"; 
        ats4.innerText = "opel"; 
    } else if (questionX === 34) {
        img = document.querySelector(".img");
        img.src = "./pictures/opel.png";
        img.height = 290;
        ats1.innerText = "opel"; // teisingas
        ats2.innerText = "rover"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 35) {
        img = document.querySelector(".img");
        img.src = "./pictures/peugeot.png";
        img.height = 290;
        ats1.innerText = "dodge"; 
        ats2.innerText = "peugeot"; // teisingas
        ats3.innerText = "saab"; 
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 36) {
        img = document.querySelector(".img");
        img.src = "./pictures/plymouth.png";
        img.height = 290;
        ats1.innerText = "porsche"; 
        ats2.innerText = "pontiac"; 
        ats3.innerText = "plymouth"; // teisingas
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 37) {
        img = document.querySelector(".img");
        img.src = "./pictures/pontiac.png";
        img.height = 290;
        ats1.innerText = "bugatti"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "cadillac"; 
        ats4.innerText = "pontiac"; // teisingas
    } else if (questionX === 38) {
        img = document.querySelector(".img");
        img.src = "./pictures/porsche.png";
        img.height = 290;
        ats1.innerText = "lamborghini"; 
        ats2.innerText = "lotus"; 
        ats3.innerText = "porsche"; // teisingas
        ats4.innerText = "lancia"; 
    } else if (questionX === 39) {
        img = document.querySelector(".img");
        img.src = "./pictures/renault.png";
        img.height = 290;
        ats1.innerText = "renault"; // teisingas
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "maserati"; 
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 40) {
        img = document.querySelector(".img");
        img.src = "./pictures/rolls-royce.jpg";
        img.height = 290;
        ats1.innerText = "bentley"; 
        ats2.innerText = "rolls royce"; // teisingas
        ats3.innerText = "bugatti"; 
        ats4.innerText = "rover"; 
    } else if (questionX === 41) {
        img = document.querySelector(".img");
        img.src = "./pictures/rover.jpg";
        img.height = 290;
        ats1.innerText = "lincoln"; 
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "subaru"; 
        ats4.innerText = "rover"; // teisingas
    } else if (questionX === 42) {
        img = document.querySelector(".img");
        img.src = "./pictures/saab.png";
        img.height = 290;
        ats1.innerText = "saab"; // teisingas
        ats2.innerText = "suzuki"; 
        ats3.innerText = "skoda"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 43) {
        img = document.querySelector(".img");
        img.src = "./pictures/seat.jpg";
        img.height = 290;
        ats1.innerText = "seat"; // teisingas
        ats2.innerText = "suzuki"; 
        ats3.innerText = "subaru"; 
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 44) {
        img = document.querySelector(".img");
        img.src = "./pictures/skoda.png";
        img.height = 290;
        ats1.innerText = "infiniti"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "honda"; 
        ats4.innerText = "skoda"; // teisingas
    } else if (questionX === 45) {
        img = document.querySelector(".img");
        img.src = "./pictures/ssangyong.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "ssangyong"; // teisingas
        ats3.innerText = "bentley"; 
        ats4.innerText = "audi"; 
    } else if (questionX === 46) {
        img = document.querySelector(".img");
        img.src = "./pictures/subaru.png";
        img.height = 290;
        ats1.innerText = "opel"; 
        ats2.innerText = "saab"; 
        ats3.innerText = "subaru"; // teisingas
        ats4.innerText = "volkswagen"; 
    } else if (questionX === 47) {
        img = document.querySelector(".img");
        img.src = "./pictures/suzuki.jpg";
        img.height = 290;
        ats1.innerText = "subaru"; 
        ats2.innerText = "suzuki"; // teisingas
        ats3.innerText = "skoda"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 48) {
        img = document.querySelector(".img");
        img.src = "./pictures/tesla.png";
        img.height = 290;
        ats1.innerText = "toyota"; 
        ats2.innerText = "porsche"; 
        ats3.innerText = "tesla"; // teisingas
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 49) {
        img = document.querySelector(".img");
        img.src = "./pictures/toyota.jpg";
        img.height = 290;
        ats1.innerText = "tesla"; 
        ats2.innerText = "cadillac"; 
        ats3.innerText = "datsun"; 
        ats4.innerText = "toyota"; // teisingas
    } else if (questionX === 50) {
        img = document.querySelector(".img");
        img.src = "./pictures/vauxhall.jpg";
        img.height = 290;
        ats1.innerText = "vauxhall"; // teisingas
        ats2.innerText = "volga"; 
        ats3.innerText = "volkswagen"; 
        ats4.innerText = "volvo"; 
    } else if (questionX === 51) {
        img = document.querySelector(".img");
        img.src = "./pictures/volga.png";
        img.height = 290;
        ats1.innerText = "lada"; 
        ats2.innerText = "volga"; // teisingas
        ats3.innerText = "plymouth"; 
        ats4.innerText = "mitsubishi"; 
    } else if (questionX === 52) {
        img = document.querySelector(".img");
        img.src = "./pictures/volkswagen.png";
        img.height = 290;
        ats1.innerText = "citroen"; //answers[52][0]
        ats2.innerText = "subaru"; //answers[52][1]
        ats3.innerText = "volkswagen"; // teisingas //answers[52][2]
        ats4.innerText = "infiniti"; //answers[52][3]
    } else if (questionX === 53) {
        img = document.querySelector(".img");
        img.src = "./pictures/volvo.png";
        img.height = 290;
        ats1.innerText = "rolls royce"; 
        ats2.innerText = "renault"; 
        ats3.innerText = "volkswagen"; 
        ats4.innerText = "volvo"; // teisingas
    }

    console.log("trys");
    console.log("teisingiAtsakymai", teisingiAtsakymai);
    console.log("neteisingiAtsakymai", neteisingiAtsakymai);

    // if (picture === 1) {
    //     neteisingiAtsakymai = neteisingiAtsakymai + 1;
    //     question = question + 1;
    // }
    // if (picture === 2) {
    //     teisingiAtsakymai = teisingiAtsakymai + 1;
    //     question = question + 1;
    // }
}

function keturiClick() {
    // console.log("keturi");
    // console.log("teisingiAtsakymai", teisingiAtsakymai);
    // console.log("neteisingiAtsakymai", neteisingiAtsakymai);

    if (question === 11) {

    }

    if (questionX === 1) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 2) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 3) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 4) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 5) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 6) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 7) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 8) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 9) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 10) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 11) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 12) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 13) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 14) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 15) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 16) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 17) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 18) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 19) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 20) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 21) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 22) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 23) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 24) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 25) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 26) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 27) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 28) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 29) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 30) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 31) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 32) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 33) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 34) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 35) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 36) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 37) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 38) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 39) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 40) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 41) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 42) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 43) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 44) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 45) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 46) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 47) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 48) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 49) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 50) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 51) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 52) {
        neteisingiAtsakymai = neteisingiAtsakymai + 1;
        question = question + 1;
    } else if (questionX === 53) {
        teisingiAtsakymai = teisingiAtsakymai + 1;
        question = question + 1;
    }

    if (question === 1) {
        questionX = q1;
    } else if (question === 2) {
        questionX = q2;
    } else if (question === 3) {
        questionX = q3;
    } else if (question === 4) {
        questionX = q4;
    } else if (question === 5) {
        questionX = q5;
    } else if (question === 6) {
        questionX = q6;
    } else if (question === 7) {
        questionX = q7;
    } else if (question === 8) {
        questionX = q8;
    } else if (question === 9) {
        questionX = q9;
    } else if (question === 10) {
        questionX = q10;
    } else if (question === 11) {
        questionX = bonusQ;
    }

    if (questionX === 1) {
        img = document.querySelector(".img");
        img.src = "./pictures/alfa-romeo.jpg";
        img.height = 290;
        ats1.innerText = "alfa romeo"; // teisingas
        ats2.innerText = "datsun";
        ats3.innerText = "infiniti";
        ats4.innerText = "peugeot";
    } else if (questionX === 2) {
        img = document.querySelector(".img");
        img.src = "./pictures/audi.png";
        img.height = 290;
        ats1.innerText = "lamborghini";
        ats2.innerText = "volvo";
        ats3.innerText = "audi"; // teisingas
        ats4.innerText = "mitsubishi";
    } else if (questionX === 3) {
        img = document.querySelector(".img");
        img.src = "./pictures/bentley.png";
        img.height = 290;
        ats1.innerText = "bentley"; // teisingas
        ats2.innerText = "bugatti";
        ats3.innerText = "dodge"; 
        ats4.innerText = "rover";
    } else if (questionX === 4) {
        img = document.querySelector(".img");
        img.src = "./pictures/bmw.png";
        img.height = 290;
        ats1.innerText = "fiat"; 
        ats2.innerText = "buick";
        ats3.innerText = "audi"; 
        ats4.innerText = "bmw"; // teisingas
    } else if (questionX === 5) {
        img = document.querySelector(".img");
        img.src = "./pictures/bugatti.jpg";
        img.height = 290;
        ats1.innerText = "buick"; 
        ats2.innerText = "bugatti"; // teisingas
        ats3.innerText = "chevrolet"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 6) {
        img = document.querySelector(".img");
        img.src = "./pictures/buick.jpg";
        img.height = 290;
        ats1.innerText = "cadillac"; 
        ats2.innerText = "buick"; // teisingas
        ats3.innerText = "pontiac"; 
        ats4.innerText = "mitsubishi"; 
    } else if (questionX === 7) {
        img = document.querySelector(".img");
        img.src = "./pictures/cadillac.jpg";
        img.height = 290;
        ats1.innerText = "bentley"; 
        ats2.innerText = "datsun"; 
        ats3.innerText = "cadillac"; // teisingas
        ats4.innerText = "plymouth"; 
    } else if (questionX === 8) {
        img = document.querySelector(".img");
        img.src = "./pictures/chevrolet.jpg";
        img.height = 290;
        ats1.innerText = "pontiac"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "cadillac"; 
        ats4.innerText = "chevrolet"; // teisingas
    } else if (questionX === 9) {
        img = document.querySelector(".img");
        img.src = "./pictures/chrysler.jpg";
        img.height = 290;
        ats1.innerText = "jaguar"; 
        ats2.innerText = "infiniti"; 
        ats3.innerText = "citroen"; 
        ats4.innerText = "chrysler"; // teisingas
    } else if (questionX === 10) {
        img = document.querySelector(".img");
        img.src = "./pictures/citroen.png";
        img.height = 290;
        ats1.innerText = "citroen"; // teisingas
        ats2.innerText = "lotus"; 
        ats3.innerText = "maserati"; 
        ats4.innerText = "seat"; 
    } else if (questionX === 11) {
        img = document.querySelector(".img");
        img.src = "./pictures/datsun.jpg";
        img.height = 290;
        ats1.innerText = "general motors co"; 
        ats2.innerText = "datsun"; // teisingas
        ats3.innerText = "kia"; 
        ats4.innerText = "alfa romeo"; 
    } else if (questionX === 12) {
        img = document.querySelector(".img");
        img.src = "./pictures/dodge.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "peugeot"; 
        ats3.innerText = "jaguar"; 
        ats4.innerText = "dodge"; // teisingas
    } else if (questionX === 13) {
        img = document.querySelector(".img");
        img.src = "./pictures/ferrari.png";
        img.height = 290;
        ats1.innerText = "lamborghini"; 
        ats2.innerText = "vauxhall"; 
        ats3.innerText = "ferrari"; // teisingas
        ats4.innerText = "lotus"; 
    } else if (questionX === 14) {
        img = document.querySelector(".img");
        img.src = "./pictures/fiat.png";
        img.height = 290;
        ats1.innerText = "opel"; 
        ats2.innerText = "lincoln"; 
        ats3.innerText = "fiat"; // teisingas
        ats4.innerText = "ford"; 
    } else if (questionX === 15) {
        img = document.querySelector(".img");
        img.src = "./pictures/ford.jpg";
        img.height = 290;
        ats1.innerText = "ford"; // teisingas
        ats2.innerText = "kia"; 
        ats3.innerText = "lexus"; 
        ats4.innerText = "fiat"; 
    } else if (questionX === 16) {
        img = document.querySelector(".img");
        img.src = "./pictures/general-motors-co.jpg";
        img.height = 290;
        ats1.innerText = "chrysler"; 
        ats2.innerText = "general motors co"; // teisingas
        ats3.innerText = "suzuki"; 
        ats4.innerText = "volga"; 
    } else if (questionX === 17) {
        img = document.querySelector(".img");
        img.src = "./pictures/hyundai.jpg";
        img.height = 290;
        ats1.innerText = "infiniti"; 
        ats2.innerText = "honda"; 
        ats3.innerText = "hyundai"; // teisingas
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 18) {
        img = document.querySelector(".img");
        img.src = "./pictures/honda.jpg";
        img.height = 290;
        ats1.innerText = "hyundai"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "volvo"; 
        ats4.innerText = "honda"; // teisingas
    } else if (questionX === 19) {
        img = document.querySelector(".img");
        img.src = "./pictures/infiniti.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "infiniti"; // teisingas
        ats3.innerText = "maserati"; 
        ats4.innerText = "lincoln"; 
    } else if (questionX === 20) {
        img = document.querySelector(".img");
        img.src = "./pictures/jaguar.jpg";
        img.height = 290;
        ats1.innerText = "alfa romeo"; 
        ats2.innerText = "lotus"; 
        ats3.innerText = "jaguar"; // teisingas
        ats4.innerText = "peugeot"; 
    } else if (questionX === 21) {
        img = document.querySelector(".img");
        img.src = "./pictures/kia.png";
        img.height = 290;
        ats1.innerText = "kia"; // teisingas
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "dodge"; 
    } else if (questionX === 22) {
        img = document.querySelector(".img");
        img.src = "./pictures/lada.jpg";
        img.height = 290;
        ats1.innerText = "saab"; 
        ats2.innerText = "vauxhall"; 
        ats3.innerText = "volga"; 
        ats4.innerText = "lada"; // teisingas
    } else if (questionX === 23) {
        img = document.querySelector(".img");
        img.src = "./pictures/lamborghini.png";
        img.height = 290;
        ats1.innerText = "maserati"; 
        ats2.innerText = "ferrari"; 
        ats3.innerText = "lamborghini"; // teisingas
        ats4.innerText = "lotus"; 
    } else if (questionX === 24) {
        img = document.querySelector(".img");
        img.src = "./pictures/lancia.png";
        img.height = 290;
        ats1.innerText = "tesla"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "lexus"; 
        ats4.innerText = "lancia"; // teisingas
    } else if (questionX === 25) {
        img = document.querySelector(".img");
        img.src = "./pictures/lexus.png";
        img.height = 290;
        ats1.innerText = "lexus"; // teisingas
        ats2.innerText = "lancia"; 
        ats3.innerText = "lincoln"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 26) {
        img = document.querySelector(".img");
        img.src = "./pictures/lincoln.jpg";
        img.height = 290;
        ats1.innerText = "pontiac"; 
        ats2.innerText = "lincoln"; // teisingas
        ats3.innerText = "buick"; 
        ats4.innerText = "cadillac"; 
    } else if (questionX === 27) {
        img = document.querySelector(".img");
        img.src = "./pictures/lotus.png";
        img.height = 290;
        ats1.innerText = "rolls royce"; 
        ats2.innerText = "rover"; 
        ats3.innerText = "lotus"; // teisingas
        ats4.innerText = "lamborghini"; 
    } else if (questionX === 28) {
        img = document.querySelector(".img");
        img.src = "./pictures/maserati.png";
        img.height = 290;
        ats1.innerText = "maserati"; // teisingas
        ats2.innerText = "cadillac"; 
        ats3.innerText = "porsche"; 
        ats4.innerText = "volkswagen"; 
    } else if (questionX === 29) {
        img = document.querySelector(".img");
        img.src = "./pictures/mazda.png";
        img.height = 290;
        ats1.innerText = "volkswagen"; 
        ats2.innerText = "mercedes"; 
        ats3.innerText = "mini"; 
        ats4.innerText = "mazda"; // teisingas
    } else if (questionX === 30) {
        img = document.querySelector(".img");
        img.src = "./pictures/mercedes.png";
        img.height = 290;
        ats1.innerText = "mitsubishi"; 
        ats2.innerText = "mercedes"; // teisingas
        ats3.innerText = "renault"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 31) {
        img = document.querySelector(".img");
        img.src = "./pictures/mini.png";
        img.height = 290;
        ats1.innerText = "general motors co"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "mini"; // teisingas
        ats4.innerText = "jaguar"; 
    } else if (questionX === 32) {
        img = document.querySelector(".img");
        img.src = "./pictures/mitsubishi.png";
        img.height = 290;
        ats1.innerText = "mercedes"; 
        ats2.innerText = "bentley"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "mitsubishi"; // teisingas
    } else if (questionX === 33) {
        img = document.querySelector(".img");
        img.src = "./pictures/nissan.png";
        img.height = 290;
        ats1.innerText = "nissan"; // teisingas
        ats2.innerText = "datsun"; 
        ats3.innerText = "lancia"; 
        ats4.innerText = "opel"; 
    } else if (questionX === 34) {
        img = document.querySelector(".img");
        img.src = "./pictures/opel.png";
        img.height = 290;
        ats1.innerText = "opel"; // teisingas
        ats2.innerText = "rover"; 
        ats3.innerText = "renault"; 
        ats4.innerText = "lotus"; 
    } else if (questionX === 35) {
        img = document.querySelector(".img");
        img.src = "./pictures/peugeot.png";
        img.height = 290;
        ats1.innerText = "dodge"; 
        ats2.innerText = "peugeot"; // teisingas
        ats3.innerText = "saab"; 
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 36) {
        img = document.querySelector(".img");
        img.src = "./pictures/plymouth.png";
        img.height = 290;
        ats1.innerText = "porsche"; 
        ats2.innerText = "pontiac"; 
        ats3.innerText = "plymouth"; // teisingas
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 37) {
        img = document.querySelector(".img");
        img.src = "./pictures/pontiac.png";
        img.height = 290;
        ats1.innerText = "bugatti"; 
        ats2.innerText = "plymouth"; 
        ats3.innerText = "cadillac"; 
        ats4.innerText = "pontiac"; // teisingas
    } else if (questionX === 38) {
        img = document.querySelector(".img");
        img.src = "./pictures/porsche.png";
        img.height = 290;
        ats1.innerText = "lamborghini"; 
        ats2.innerText = "lotus"; 
        ats3.innerText = "porsche"; // teisingas
        ats4.innerText = "lancia"; 
    } else if (questionX === 39) {
        img = document.querySelector(".img");
        img.src = "./pictures/renault.png";
        img.height = 290;
        ats1.innerText = "renault"; // teisingas
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "maserati"; 
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 40) {
        img = document.querySelector(".img");
        img.src = "./pictures/rolls-royce.jpg";
        img.height = 290;
        ats1.innerText = "bentley"; 
        ats2.innerText = "rolls royce"; // teisingas
        ats3.innerText = "bugatti"; 
        ats4.innerText = "rover"; 
    } else if (questionX === 41) {
        img = document.querySelector(".img");
        img.src = "./pictures/rover.jpg";
        img.height = 290;
        ats1.innerText = "lincoln"; 
        ats2.innerText = "rolls royce"; 
        ats3.innerText = "subaru"; 
        ats4.innerText = "rover"; // teisingas
    } else if (questionX === 42) {
        img = document.querySelector(".img");
        img.src = "./pictures/saab.png";
        img.height = 290;
        ats1.innerText = "saab"; // teisingas
        ats2.innerText = "suzuki"; 
        ats3.innerText = "skoda"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 43) {
        img = document.querySelector(".img");
        img.src = "./pictures/seat.jpg";
        img.height = 290;
        ats1.innerText = "seat"; // teisingas
        ats2.innerText = "suzuki"; 
        ats3.innerText = "subaru"; 
        ats4.innerText = "ssangyong"; 
    } else if (questionX === 44) {
        img = document.querySelector(".img");
        img.src = "./pictures/skoda.png";
        img.height = 290;
        ats1.innerText = "infiniti"; 
        ats2.innerText = "citroen"; 
        ats3.innerText = "honda"; 
        ats4.innerText = "skoda"; // teisingas
    } else if (questionX === 45) {
        img = document.querySelector(".img");
        img.src = "./pictures/ssangyong.png";
        img.height = 290;
        ats1.innerText = "lancia"; 
        ats2.innerText = "ssangyong"; // teisingas
        ats3.innerText = "bentley"; 
        ats4.innerText = "audi"; 
    } else if (questionX === 46) {
        img = document.querySelector(".img");
        img.src = "./pictures/subaru.png";
        img.height = 290;
        ats1.innerText = "opel"; 
        ats2.innerText = "saab"; 
        ats3.innerText = "subaru"; // teisingas
        ats4.innerText = "volkswagen"; 
    } else if (questionX === 47) {
        img = document.querySelector(".img");
        img.src = "./pictures/suzuki.jpg";
        img.height = 290;
        ats1.innerText = "subaru"; 
        ats2.innerText = "suzuki"; // teisingas
        ats3.innerText = "skoda"; 
        ats4.innerText = "nissan"; 
    } else if (questionX === 48) {
        img = document.querySelector(".img");
        img.src = "./pictures/tesla.png";
        img.height = 290;
        ats1.innerText = "toyota"; 
        ats2.innerText = "porsche"; 
        ats3.innerText = "tesla"; // teisingas
        ats4.innerText = "vauxhall"; 
    } else if (questionX === 49) {
        img = document.querySelector(".img");
        img.src = "./pictures/toyota.jpg";
        img.height = 290;
        ats1.innerText = "tesla"; 
        ats2.innerText = "cadillac"; 
        ats3.innerText = "datsun"; 
        ats4.innerText = "toyota"; // teisingas
    } else if (questionX === 50) {
        img = document.querySelector(".img");
        img.src = "./pictures/vauxhall.jpg";
        img.height = 290;
        ats1.innerText = "vauxhall"; // teisingas
        ats2.innerText = "volga"; 
        ats3.innerText = "volkswagen"; 
        ats4.innerText = "volvo"; 
    } else if (questionX === 51) {
        img = document.querySelector(".img");
        img.src = "./pictures/volga.png";
        img.height = 290;
        ats1.innerText = "lada"; 
        ats2.innerText = "volga"; // teisingas
        ats3.innerText = "plymouth"; 
        ats4.innerText = "mitsubishi"; 
    } else if (questionX === 52) {
        img = document.querySelector(".img");
        img.src = "./pictures/volkswagen.png";
        img.height = 290;
        ats1.innerText = "citroen"; //answers[52][0]
        ats2.innerText = "subaru"; //answers[52][1]
        ats3.innerText = "volkswagen"; // teisingas //answers[52][2]
        ats4.innerText = "infiniti"; //answers[52][3]
    } else if (questionX === 53) {
        img = document.querySelector(".img");
        img.src = "./pictures/volvo.png";
        img.height = 290;
        ats1.innerText = "rolls royce"; 
        ats2.innerText = "renault"; 
        ats3.innerText = "volkswagen"; 
        ats4.innerText = "volvo"; // teisingas
    }

    console.log("keturi");
    console.log("teisingiAtsakymai", teisingiAtsakymai);
    console.log("neteisingiAtsakymai", neteisingiAtsakymai);

    // if (picture === 1) {
    //     neteisingiAtsakymai = neteisingiAtsakymai + 1;
    //     question = question + 1;
    // }
    // if (picture === 2) {
    //     neteisingiAtsakymai = neteisingiAtsakymai + 1;
    //     question = question + 1;
    // }
}


start.addEventListener('click', startClick);

vienas.addEventListener('click', vienasClick);
du.addEventListener('click', duClick);
trys.addEventListener('click', trysClick);
keturi.addEventListener('click', keturiClick);




// const cars = ['volvo', 'ferrari'];
// const answers = [
//     [cars[0], cars[43], cars[24], cars[13]], 
//     [cars[1], cars[12], cars[26], cars[48]]
// ];
