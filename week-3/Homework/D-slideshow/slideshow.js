// Write your code here
const imgs=[
    "https://unsplash.com/photos/P3hruskgT8M",
    "https://unsplash.com/photos/lXmuCO2plV0",
    "https://unsplash.com/photos/mZwh9UX3j18",
    "https://unsplash.com/photos/TQYEmJLL6nU"

]
const courss=document.createElement("div");
const butt=document.createElement("div");
const imgsel=document.createElement("img")
const el=document.createElement("img");
const bbutt=document.createElement("button").textContent="back";
const nbutt=document.createElement("button").textContent="next";
butt.appendChild(bbutt)
butt.appendChild(nbutt)

courss.appendChild(imgsel)
courss.appendChild(butt)
document.body.appendChild(courss)
function show(){
    imgsel.src=imgs[imgindex]

}
function backw(){
    imgindex=(imgindex==0)?imgs.length-1:imgindex--
    show()
}
function forw(){
    resetinter(forw,1000)
}
function resetinter(fn){
    setinterval((fn,1000))
}
show
function forwauto(){
    resetinter(forw)
}
function stop(){
    resetinter()
}
function resetinter(fn){
    if(intervalref)clearInterval(intervalref)
    if(typeof fn==="function") intervalref=setInterval(fn,1000)
}
show

