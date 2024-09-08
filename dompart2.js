/*let div=document.querySelector("div");
console.log(div);
 let id=div.getAttribute("id");
 console.log(id);
 let para=document.querySelector("p");
 console.log(para.setAttribute("class","newclass"));
 let div=document.querySelector("div");
 console.log(div);
 div.style.backgroundColor="pink";
 div.innerText="Hello";
 let newBtn=document.createElement("button");
 newBtn.innerText="click here";
 console.log(newBtn);*/
 let newButton=document.createElement("button");
 newButton.innerText="Click here";
 newButton.style.color="white";
 newButton.style.backgroundColor="red";
 document.querySelector("body").prepend(newButton);
 let para=document.querySelector("p");
 
