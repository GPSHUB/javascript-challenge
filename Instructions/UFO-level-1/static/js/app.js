// table data
let varData = data;

// have d3 select the table body
let tbody = d3.select('tbody');

varData.forEach(addRow);

function addRow(item){
 let row = tbody.append('tr');
 let result = Object.values(item);
 result.forEach(data=>{
   row.append('td').text(data)
 })
}

// Select the button
let button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

// keeps the page from refreshing every time i press the "Enter" key
  d3.event.preventDefault();
  tbody.html('')

  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");
  
  // Get the value property of the input element
  let inputValue = inputElement.property('value');
  
  // console.log(inputValue2);
  console.log(varData);

  // Use the form input to filter the data by blood type
  let filteredData = varData.filter(sighting => sighting.datetime === inputValue ); //&& sighting.city == inputValue2
  filteredData.forEach(addRow)
  console.log(filteredData);
};  