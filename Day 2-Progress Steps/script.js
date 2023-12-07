const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;
    if(currentActive > circle.length) {
        currentActive = circle.length;
    }
    update ();
});

prev.addEventListener("click", () => {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1;
    }
    update ();
});

function update(){
    circle.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
    
    const active = document.querySelectorAll(".active");
    
    progress.style.width = ((active.length - 1) / (circle.length -1 )) * 100 + "%";
    
    if(currentActive  === 1){
        prev.disable = true;
    } else if (Active === circle.length){
        next.disable = true;
    } else {
        prev.disable = false;
        next.disable = false;
    }
}

// function updateNextToFinish() {
//     next.style.backgroundColor = "#8ae31d";
//     next.style.color = "black";
//     document.getElementById("next").style.fontWeight = "bold";
//     document.getElementById("next").style.letterSpacing = "-0.6px";
//     document.getElementById("next").innerHTML = "Finish";
//   }
  
//   function updateFinishToNext() {
//     next.style.backgroundColor = "#3498db";
//     next.style.color = "White";
//     document.getElementById("next").style.fontWeight = "normal";
//     document.getElementById("next").style.letterSpacing = "";
//     document.getElementById("next").innerHTML = "Next";
//   }