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

// // BONUS: Refactor to use Arrow Functions!
// data.forEach((weatherReport) => {
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

//creating references: date field and buttons
//ar button = d3.select("#filter-btn");
//var dateField = d3.select("#datetime");
//var inputFieldCity = d3.select("#city");
//var columns = ["datetime", "city", "state", "country", "shape", "comments"]
