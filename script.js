const numCont = document.querySelector('.numCont');
const vert = [];
const horiz = [];
let numItem = 1;

let eqPressed = false;//bool to see if screen.textContent is the result of a past calculation.
let opPressed = false;

for(let i = 0; i<3; ++i){
    vert[i] = document.createElement('div');
    vert[i].classList.add('vertNum');
    horiz[i] = [];
    for(let j = 0; j<3; ++j){
        horiz[i][j] = document.createElement('div');
        horiz[i][j].classList.add(`n${numItem}`);
        horiz[i][j].classList.add('horizNum');
        horiz[i][j].textContent = numItem;
        vert[i].appendChild(horiz[i][j]);
        numItem++;
    }
    numCont.appendChild(vert[i]);
}
const screen = document.querySelector('.screen');
const numKeys = [];
for(let i = 0; i <= 9; ++i){
    numKeys[i] = document.querySelector(`.n${i}`);
    numKeys[i].addEventListener('click', () =>{
        if(eqPressed){
            eqPressed = false;
            screen.textContent = '';
        }
        screen.textContent += `${i}`;
    });
}
const nClr = document.querySelector('.nClr');
nClr.addEventListener('click', () => {
        screen.textContent = '';
        num1 = 0;
        num2 = 0;
    });

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function mult(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operate(a, b, operator){
    return operator(a, b);
}

let num1;
let num2;
let op;

const nAdd = document.querySelector('.nAdd');
nAdd.addEventListener('click', () => opKeyPressed(add));

const nSub = document.querySelector('.nSub');
nSub.addEventListener('click', () => opKeyPressed(subtract));

const nMult = document.querySelector('.nMult');
nMult.addEventListener('click', () => opKeyPressed(mult));

const nDiv = document.querySelector('.nDiv');
nDiv.addEventListener('click', () => opKeyPressed(divide));

const nEq = document.querySelector('.nEq');
nEq.addEventListener('click', equals);

function equals(){
    num2 = +(screen.textContent);
    if(num2 === 0 && op === divide){
        screen.textContent = 'Are you trying to break me? Press Clr!';
        num1 = 0;
        num2 = 0;
    }
    else screen.textContent = (operate(num1, num2, op)).toFixed(3);
    eqPressed = true;
    opPressed = false;
}

function opKeyPressed(opKey){
    if(opPressed){
        equals();
        num1 = +(screen.textContent);
        op = opKey;
        opPressed = true;
    }
    else{
        num1 = +(screen.textContent);
        op = opKey;
        screen.textContent = '';
        opPressed = true;
    }
}