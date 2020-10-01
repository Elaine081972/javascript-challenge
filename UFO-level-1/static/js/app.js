// from data.js
var tableData = data;

// get a reference to the table body
let tbody = d3.select("tbody");

// loop through the data and use d3 append values
data.forEach((ufoReport) => {
    let row = tbody.append("tr");
    Object.values(ufoReport).forEach(value =>{
        let cell = row.append("td");
        cell.text(value);
    });
});

// select the button
// select the form - so the "enter" key can be used to submit the selection as well as the button
let button = d3.select("#filter-btn"),
    form = d3.select("#form");

// complete the event handler function for the form
const runEnter = () => {
{
    // prevent the page from refreshing
    d3.event.preventDefault();

    // clear the existing output
    tbody.html("");
    
    // select the input element and get the raw HTML node (date selected)
    // get the value property of the input element

        let inputElement = d3.select("#datetime"),
            inputValue = inputElement.property("value");
  
        //
        var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
   
    // filter is working and returning correct data 
        console.log(filteredData);

        filteredData.forEach(function(selections) {
      
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
});        
};


// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);