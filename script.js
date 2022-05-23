const gridContainer = document.getElementById("gridContainer");

function gridCreate() {
    for (let i = 0; i < 16; i++) {
        var gridSquare = document.createElement("div");
        gridSquare.className = "square";
        gridContainer.appendChild(gridSquare);
    }
}
gridCreate()
