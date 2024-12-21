const container = document.getElementById("grid-container");
const singleCell = document.createElement("div");
const buttonDrawGrid = document.createElement("button");
buttonDrawGrid.textContent = "Generate sketchpad";
document.body.appendChild(buttonDrawGrid);
singleCell.setAttribute("class", "grid-item");

function drawSketchpad(size) {
  container.style.cssText = `width: ${size * 10}px; height: ${size * 10}px`;

  for (let i = 0; i < size * size; i++) {
    // Clone the cell
    const clonedCell = singleCell.cloneNode(true);
    // Add event listener to each cloned cell
    clonedCell.addEventListener("mouseenter", () => {
      clonedCell.classList.add("hovered");
    });
    // Append the cloned cell to the container
    container.append(clonedCell);
  }
}

buttonDrawGrid.addEventListener("click", () => {
  let gridSize = prompt("Grid dimensions: ");
  if (gridSize <= 100) {
    drawSketchpad(gridSize);
    buttonDrawGrid.remove();
  } else if (gridSize > 100) {
    alert("Too much grids");
  }
});

// drawSketchpad(16);
