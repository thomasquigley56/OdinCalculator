const numCont = document.querySelector('.numCont');
const vert = [];
const horiz = [];
let numItem = 1;

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