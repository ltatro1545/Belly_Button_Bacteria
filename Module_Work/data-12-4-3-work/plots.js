function init() {
    // selector assigned to the dropdown menu
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            // appends a row for each option
            // each option is assigned text named after iterator 'sample'
            // adds a value tag where the value is equal to the iterator 'sample'
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
    })
};

// call the function
init();

function optionChanged(newSample) {
    // call two seperate functions to handle the demographic and volunteer info
    buildMetadata(newSample);
    buildCharts(newSample);
};

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        // filter for matching sample id
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        // results are filtered as an array, so we must access first index to select the id
        var result = resultArray[0];
        console.log(result);

        // select Demographic Info panel
        var PANEL = d3.select("#sample-metadata");
        // clear current contents, then append a heading and location of the volunteer
        PANEL.html("");

        // add demographic info from the result object
        Object.entries(result).forEach(([key, value]) =>
        {PANEL.append("h6").text(key + ': ' + value);});
    });
}