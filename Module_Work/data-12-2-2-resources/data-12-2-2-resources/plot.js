// Display the data
//console.log(cityGrowths);

// Sort the list from largest to smallest growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

// SLice to take only the top 5 cities
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// Create a variable that holds top 5 city names
var topFiveCityNames = topFiveCities.map(city => city.City);
console.log(topFiveCityNames);

// Create a variable that holds top 5 growth values
// ####### NEED TO PARSE INT AS CURRENT VALUE IS STRING
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths);

// Plot city vs growth
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title:"City"},
    yaxis: {title:"Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot", data, layout);