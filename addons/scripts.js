const btnCount= document.querySelectorAll(".drum").length

for(let i=0; i<btnCount; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        document.addEventListener("keydown", function(event) {
            skana(event.key)
            // animacija(event.key)
        });
        
    });
    
    
}

function skana(key) {
    const C3 = new Audio('keys/C3.mp3')
    const D3 = new Audio('keys/D3.mp3')
    const E3 = new Audio('keys/E3.mp3')
    const F3 = new Audio('keys/F3.mp3')
    const G3 = new Audio('keys/G3.mp3')
    const A3 = new Audio('keys/A3.mp3')
    const B3 = new Audio('keys/B3.mp3')
    
    const C4 = new Audio('keys/C4.mp3')
    const D4 = new Audio('keys/D4.mp3')
    const E4 = new Audio('keys/E4.mp3')
    const F4 = new Audio('keys/F4.mp3')
    const G4 = new Audio('keys/G4.mp3')
    const A4 = new Audio('keys/A4.mp3')
    const B4 = new Audio('keys/B4.mp3')

    switch(key)
        {               
            case "q":
                C3.play()
                break;
            case "w":
                D3.play()
                break;
            case "e":
                E3.play()
                break;
            case "r":
                F3.play()
                break;
            case "t":
                G3.play()
                break;
            case "y":
                A3.play()
                break;
            case "u":
                B3.play()
                break;
            case "i":
                C4.play()
                break;
            case "o":
                D4.play()
                break;
            case "p":
                E4.play()
                break;

            case "a":
                F4.play()
                break;
            case "s":
                G4.play()
                break;

            case "k":
                A4.play()
                break;
            case "l":
                B4.play()
                break;
            default:
                console.log("Kļūda")
                
        }
}


// VARBUT PIEVIENMOT ANIMACIJAS???
// IDK
// -peteris

// function animacija(currentKey) {
//     let activeBTN= document.querySelector("." + currentKey)
//     activeBTN.classList.add("pressed")
//     setTimeout(function() {
//         activeBTN.classList.remove("pressed")
//     },
//     50)
// }




let ran=Math.floor((Math.random()*8))+1
// No 1 līdz 8 random skaitlis

let abolKarts=2
let atomKarts=2
let dimantKarts=2
let kokaKarts=2
let pasauleKarts=2
let peaceKarts=2
let pukeKarts=2
let starKarts=2
// Define cik katru kārts pieejams


// ka darbosies
// 
//loops ies caur visam kartim no a-p 
// 
// 
// 
// 
//

// alert(ra