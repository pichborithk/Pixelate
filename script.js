const table = document.querySelector('table');
let inputRowNumber = document.querySelector('#input-row-number');
// let rowNumber = inputRowNumber.value;
const addBtn = document.querySelector('#add-row');
const selectColor = document.querySelector('select');
let color = 'red';

function makeRow() {
  let rowNumber = inputRowNumber.value;
  const tableRow = document.createElement('tr');
  while (rowNumber > 0) {
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    rowNumber--;
  }
  table.appendChild(tableRow);
}

function colorize(event) {
  event.target.classList.toggle(color);
}

function colorChoose(event) {
  color = event.target.value;
  // console.log(color);
}

function changeRowNumber() {
  const currentTr = document.querySelectorAll('tr');
  //Added if statement so that if player manually entered a number higher than 20, 20 would still remain as the max value of columns
  if (inputRowNumber.value <= 20) {
    rowNumber = inputRowNumber.value;
  } else rowNumber = 20;
  let previousRowCount = currentTr[0].children.length;
  //if adding columns
  if (rowNumber > previousRowCount) {
    let numberAdded = rowNumber - previousRowCount;
    for (row of currentTr) {
      for (let i = 0; i < numberAdded; i++) {
        let td = document.createElement('td');
        row.appendChild(td);
      }
    }
    //if removing columns
  } else {
    let numberSubtracted = previousRowCount - rowNumber;
    for (let i = 0; i < currentTr.length; i++) {
      for (let j = 0; j < numberSubtracted; j++) {
        let childToDelete = currentTr[i].children[0];
        currentTr[i].removeChild(childToDelete);
      }
      console.log(previousRowCount - rowNumber);
    }

    //   console.log(rowNumber);
  }
}

makeRow();
makeRow();

addBtn.addEventListener('click', makeRow);

table.addEventListener('click', colorize);

selectColor.addEventListener('change', colorChoose);

inputRowNumber.addEventListener('change', changeRowNumber);
