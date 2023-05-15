const buton=document.getElementById("dark-light");
const body=document.getElementsByTagName("body");
const kart=document.getElementById("card-container");
const reng=document.getElementById("umumi-container");
const icon=document.getElementById("icon");
let x=true;
// const box1=document.querySelector(".box1")



buton.addEventListener("click",function (e) {
    
    if(x){
        kart.style.backgroundColor="black";
        kart.style.color="white";
        reng.style.backgroundColor="white"
        kart.classList.remove("box2");
        
        // kart.classList.add("box1");
        
        // icon.src="assets\img\pngtree-golden-moon-cloud-ramadan-pattern-decorative-element-png-image_2152104.jpg"
   
        
        
    }else{
        kart.style.backgroundColor="white";
        kart.style.color="black";
        reng.style.backgroundColor="black";
        kart.classList.remove("box1");
        kart.classList.add("box2");
       
    
    }
    
    x=!x
})

