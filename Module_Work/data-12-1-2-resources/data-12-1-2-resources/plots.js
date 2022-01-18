Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Bar chart for luncheon
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

// Bar chart #2
Plotly.newPlot("plotArea2", [trace], layout);

// Bar chart #3
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};
var layout = {
    title: "Beverage Orders (%)",
    xaxis: {title: "Beverage Types"},
    yaxis: {title: "Percent"}
};
Plotly.newPlot("plotArea3", [trace], layout);

// ####################################################
// Module 12.1.4 "Create a Pie Chart"

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};
var data = [trace];
var layout = {
    title: "'Pie' Chart",
};
Plotly.newPlot("plotArea4", data, layout);

// Skill drill CREATE SCATTERPLOT WITH PLOTLY DOCUMENTATION
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: "scatter"
};

var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
};
  
var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
};

var layout = {
    title: "SKILL DRILL",
};

var data = [trace1, trace2, trace3];
Plotly.newPlot("plotArea5", data, layout);

// ########################################################
// Module 12.2.1 Functional JavaScript
//The map()method in JavaScript applies a transformation to each element in an array
//Like a for loop, it can perform an operation to every element of an array.

var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// Extract city property from array of objects with map function
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// Map() method is more abstract than a 'for' loop; there is no defined start and end point.

// filter method
// example to get all even numbers
let numbers = [13, 22, 36, 54, 55];
let evenNumbers = numbers.filter(number => number % 2 == 0);

// example to get words that start with letter "N"
const countries = ['Norway', 'Sweden',  'Denmark', 'New Zealand'];
const startsWithN = countries.filter((country) => country.startsWith("N"));

// example of applying sort method in ascending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);

// slice method | .slice(0,2) denotes slice begins at index 0 and ceases at the second, therefore returns index 0 and 1
// to slice to end of array, leave out 2nd argument as such: (5, )
