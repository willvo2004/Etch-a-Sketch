const container = document.querySelector(".div-container")


for (let i = 0; i < 256 ; i++) {
    const square = document.createElement("div");
    square.setAttribute("class","grid-item");
    container.appendChild(square);
}

const hoverSqaureList = document.querySelectorAll(".grid-item");
hoverSqaureList.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });
});


