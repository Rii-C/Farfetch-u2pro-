let arrObj=[{
    image:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600394/data/be9c4eb68e2ec157ae75160153fa91eb/1x1_three-columns/480/data",
    text1:"BABY",
    text2:"Strap in to summer’s new shoes",
 },
{
   image:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600404/data/5073a9d2883d014f3edcba2d249df959/1x1_three-columns/480/data",
    text1:"KIDS",
    text2:"New-season sweaters and more",
},
{
   image:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600418/data/29ebe5c6639861b22afde4240afb303e/1x1_three-columns/480/data",
    text1:"TEENS",
    text2:"Stylish separates to complete the look",
}
]
arrObj.forEach(function(elem){
let box=document.createElement("div")
let avatar=document.createElement("img")
avatar.setAttribute("src",elem.image)
let para1=document.createElement("h3")
para1.innerText=elem.text1;
let para2=document.createElement("p")
para2.innerText=elem.text2;
box.append(avatar,para1,para2)
document.querySelector("#container1").append(box)
})

let arrObj2=[{
    image:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600366/data/a53e8df38883c20412a193efc656002c/1x1_two-columns/637/data",
    Tt1:"THE NURSERY EDIT",
    Tt2:"From Gucci changing bags to Chloé bottles"
},
{
   image:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600380/data/305d8f89e9388c09fc7954aa39b795d0/1x1_two-columns/637/data",
    Tt1:"NEW-SEASON PRINTS AND PATTERNS",
    Tt2:"Stripes, spots and playful prints for the sunny season"
}
]
arrObj2.forEach(function(elem){
let box1=document.createElement("div")
let avatar1=document.createElement("img")
avatar1.setAttribute("src",elem.image)
let t1=document.createElement("p")
t1.innerText=elem.Tt1
let t2=document.createElement("p")
t2.innerText=elem.Tt2
box1.append(avatar1,t1,t2)
document.querySelector("#container2").append(box1)
})

let arrObj3=[{
    image:"https://cdn-images.farfetch-contents.com/17/11/54/96/17115496_34621171_600.jpg",
    heading:"Jordan Kids",
    Pp1:"Jordan 1 Mid SE Electro Orange sneakers",
    Pp2:"$269",
 },
 {
    image:"https://cdn-images.farfetch-contents.com/18/43/28/99/18432899_39510679_600.jpg",
    heading:"Versace Kids",
    Pp1:"all-over graphic print sneakers",
    Pp2:"$516",
 },
 {
   image:"https://cdn-images.farfetch-contents.com/17/32/60/15/17326015_35741529_600.jpg",
   heading:"Golden Goose Kids",
   Pp1:"Old School sneakers",
   Pp2:"$381",
 },
 {
   image:"https://cdn-images.farfetch-contents.com/16/29/05/28/16290528_31118016_1000.jpg",
   heading:"Jordan Kids",
   Pp1:"Air Jordan 1 Retro High Volt Gold sneakers",
   Pp2:"$212",
 }
]
arrObj3.forEach(function(elem){
let b1=document.createElement("div");
let I1=document.createElement("img")
I1.setAttribute("src",elem.image);
let head=document.createElement("h3");
head.innerText=elem.heading
let p1=document.createElement("p")
p1.innerText=elem.Pp1;
let p2=document.createElement("h4")
p2.innerText=elem.Pp2;
b1.append(I1,head,p1,p2);
document.querySelector("#container3").append(b1);
})
let arrObj4=[{
    image:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600434/data/f8cdaae0a0d92dc1d36bc9c18ba40741/1x1_two-columns/637/data",
    para1:"PALM ANGELS KIDS",
    para2:"Sporty co-ords for a summer of adventure",
  },
 {
   image:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600442/data/8f7136c5c69897e127493571e70f7c46/1x1_two-columns/637/data",
    para1:"MODES SWISS",
    para2:"Big names only at the St Moritz boutique",
 }
 ]
arrObj4.forEach(function(elem){
let boxes=document.createElement("div")
let Image=document.createElement("img")
Image.setAttribute("src",elem.image)
let paragraph1=document.createElement("p")
paragraph1.innerText=elem.para1;
let paragraph2=document.createElement("p")
paragraph2.innerText=elem.para2;
boxes.append(Image,paragraph1,paragraph2);
document.querySelector("#container4").append(boxes)
})

function goToWomens(){
  window.location.href="womens.html"
}

function goToMens(){
  window.location.href="navbar.html"
}

function goToKids(){
  window.location.href="kidsPage.html"
}