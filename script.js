    
function get_gridsize() {
    let numgrid;
    while (true) {
        numgrid = prompt("Please enter the number of squares per side (1-100):");
        if (numgrid !== null && !isNaN(numgrid) && numgrid > 0 && numgrid <= 100) {
            return parseInt(numgrid);
        }
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
}

function createGrid(size) {
    const container = document.querySelector('.container');
    const gridItemSize = 640 / size;
    for (let i = 0; i < size ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
        div.style.width = `${gridItemSize}px`;
        div.style.height = `${gridItemSize}px`;
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = randomRGB();
        });
    }
}
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('create-grid-button');
    button.addEventListener('click', function() {
        const gridsize = get_gridsize();
        createGrid(gridsize);
    })
})
