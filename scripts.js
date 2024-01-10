const container = document.querySelector(".div-container")
const color = document.querySelector("#color-picker");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.setAttribute("class","grid-item");
    square.style.width = `calc(6.25% - 10px)`;
    square.style.height = `calc(6.25% - 10px)`;
    container.appendChild(square);
}

addHoverHandler()

const slider = document.querySelector(".slider");
const value = document.querySelector("#value");
value.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
    value.innerHTML = this.value + " x " + this.value;
    updateGrid();
  }


function updateGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    const grid = slider.value;
    for (let i = 0; i < grid**2 ; i++) {
        const sqaure = createGridItems(grid);
        container.appendChild(sqaure);
    }
    addHoverHandler()
}

function createGridItems(gridSize) {
    const square = document.createElement("div");
    square.setAttribute("class","grid-item");
    square.style.width = `calc(${100/gridSize}% - 10px)`;
    square.style.height = `calc(${100/gridSize}% - 10px)`;
    return square;
}

function addHoverHandler() {
    const hoverSqaureList = document.querySelectorAll(".grid-item");
    hoverSqaureList.forEach(square => {
    square.addEventListener("mouseover", () => {
            square.style.backgroundColor = color.value;
        });
    });
}

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", () => {
    const allSqaures = document.querySelectorAll(".grid-item");
    allSqaures.forEach(sqaure => {
        sqaure.style.backgroundColor = "white";
    });
});
