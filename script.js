let mouseStatus = 0;
let mode = "black";

document.addEventListener("mousedown", () => mouseStatus = 1);
document.addEventListener("mouseup", () => mouseStatus = 0);


function changeColor(c) {
    if(mouseStatus == 1) {
        if(mode == "black") {
        c.style.backgroundColor = "black";
        }

        else if (mode == "rainbow") {
            randomRed = Math.floor(Math.random() * 256);
            randomGreen = Math.floor(Math.random() * 256);
            randomBlue = Math.floor(Math.random() * 256);
            c.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        }
    }
}

const TOTAL_SIZE = 750;
let size = 100;
const etchTable = document.querySelector("#etch-table");

for (i=1; i<=size; i++) {
    const row = document.createElement("tr");
    row.id = i.toString();
    row.classList.add("row");
    etchTable.appendChild(row);
}

const rows = document.querySelectorAll(".row");
let numOfRows = rows.length;

for (i=1; i<=rows.length; i++) {
    for (j=1; j<=size; j++) {
        const cell = document.createElement("td");
        cell.id = `${i.toString()},${j.toString()}`;
        cell.classList.add("cell");
        cell.style.width = `${Math.floor(TOTAL_SIZE / size)}px`;
        cell.style.height = `${Math.floor(TOTAL_SIZE / size)}px`;
        cell.addEventListener("mouseenter", () => changeColor(cell));
        const newRow = document.getElementById(`${i.toString()}`);
        newRow.appendChild(cell);

    }
}

dropdown = document.getElementById("modeSelection");
dropdown.addEventListener("input", () => mode = dropdown.value);

function clearzz() {
    allCells = document.querySelectorAll(".cell")
    allCells.forEach((zc) => zc.style.backgroundColor = "white")
}

