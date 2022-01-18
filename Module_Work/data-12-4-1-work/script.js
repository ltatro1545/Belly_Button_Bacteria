// create an event listener for the HTML body
d3.selectAll("body").on("change", updatePage);

function updatePage() {
    // creates an event listener that triggers every time a change to the HTML body takes place
    var dropdownMenu = d3.selectAll("#selectOption").node();
    // dropdownMenuID will be "selectOption", the id of the HTML "<select/>"
    var dropdownMenuID = dropdownMenu.id;
    // selectedOption will return the "value=" from the HTML code
    var selectedOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(selectedOption);
};