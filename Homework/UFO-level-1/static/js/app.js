// from data.js
const tableData = data;

//Get reference to the table
var tbody = d3.select("tbody");
console.log(data)

//Loop Through "data" and console.log each sightings
data.forEach(function(ufoSightings) {
console.log(data);
});

// Used d3 to append one table row "tr" for each sighting
data.forEach(function(ufoSightingst) {
console.log(data);
var row = tbody.append("tr");//
});

// Use 'object entries' to console.log each sighting
data.forEach(function(ufoSightings) {
console.log(ufoSightings);
var row = tbody.append("tr");

Object.entries(ufoSightings).forEach(function([key, value]) {
console.log(key, value);
    });
});

// Step 5: Use d3 to update each cell's text 
data.forEach(function(ufoSightings) {
console.log(ufoSightings);
var row = tbody.append("tr");
Object.entries(ufoSightings).forEach(function([key, value]) {
console.log(key, value);

// Append a cell to the row for each value
var cell = row.append("td");
cell.text(value);
  });
 });

 f// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#data");

  // Get the value property of the input element
  var inputValue = inputElement.property("datetime");

  // Print the value to the console
  console.log(inputValue);
}
// use the `on` function in d3 to attach a click event to the handler function for filterButton
filterButton.on("click", filterTable);

// use the `on` function in d3 to attach a click event to the handler function for resetButton
resetButton.on("click", resetTable);
//var inputdate = data;
//var button = d3.select("#button");
//button.on("click", runEnter);
//form.on("submit",runEnter);
// Complete the event handler function for the form
//function runEnter() {

    // Prevent the page from refreshing
    //d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
   // var inputElement = d3.select("#Filter Table");
  
    // Get the value property of the input element
    //var inputValue = inputElement.property("datetime");
  
    //console.log(inputValue);
    //console.log(inputdate);
  
    //var filteredData = inputdate.filter(inputdate => inputdate.datetime === inputValue);
  
    //console.log(filteredData);
  
//};

