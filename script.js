let divs=document.querySelectorAll(".box");
let idx=1;
for(let div of divs){
    div.innerText=`new uniqe value ${idx}`;
    idx++;
}
/*divs[0].innerText="new unique value1";
divs[1].innerText="new unique value2";
divs[2].innerText="new unique value3";*/
