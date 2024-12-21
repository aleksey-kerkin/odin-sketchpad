const container = document.getElementById("grid-container");
const buttonDrawGrid = document.getElementById("button-draw-grid");
buttonDrawGrid.textContent = "Generate sketchpad";
// document.body.appendChild(buttonDrawGrid);

function drawSketchpad(size) {
  // Clear the existing grid
  container.innerHTML = "";

  // Calculate the size of each cell to fit within 960px
  const cellSize = 900 / size;

  // Set the container dimensions
  container.style.cssText = `
    width: 900px; height: 900px;
    border: 3px solid hsl(320, 100%, 40%);
    border-radius: 5px;
  `;

  // Generate the grid
  for (let i = 0; i < size * size; i++) {
    const singleCell = document.createElement("div");
    singleCell.setAttribute("class", "grid-item");
    singleCell.style.width = `${cellSize}px`;
    singleCell.style.height = `${cellSize}px`;

    // Add event listener to each cloned cell
    singleCell.addEventListener("mouseover", () => {
      singleCell.classList.add("hovered");
    });

    // Append the cloned cell to the container
    container.append(singleCell);
  }
}

buttonDrawGrid.addEventListener("click", () => {
  let gridSize = prompt(
    "Enter the number of squares per side for the new grid (max 100):"
  );
  gridSize = parseInt(gridSize);

  if (gridSize > 0 && gridSize <= 100) {
    drawSketchpad(gridSize);
  } else if (gridSize > 100) {
    alert("Too many grids! Please enter a number less than or equal to 100.");
  } else {
    alert("Invalid input! Please enter a valid number.");
  }
});
