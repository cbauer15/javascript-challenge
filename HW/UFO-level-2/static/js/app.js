// from data.js

var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

// First Table
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([_, value]) => {
        row.append("td").text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#masterForm");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    // Clears out old table
    tbody.html("")

    // New Table with filtered date
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([_, value]) => {
            row.append("td").text(value);
        });
    });
}






// YOUR CODE HERE!
