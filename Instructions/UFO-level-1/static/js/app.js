// table data
let varData = data;

// have d3 select the table
//let table = d3.select('table');

// have d3 select the table body
let tbody = d3.select('tbody');

varData.forEach(addRow);


function addRow(item){
 var row = tbody.append('tr');
 var result = Object.values(item);
 result.forEach(data=>{
   row.append('td').text(data)
 })

}


// add a row to the table body
// let row = tbody.append('tr');

// add a value to the column cell
















// Select the button
let button = d3.select("#filter-btn");

// Select the form
//let form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
//form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  // keeps the page from refreshing every time i press the "Enter" key
  d3.event.preventDefault();
  tbody.html('')
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");
  // let inputElement2 = d3.select("#city");
  // Get the value property of the input element
  let inputValue = inputElement.property('value');
  // let inputValue2 = inputElement2.property('value');

  // console.log(inputValue2);
  console.log(varData);

  // Use the form input to filter the data by blood type

  let filteredData = varData.filter(sighting => sighting.datetime === inputValue ); //&& sighting.city == inputValue2
  filteredData.forEach(addRow)
  console.log(filteredData);
};  


//filteredData.forEach(addRow)



