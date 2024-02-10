let sliderWrapper=document.querySelector(".sliderWrapper");
let sliderAnim=document.querySelectorAll(".sliderAnim");


const products=[
    {
        id:1,
        title:"Air Force",
        price:1190,
        colors:[
            {
                code:"black",
                img:"img/air.png",
            },
            {
                code:"darkblue",
                img:"img/air2.png",
            }
        ]
    },
    {
        id:2,
        title:"Blazer",
        price:2000,
        colors:[
            {
                code:"lightgray",
                img:"img/blazer.png",
            },
            {
                code:"green",
                img:"img/blazer2.png",
            }
        ]
    },
    {
        id:3,
        title:"Crater",
        price:2500,
        colors:[
            {
                code:"black",
                img:"img/crater.png"
            },
            {
                code:"lightgray",
                img:"img/crater2.png"
            }
        ]
    },
    {
        id:4,
        title:"Hippie",
        price:1900,
        colors:[
            {
                code:"gray",
                img:"img/hippie.png",
            },
            {
                code:"black",
                img:"img/hippie2.png",
            }
        ]
    },
    {
        id:5,
        title:"Air Jordan",
        price:1100,
        colors:[
            {
                code:"lightgray",
                img:"img/jordan.png"

            },
            {
                code:"green",
                img:"img/jordan2.png"
            }
        ]
    }
];


let choosenProduct=products[0];
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");



sliderAnim.forEach((item,index)=>{
    item.addEventListener("click",()=>{

        //change current slide  
        sliderWrapper.style.transform=`translateX(${-index*100}vw)`;

        //change choosen product
        choosenProduct=products[index];
        
        

        //change texts of choosen product
        currentProductTitle.textContent = choosenProduct.title;

        currentProductPrice.textContent="₹" + choosenProduct.price;

        currentProductImg.src=choosenProduct.colors[0].img;


        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code;
        });
    }); 
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    
        size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";

    });
});




let prodbtn=document.querySelector(".productButton");
let count=0,count1,countfinal=0;
let cartCountBox=document.querySelector(".cartCount");
let countNumber=document.querySelector(".countNumber");
let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus");
let cartItemCount=document.querySelector(".cartItemCount");
let cartItem=document.querySelectorAll(".cartItem");
count1=1;


prodbtn.addEventListener("click",()=>{
    
    count=countfinal;
    count=count+1;
    if(count===1)
    {
        cartCountBox.style.display="flex";
        
    }
    else if(count>1 && count1===1)
    {
        countNumber.textContent=count;
        
    }
    else
    {
        count=count1+1;
        countNumber.textContent=count;
        

    }
    count1=count;
    countfinal=count;
    cartItemCount.textContent=countfinal;
    

});

plus.addEventListener("click",()=>{
    
    
    count1=count1+1;
    
    countNumber.textContent=count1;
    countfinal=count1;
    cartItemCount.textContent=countfinal;
    
});



minus.addEventListener("click",()=>{
    
    countfinal=countfinal-1;
    console.log(countfinal)
    if(countfinal===0)
    {
        cartCountBox.style.display="none";
        
    }
    else
    {
        countNumber.textContent=countfinal;
    }
    cartItemCount.textContent=countfinal;

    count=countfinal;
    count1=countfinal;
    
});




let close=document.querySelector("#close");
let cart=document.querySelector(".cart");
let viewProduct=document.querySelector(".viewProduct");
close.addEventListener("click",()=>{
     cart.style.display="none";
});

viewProduct.addEventListener("click",()=>{
    cart.style.display="flex";
});

prodbtn.addEventListener("click",()=>{
    
});