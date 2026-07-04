const text = [
    "Cybersecurity Student",
    "Aspiring Security Analyst"
];

let line = 0;
let letter = 0;

const typing = document.querySelector(".typing");

function type(){

    if(letter < text[line].length){

        typing.textContent += text[line].charAt(letter);

        letter++;

        setTimeout(type,80);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(letter>0){

        typing.textContent=text[line].substring(0,letter-1);

        letter--;

        setTimeout(erase,40);

    }

    else{

        line++;

        if(line>=text.length){

            line=0;

        }

        setTimeout(type,300);

    }

}

type();