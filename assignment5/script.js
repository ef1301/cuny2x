let amountOfRows = 1;
let amountOfColumns = 2;

//adding rows to a table
function addRow() {
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountOfColumns; i++){
	let cell = document.createElement("td");
	newRow.appendChild(cell);
    }

    mainGrid.appendChild(newRow);
    amountOfRows++;
}
