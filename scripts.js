const container = document.querySelector(".div-container")


for (let i = 0; i < 256 ; i++) {
    const square = document.createElement("div");
    square.setAttribute("class","grid-item");
    container.appendChild(square);
}

const hoverSqaureList = document.querySelectorAll(".grid-item");
hoverSqaureList.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#c8d6bf";
    });
});

const slider = document.querySelector(".slider");
const value = document.querySelector("#value");
value.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
    value.innerHTML = this.value + " x " + this.value;
  }

