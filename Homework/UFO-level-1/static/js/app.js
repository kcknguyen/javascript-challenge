// from data.js
const tableData = data;

//Get reference to the table
var tbody = d3.select("tbody");
console.log(data)
//Loop
data.forEach(function(ufoSightings) {
console.log(ufoSightings);
});

data.forEach(function(ufoSightingst) {
console.log(ufoSightings);
var row = tbody.append("tr");
});

data.forEach(function(ufoSightings) {
console.log(ufoSightings);
var row = tbody.append("tr");

Object.entries(ufoSightings).forEach(function([key, value]) {
console.log(key, value);
    });
});

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(ufoSightings) {
console.log(ufoSightings);
var row = tbody.append("tr");

Object.entries(ufoSightings).forEach(function([key, value]) {
console.log(key, value);

//Append a cell to the row for each value
// in the weather report object
var cell = row.append("td");
  });
 });

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function(ufoSightings) {
console.log(ufoSightings);
var row = tbody.append("tr");
Object.entries(ufoSightings).forEach(function([key, value]) {
console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
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
