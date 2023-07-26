let countH = 0;
let countG = 0;
let count_h = document.getElementById("H");
let count_g = document.getElementById("G");
count_h.innerHTML = countH;
count_g.innerHTML = countG;


function PlusH1(){
    countH+=1
    count_h.innerHTML = countH;
}
function PlusH2(){
    countH+=2
    count_h.innerHTML = countH;
}
function PlusH3(){
    countH+=3
    count_h.innerHTML = countH;
}
function PlusG1(){
    countG+=1
    count_g.innerHTML = countG;
}
function PlusG2(){
    countG+=2
    count_g.innerHTML = countG;
}
function PlusG3(){
    countG+=3
    count_g.innerHTML = countG;
}