const wrapper = document.querySelector(".sliderwraper")
const menuItem = document.querySelectorAll(".menuItem")

const products = [ 
    {
    id:1,
    title:"AIR FORCE",
    price:119,
    colors: [
        {
            code: "black",
            img: "img/InShot_20231122_165708897.png" ,
        },
        {
          code: "darkblue",
          img: "img/Airforce1.png"
        },
    ]
},
{
    id: 2,
    title: "AIR jordan",
    price: 149,
    colors:[
        {
            code: "lightgray",
            img: "img/InShot_20231127_171140063.png",
        },
        {
            code:"green",
            img: "img/Air jorda.2.png",
        },
    ],
},
{
    id:3,
    title: "blazer",
    price: 109,
    colors: [
        {
            code: "lightgray",
            img: "img/InShot_20231127_105750820.png",
        },
        {
            code:  "green",
            img: "img/blazer.3.png",
        }
    ],
},
{
    id:4,
    title:"crater",
    price:129,
    colors: [
        {
            code: "black",
            img:"img/InShot_20231127_105721733.png",
        },
        {
            code: "Lightgray",
            img: "img/crater4.png",

        },
    ],
},
{
    id:5,
    title: "hippe",
    price: 99,
    colors: [
        {
            code: "gray",
            img: "img/InShot_20231127_171256533.png",
        },
          {
            code:"black",
            img: "img/hippe.5.png",
          },
      ],
    },

];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTittle = document.querySelector(".productTittle");
const currentProductprice = document.querySelector(".productprice");
const currentProductcolors = document.querySelectorAll(".color");
const currentProductsizes = document.querySelectorAll(".size");





menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current side
       wrapper.style.transform = `translateX(${-100 * index}vw)`;
       //change the choosen product
       choosenProduct = products[index]


       //change texts of currentproduct
       currentProductTittle.textContent = choosenProduct.title;
       currentProductprice.textContent = "$" + choosenProduct.price;
       currentProductImg.src = choosenProduct.colors[0].img;
       //Assign new colors
       currentProductcolors.forEach((color,index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
       });
    });
});


currentProductcolors.forEach((color,index)=>{
color.addEventListener("click", ()=>{
currentProductImg.src = choosenProduct.colors[index].img;
});
});

currentProductsizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductsizes.forEach((size)=>{
            size.style.backgroundColor= "white"
            size.style.color="black"
        });

        size.style.backgroundColor= "black"
        size.style.color="white"
    });
});



//click to the button and show the 
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})
