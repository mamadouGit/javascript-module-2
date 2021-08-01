const jumb=document.getElementById("jumbo")
console.log("jumb")
const donate=document.getElementById("donate")
const volun=document.getElementById("volun")
const blue=function(){
    jumb.style.backgroundColor="#588fbd";
    donate.style.backgroundColor="#ffa500";
    volun.style.backgroundColor="black";
    volun.style.color="white"
}
const orange= function(){
    jumb.style.backgroundColor="#f0ad4e";
    donate.style.backgroundColor="#5751fd";
    volun.style.backgroundColor="#31b0d5";
    volun.style.color="white";

}
const green=function(){
    jumb.style.backgroundColor="#87ca8a";
    donate.style.backgroundColor="black";
    volun.style.backgroundColor="#8c9c08";
    volun.style.color="";
    

}
const blueb=document.getElementById("blueBtn");
const orangeb=document.getElementById("orangeBtn");
const greenb=document.getElementById("greenBtn");
blueb.addEventListener("click",blue);
orangeb.addEventListener("click",orange);
greenb.addEventListener("click",green)


const emailme=document.getElementById("exampleInputEmail1");
const nameme=document.getElementById("example-text-input");
const describeme=document.getElementById("exampleTextarea");
console.log(describeme);
console.log(emailme)
console.log(nameme)
const lertme=function(){
    if(nameme.value!=="" && emailme.value.includes("@") && describeme.value!=="" ){
        alert("thank you for filling out the form")
    } 
}
const subme=document.getElementById("sub");
const submitted=function(){
    if(nameme.value===""){
        nameme.style.backgroundColor="red"
    }else{
       nameme.style.backgroundColor="white"

    }
    if(emailme.value.includes("@") ? emailme.style.backgroundColor="white":emailme.style.backgroundColor="red"){
        
    }
    if(describeme.value===""){
        describeme.style.backgroundColor="red"

    }else{describeme.style.backgroundColor="white"};
    

}



subme.addEventListener("click",submitted);
subme.addEventListener("click",lertme);
