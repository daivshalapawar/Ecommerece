let icon = document.querySelector(".icon");
let ul= document.querySelector("ul");

icon.addEventListener("click",()=>{
    ul.classList.toggle("showData");

    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
})

//navbar

let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click",()=>{
    shop.style.color= "rgb(9, 255, 255)";
    reviews.style.color= "white";
    blogs.style.color= "white";
    contacts.style.color= "white";
})

reviews.addEventListener("click",()=>{
    reviews.style.color= "rgb(9, 255, 255)";
    shops.style.color= "white";
    blogs.style.color= "white";
    contacts.style.color= "white";
})

blogs.addEventListener("click",()=>{
    blogs.style.color= "rgb(9, 255, 255)";
    reviews.style.color= "white";
    shops.style.color= "white";
    contacts.style.color= "white";
})

contacts.addEventListener("click",()=>{
    contacts.style.color= "rgb(9, 255, 255)";
    reviews.style.color= "white";
    blogs.style.color= "white";
    shops.style.color= "white";
})

// card js

let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
let itemImag = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");

console.log(crd);

    crd.forEach(function(curValue){
        curValue.addEventListener("click",function(){
            itemPage.style.display="flex";
            container.style.display="none";

            let imgSrc = curValue.firstElementChild.src ;
            itemImg.src =imgSrc;
            
            let buyText = document.querySelector(".buyText");
            buyBtn.addEventListener("click",function(){
                document.querySelector(".buyPage").style.display="block";
                document.querySelector(".buyText").innerHTML=`
                <h3>Enter Detals:</h3>
                <input type="text" placeholder="Enter your Name" id="name"><br>
                <input type="text" placeholder="Enter your Addres" id="addres"><br>
                <input type="text" placeholder="Enter your Mobile Number" id="number"><br>
                <h3>Payment Option</h3>
                <select>
                    <option value="Google-Pay">Google-Pay</option>
                    <option value="Phone-Pay">Phone-Pay</option>
                    <option value="Bharat-Pay">Bharat-Pay</option>
                    <option value="Cash-On-Delivery">Cash-On-Delivery</option>
                </select><br>

                `
                let button = document.createElement("button");
                button.innerText="Submit";
                //button.classList("SubmitBtn");
                buyText.appendChild(button);
    

                button.addEventListener("click",function(){
                    let name = document.getElementById("name");

                    if(name.value == "" && addres.value == "" &&Number.value == ""){
                        alert("Please Enter Your Detalis");
                    }else{
                        alert("your Response Recorded");
                    }

                })


                let cross =document.querySelector(".cross");
                cross.addEventListener("click",function(){
                    document.querySelector(".buyPage").style.display="none";

                })
            })

        })
})
