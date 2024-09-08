/*const student={
    fullname: "Muskan kumari",
    age:21,
    gpa:8.3,
    ispass:true};
console.log(student);*/
/*const product={
    name:`Ball pen`,
    rating:4,
    price:270,
    offer:5
};
console.log(product);*/
/*const profile={
      name:`Muskan kumari`,
      isfollow: true,
      Message:"Hello ji kaise ho sada....",
      post:5,
      followers:400,
      following:300,
      Bio: "Coding Enthausast"
};
console.log(typeof profile["followers"]);*/
/*let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log(sum);*/
/*const prompt=require('prompt-sync')();
let fullname=prompt("enter the username:");
let username="@"+fullname+fullname.length;
console.log(username);*/
/*let marks=[97,67,89,98];
console.log(marks.length);*/
/*let friends=["krshina","shankar","Muskan","Megha","khusboo","Nandani","venus"];
for(let i=0;i<friends.length;i++){
    console.log(friends[i]);
}*/
/*let marks=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];

}
let average=sum/(marks.length);
console.log(average);
for(let mark of marks){
    sum=sum+mark;
}
let avg=sum/(marks.length);
console.log(`avg marks of the class is: ${avg}`);*/
let items=[250,645,300,900,50];
let indx=0;
for(let val of items){
   //console.log(`value at index ${indx} = ${val}`);
    
    let offer=val/10;
    items[indx]=items[indx]-offer;
    console.log(`value after offer=${items[indx]}`);
    indx++;
}
