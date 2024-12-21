const container = document.getElementById("grid-container");
const singleCell = document.createElement("div");
singleCell.setAttribute("class", "grid-item");

for (let i = 0; i < 16 * 16; i++) {
  const clonedCell = singleCell.cloneNode(true); // Clone the cell
  clonedCell.addEventListener("mouseenter", () => {
    clonedCell.classList.add("hovered"); // Add event listener to each cloned cell
  });
  container.append(clonedCell); // Append the cloned cell to the container
}
