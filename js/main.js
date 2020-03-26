


//Numbers counter in features section

let feature = document.querySelector('.features .numbers');
const counters = document.querySelectorAll(".counter");
const rate = 200;


let counterHandler = () =>{
    
    counters.forEach(counter => {

        const updateCounter = () =>{
            let topValue = counter.getAttribute("data-target");
            let count = +counter.innerText;
            let increment = +topValue / rate;
            
            if(topValue > count){
                counter.innerText = Math.ceil( count + increment);
                
                setTimeout(
                    updateCounter, 20
                );
            }
            else{
                counter.innerText = topValue;
            }
        }

        if(window.pageYOffset >= feature.offsetTop - window.innerHeight){
            window.removeEventListener("scroll", counterHandler);
            updateCounter();
        }
    });

}

window.addEventListener("scroll", counterHandler);
    




//Fixed Navbar

const about = document.querySelector(".about");
const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset >= about.offsetTop){
        nav.classList.add("fixed-nav");
    }
    else{
        nav.classList.remove("fixed-nav");
    }
});









