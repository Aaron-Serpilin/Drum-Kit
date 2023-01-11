//Button press detection
let numberDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        let buttonInnerHTML = this.innerHTML;

        soundMaker(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

//Key press detection
document.addEventListener("keydown", function (event) {

    soundMaker(event.key);
    buttonAnimation(event.key);

})

//In these event listeners, this.innerHTML and event.key are the same parameters

//Sound generating function based on button or key press
function soundMaker (key) {

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: 
            console.log(buttonInnerHTML);
    }

}

//Button animation function based on button or key press
function buttonAnimation (currentKey) {

   let activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function () {
        activeButton.classList.remove("pressed");
   }, 100);

}

//Constructor Function Example

// function HouseKeeper (yearsExperience, name, cleaningExperience) {
//     this.yearsExperience = yearsExperience;
//     this.name = name;
//     this.cleaningExperience = cleaningExperience;
//     this.clean = function () {
//         alert("Cleaning in Progress...");
//     }
// }

// let houseKeeper1 = new HouseKeeper(19, "Aaron", ["Rooms", "Bedrooms", "Apartments"]);

// console.log(houseKeeper1);