// WHEN READING EXTERNAL CSV OR JSON FILE YOU MUST RUN A SERVER
// IN THE TERMINAL USING "PYTHON -M HTTP.SERVER", AND THEN OPEN THE BROWSER
// IN THE CORRECT LOCALHOST ADDRESS (likely 8000)

// reads and console logs the JSON data
d3.json("samples.json").then(function(data){
    console.log(data);
});

// ######### extract only the "wfreq" for each person in the array
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

// ######### delete null vals from sorted wfreq array
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=
// null);
//     console.log(filteredWfreq);
// });

// print all the metadata for the first person in the array
d3.json("samples.json").then(function(data){
    // pulls all info of subject at first index, but does not allow access to each piece of information
    firstPerson = data.metadata[0];
    console.log(firstPerson);
    // parses data so you can work with each key and value
    Object.entries(firstPerson).forEach(([key, value]) =>
        {console.log(key + ': ' + value);});
});
