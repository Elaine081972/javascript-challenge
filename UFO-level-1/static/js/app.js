// from data.js
var tableData = data;



// get a reference to the table body
const tbody = d3.select("tbody");

// loop through the data and use d3 append values
data.forEach((ufoReport) => {
    let row = tbody.append("tr");
    Object.values(ufoReport).forEach(value =>{
        let cell = row.append("td");
        cell.text(value);
    });
});

// select the button
// select the form - this doesn't seem to be working????
let button = d3.select("#filter-btn"),
    form = d3.select("#filters");

// complete the event handler function for the form
const runEnter = () => {

    // prevent the page from refreshing
    d3.event.preventDefault();
    
    // select the input element and get the raw HTML node
    // get the value property of the input element

    let inputElement = d3.select("#datetime"),
        inputValue = inputElement.property("value");

    let filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

    
}  


// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);