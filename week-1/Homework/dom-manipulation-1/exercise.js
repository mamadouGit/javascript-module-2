/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const liste= document.querySelectorAll("p");
console.log(liste);
const fdiv=document.querySelector("div");
console.log(fdiv);
const jumele=document.querySelector("#jumbotron-text");
console.log(jumele);
const prim =document.getElementsByClassName("primary-content");
console.log(prim)



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const mybtn= document.getElementById("alertBtn");
console.log(mybtn)
const myaler =function(){
    return alert("Thanks for visiting Bikes for Refugees!")
}
mybtn.addEventListener("click",myaler)

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const bod = document.querySelector("body");
const clbtn=document.getElementById("bgrChangeBtn");
const mybgch= function(){
    bod.style.backgroundColor="red";
}
clbtn.addEventListener("click",mybgch);


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const adbtn= document.getElementById("addTextBtn");

const more=function(){
    const newsec=  document.createElement("p");
const par =document.getElementById("mainArticles")
par.prepend(newsec);
const tex=document.createTextNode("this is a new paragraph");
newsec.prepend(tex);

}
adbtn.addEventListener("click",more);



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const siz= document.getElementsByTagName("a");
const lin= document.getElementById("largerLinksBtn");

const mylarge = function(){
    for ( let i=0;i<siz.length;i++ )
    siz[i].style.fontSize="x-large"
        
    
}
console.log(siz)
lin.addEventListener("click",mylarge)


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addar= document.getElementById("addArticleBtn");
const toddar=document.getElementById("nar");
console.log(toddar.value)

const newar=function () {
    
    const newsec=  document.createElement("p");
    
const parar =document.getElementById("mainArticles")
parar.prepend(newsec);
const texar=document.createTextNode(toddar.value);

newsec.prepend(texar)
}
addar.addEventListener("click",newar)
    

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const color=["red","blue","pink","green","white","black","brown","purple"]
var p=0
const bodme = document.querySelector("body");
const clbtnme=document.getElementById("bgrChangeBtn");
const changeMe= function() {
     //var i=color[ Math.floor(Math.random(color)*color.length)];
     p=p<color.length?++p:0;
     bodme.style.backgroundColor=color[p]

    
    //bodme.style.background=i
    
}
clbtnme.addEventListener("click",changeMe)