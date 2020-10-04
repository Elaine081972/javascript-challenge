// from data.js
var tableData = data;

// get a reference to the table body
const tbody = d3.select("tbody");

// loop through the data and use d3 to append one table row "tr" for each UFO report object
// need to finish COMMENTING!!!
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

    // prevent the page from refreshing
    d3.event.preventDefault();

    // clear the existing output
    tbody.html("");
    
    // select the input element and get the raw HTML node (date selected)
    // get the value property of the input element

        let dateinputElement = d3.select("#datetime"),
            dateinputValue = dateinputElement.property("value");

        let cityinputElement = d3.select("#citydata"),
            cityinputValue = cityinputElement.property("value");

        let stateinputElement = d3.select("#statedata"),
            stateinputValue = stateinputElement.property("value");   
            
        let countryinputElement = d3.select("#countrydata"),
            countryinputValue = countryinputElement.property("value"); 

        let shapeinputElement = d3.select("#shapedata"),
            shapeinputValue = shapeinputElement.property("value"); 

        var filteredDate = tableData.filter(tableData => tableData.datetime === dateinputValue);

        var filteredCity = tableData.filter(tableData => tableData.city === cityinputValue);

        let filteredState = tableData.filter(tableData => tableData.state === stateinputValue);

        let filteredCountry = tableData.filter(tableData => tableData.country === countryinputValue);

        let filteredShape = tableData.filter(tableData => tableData.shape === shapeinputValue);
        
        var filteredData = tableData.filter(tableData => tableData.datetime === dateinputValue || 
            tableData.city === cityinputValue || tableData.state === stateinputValue ||
            tableData.country === countryinputValue || tableData.shape === shapeinputValue);
   
    // filter is working and returning correct data 
        console.log(filteredDate);
        console.log(filteredCity);
        console.log(filteredState);
        console.log(filteredCountry);
        console.log(filteredShape);
        console.log(filteredData);
    // append each filtered value of the input element to the table
        filteredData.forEach((entry) => {
        let row = tbody.append("tr");
        Object.entries(entry).forEach(function([key, value]) {
            let cell = row.append("td");
            cell.text(value);
        });
});        
};
// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);