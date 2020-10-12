// table data
let varData = data;

// have d3 select the table
let table = d3.select('table');

// have d3 create a striped table
table.attr('class', "table table-striped");

// have d3 select the table body
let tbody = d3.select('tbody');

// add a row to the table body
let row = tbody.append('tr');

// add a value to the column cell
row.append('td').text(varData[0]);
row.append('td').text(varData[1]);
row.append('td').text(varData[2]);
row.append('td').text(varData[3]);
row.append('td').text(varData[4]);
row.append('td').text(varData[5]);
row.append('td').text(varData[6]);
















// Assign the data from `data.js` to a descriptive variable
// let tableData = data1;

// // Select the button
// let button = d3.select("#filter-btn");

// // Select the form
// let form = d3.select("#filters");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   // keeps the page from refreshing every time i press the "Enter" key
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   let inputElement = d3.select("#ufo-sighting-form-input");

//   // Get the value property of the input element
//   let inputValue = inputElement.property('value');

//   console.log(inputValue);
//   console.log(tableData);

//   // Use the form input to filter the data by blood type
//   let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

//   console.log(filteredData);
// };  

