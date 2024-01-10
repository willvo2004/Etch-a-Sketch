const container = document.querySelector(".div-container")
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    for (let i = 0; i < 9 ; i++) {
        const square = document.createElement("div");
        square.setAttribute("class","grid-item");
        container.appendChild(square);
    }
});
