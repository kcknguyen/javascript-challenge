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

 // Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date 
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);


    filteredData.forEach(function(selections) {
    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});

 


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

