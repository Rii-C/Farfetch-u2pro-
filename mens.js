let data1 = [
    {
        img1: "https://cdn-images.farfetch-contents.com/18/56/91/66/18569166_40085985_1000.jpg",
        img2: "https://cdn-images.farfetch-contents.com/18/56/91/66/18569166_40092284_1000.jpg",
        info: "New Season",
        name: "Kenzo",
        discription: "Tiger-embroidered organic cotton hoodie",
        price: "$516"
    },
    {
        img1: "https://cdn-images.farfetch-contents.com/18/36/26/30/18362630_40060060_1000.jpg",
        img2: "https://cdn-images.farfetch-contents.com/18/36/26/30/18362630_40060078_1000.jpg",
        info: "New Season",
        name: "Valentino",
        discription : "camouflage-print cotton T-shirt",
        price: "$617"
    },
    {
        img1: "https://cdn-images.farfetch-contents.com/18/57/28/90/18572890_40034601_1000.jpg",
        img2: "https://cdn-images.farfetch-contents.com/18/57/28/90/18572890_40034595_1000.jpg",
        info: "New Season",
        name: "Dsquared2",
        discription : "paint splatter slim-cut jeans",
        price: "$810"
    },
    {
        img1: "https://cdn-images.farfetch-contents.com/18/56/97/63/18569763_40086525_1000.jpg",
        img2: "https://cdn-images.farfetch-contents.com/18/56/97/63/18569763_40086518_1000.jpg",
        info: "New Season",
        name: "Alexander McQueen",
        discription : "Court Trainer chunky sneakers",
        price: "$1,123"
    }
];

displayCard1(data1)

function displayCard1(data1) {
    data1.forEach(function (el) {
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.img1
        img.addEventListener("mouseover",changePic)
        img.addEventListener("mouseout", backToImg)

        let p = document.createElement("p")
        p.innerText = el.info

        let h3 = document.createElement("h3")
        h3.innerText = el.name

        let p2 = document.createElement("p")
        p2.innerText = el.discription

        let h4 = document.createElement("h4")
        h4.innerText = el.price

        let btn = document.querySelector("body>button")
        btn.innerText = "Shop Now"
        btn.addEventListener("click", reLocate)

        div.append(img, p, h3, p2, h4)
        document.querySelector("#CARD").append(div)
    })
}
// sub functions used in displayCard
function changePic() {
    event.preventDefault();
    for(let i=0;i<data1.length;i++){
        document.querySelector("#CARD>div>img").src=data1[2].img2
    }
    
}

function backToImg() {
    event.preventDefault();
    for(let i=0;i<data1.length;i++){
        document.querySelector("#CARD>div>img").src=data1[2].img1
    }
}

function reLocate() {
    document.querySelector("#CARD2>div>btn").src = ""
}
// ---------xxxxx-------
let data2 = [
    {
        img1 : "https://cdn-images.farfetch-contents.com/18/57/21/22/18572122_40072177_480.jpg",
        img2 : "https://cdn-images.farfetch-contents.com/18/57/21/22/18572122_40072187_1000.jpg",
        info : "new seasson",
        name : "Balmain",
        discription :"monogram-print baseball cap",
        price : "$355"
    
    },{
        img1 : "https://cdn-images.farfetch-contents.com/18/41/31/91/18413191_40066147_480.jpg",
        img2 : "https://cdn-images.farfetch-contents.com/18/41/31/91/18413191_40066150_1000.jpg",
        info : "new seasson",
        name : "JW Anderson",
        discription : "swirl-logo T-shirt",
        price : "$165"
    },{
       img1 : "https://cdn-images.farfetch-contents.com/18/49/73/98/18497398_40099212_480.jpg",
       img2 : "https://cdn-images.farfetch-contents.com/18/49/73/98/18497398_40099210_1000.jpg",
       info : "new seasson",
       name : "Garrett Leight",
       discription : "cartlon round-frame sunglasses",
       price : "$559"
    
    },{
       img1 : "https://cdn-images.farfetch-contents.com/18/57/10/68/18571068_40073424_480.jpg",
       img2 : "https://cdn-images.farfetch-contents.com/18/57/10/68/18571068_40075774_1000.jpg",                                                                                                                                                                                                                 
       info : "new seasson",
       name : "TOM FORD",
       discription :"panelled high-top sneakers",
       price : "$1,363"
    
    }
];

displayCard2(data2)

function displayCard2(data2) {
    data2.forEach(function (el) {
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.img1
        img.addEventListener("mouseover", function () {
            changePic2(el)
        })
        img.addEventListener("mouseout", function () {
            backToImg2(el)
        })

        let p = document.createElement("p")
        p.innerText = el.info

        let h3 = document.createElement("h3")
        h3.innerText = el.name

        let p2 = document.createElement("p")
        p2.innerText = el.discription

        let h4 = document.createElement("h4")
        h4.innerText = el.price

        div.append(img, p, h3, p2, h4)
        document.querySelector("#CARD2").append(div)
    })
}

function changePic2(el) {
    document.querySelector("#CARD2>div>img").src = el.img2
}
function backToImg2(el) {
    document.querySelector("#CARD2>div>img").src = el.img1
}

function goToWomens(){
    window.location.href="womens.html"
}

function goToMens(){
    window.location.href="index.html"
}

function goToKids(){
    window.location.href="kidsPage.html"
}

function goToLogin(){
    window.location.href="register.html"
}

function goToProduct(){
    window.location.href="mensProductPage.html"
}
