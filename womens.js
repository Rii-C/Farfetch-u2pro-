
  let data1 = [
    {
    img: "https://cdn-images.farfetch-contents.com/18/44/41/85/18444185_40014888_600.jpg",
    img2:"",
    p1: "New Season",
    h3: "Alexander MCQueen",
    p2: "draped denim skirt",
    p3: "$1,434"
  },
  {
    img: "https://cdn-images.farfetch-contents.com/18/54/01/71/18540171_40044847_600.jpg",
    img2:"",
    p1: "New season",
    h3: "GIABORGHINI",
    p2: "Rosie square-toe sandals",
    p3: "$950"
  },
  {
    img: "https://cdn-images.farfetch-contents.com/18/54/14/99/18541499_39987356_600.jpg ",
    img2:"",
    p1: "New Season",
    h3: "Stella MCcartney",
    p2: "nature print-sweatshirt",
    p3: "$729"
  },

  {
    img: "https://cdn-images.farfetch-contents.com/18/38/00/24/18380024_40078552_600.jpg",
    img2:"",
    p1: "New Season",
    h3: "Balenciaga",
    p2: "Paris flat mules",
    p3: "$475"
  },

  ];
 
  data1.forEach(function (elem) {
    let card = document.createElement("div")

    let pic = document.createElement("img")
    pic.setAttribute("src", elem.img)
   
    let first1 = document.createElement("p")
    first1.innerText = elem.p1

    let H3 = document.createElement("h3")
    H3.innerText = elem.h3

    let first2 = document.createElement("p")
    first2.innerText = elem.p2

    let first3 = document.createElement("p")
    first3.innerText = elem.p3

  

    card.append(pic, first1, H3, first2, first3)
    document.querySelector("#CARD").append(card)

  })


  
  let data2 = [
    {
    image: "https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3611526/data/31b9e2c9e1c0a9c74befcfacc59d9b72/3x4_three-columns/480/data",
    image2:"",
    para1: "GUCCI",
    para2: "Alessandro Michele’s unmistakable styles",
  },
  {
    image: "https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3611558/data/ac42b7273153c725399085a1077e33be/3x4_three-columns/480/data",
    image2:"",
    para1: "VALENTINO",
    para2: "from cocktail dresses to sleek suiting",
  },

  {
    image: "https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3611586/data/645a1f9efe9f4763877cc2f7b3d1dc9b/3x4_three-columns/480/data",
    image2:"",
    para1: "THIS WEEK'S MOST WANTED",
    para2: "*Those* Mach & Mach sandals and more",
  }

  ];

  data2.forEach(function (elem) {

    let card1 = document.createElement("div")
    let pict = document.createElement("img")
    pict.setAttribute("src", elem.image)//recheck
    let pg1 = document.createElement("p")
    pg1.innerText = elem.para1
    let pg2 = document.createElement("p")
    pg2.innerText = elem.para2
    card1.append(pict, pg1, pg2)
    document.querySelector("#containerST").append(card1)


  })



  let data3 = [{

    image: "https://cdn-images.farfetch-contents.com/17/91/00/34/17910034_39895315_600.jpg",
    image2:"",
    t1: "New Season",
    t2: "The Attico",
    t3: "strap-detail minidress",
    t4: "$981",
  },
  {
    image: "https://cdn-images.farfetch-contents.com/17/93/96/16/17939616_40034532_600.jpg",
    image2:"",
    t1: "New Season",
    t2: "ZIMMERMANN",
    t3: "Anneke mix-print midi dress",
    t4: "$1,820",
  },
  {
    image: "https://cdn-images.farfetch-contents.com/17/73/05/68/17730568_39827117_600.jpg",
    image2:"",
    t1: "New Season",
    t2: "Balenciaga",
    t3: "snakeskin-print sequinned mini dress",
    t4: "$5,355",




  },
  {
    image: "https://cdn-images.farfetch-contents.com/18/44/32/68/18443268_40014035_600.jpg",
    image2:"",
    t1: "New Season",
    t2: "Alexander McQueen",
    t3: "tailored mini dress",
    t4: "$4,146",
  },

  ];

  
  data3.forEach(function (elem) {
    let sheet = document.createElement("div")
    let photo = document.createElement("img")
    photo.setAttribute("src", elem.image)
    let Pr1 = document.createElement("p")
    Pr1.innerText = elem.t1
    let Pr2 = document.createElement("h4")
    Pr2.innerText = elem.t2
    let Pr3 = document.createElement("p")
    Pr3.innerText = elem.t3
    let Pr4 = document.createElement("p")
    Pr4.innerText = elem.t4
    sheet.append(photo, Pr1, Pr2, Pr3, Pr4)


    document.querySelector("#CARD2").append(sheet)
  })

  let data4 = [
    {
    image: "https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3611708/data/2d598fad064433d2bc95f02c2b0382a2/3x4_three-columns/480/data",
    tag1: "THE MODERN FEMININITY EDIT",
    tag2: "Dreamy silhouettes and muted palettes",

  },

  {
    image: "https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3611732/data/615dba3de73bb22495f3690f58902ca4/3x4_three-columns/480/data",
    tag1: "THE CLASSIC EDIT",
    tag2: "Timeless pieces to love forever",
  },

  {
    image: "https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3611748/data/281b68222abec4e11395ac34352dbef3/3x4_three-columns/480/data",
    tag1: "THE EXPRESSIONIST EDIT",
    tag2: "Cult collaborations and exciting launches",
  }
  ]

  data4.forEach(function (elem) {
    let chart = document.createElement("div")
    let picture = document.createElement("img")
    picture.setAttribute("src", elem.image)
    let tg1 = document.createElement("p")
    tg1.innerText = elem.tag1
    let tg2 = document.createElement("p")
    tg2.innerText = elem.tag2
    chart.append(picture, tg1, tg2)
    document.querySelector("#containerTS").append(chart)

  }) 
