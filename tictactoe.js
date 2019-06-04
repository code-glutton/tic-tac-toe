//grab the element with id="b"
var restart = document.querySelector('#b');

//grab all the table elements
var tableData = document.querySelectorAll('td');
function clearTable(){
  for (var i = 0; i < tableData.length; i++) {
    tableData[i].textContent = '';
  }
}
//use event listener to clear table
restart.addEventListener('click',clearTable);

//function to switch between X,O and blank
function tableTic(){
  if(this.textContent == ''){
    this.textContent = 'X';
  }
  else if (this.textContent == 'X') {
    this.textContent = 'O';
  }
  else{
    this.textContent = '';
  }
}

//for loop to run the event handler through all the table data
for (var i = 0; i < tableData.length; i++) {
  tableData[i].addEventListener('click',tableTic);
}
