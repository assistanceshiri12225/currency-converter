let userScore=0;
let CompScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    //rock,paper,scessor
    const options=["rock","paper","scissors"];
   const idx= Math.floor(Math.random()*3);
   return options[idx];

}
const drawgame=()=>{

    msg.innerText="Draw the Game.."
    msg.style.backgroundColor="#081b31";
   
};
const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        
        msg.innerText=`You win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        
        msg.innerText=`You loose the game  ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
//generate computer choice
const compChoice=genCompChoice();

if(userchoice==compChoice){
    //Game Draw
    drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        //scessios,paper
        userwin=compChoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        //rock,scessior
        userwin=compChoice==="scissors"?false:true;}
        else{
        userwin=compChoice==="rock"?false:true;
}
showWinner(userwin,userchoice,compChoice);
}
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");

playgame(userchoice);
    });
});