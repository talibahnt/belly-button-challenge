// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the metadata field
    var metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    var result = metadata.find(metadata => metadata.id === parseInt(sample));

    console.log(result);

    // Use d3 to select the panel with id of `#sample-metadata`
    const metadataSamplePanel = d3.select("#sample-metadata");

    // Clear any existing metadata
    metadataSamplePanel.html("");

    // Append key-value pairs to the panel
    for (var key in result) {
      metadataSamplePanel.append("h6").text(`${key.toUpperCase()}: ${result[key]}`);
    }
  });
}

// Function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the samples field
    var samples = data.samples;

    // Filter the samples for the object with the desired sample number
    var result = samples.find(sampleObj => sampleObj.id === sample);

    // Get the otu_ids, otu_labels, and sample_values
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;

    // Build a Bubble Chart
    var bubblechartLayout = {
      title: "Bacteria Cultures Per Sample",
      margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Number of Bacteria" },
      margin: { t: 30 }
    };
    var bubblechartData = [
      {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Red"
        }
      }
    ];

    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubblechartData, bubblechartLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    var yticks = otu_ids.map(otuID => `OTU ${otuID}`);

    // Build a Bar Chart
    var barchartData = [
      {
        y: yticks.slice(0, 10).reverse(),
        x: sample_values.slice(0, 10).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h",
      }
    ];

    var barchartLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 },
      xaxis: { title: "Number of Bacteria" }
    };

    // Render the Bar Chart
    Plotly.newPlot("bar", barchartData, barchartLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the names field
    var sample_names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    var selector = d3.select("#selDataset");

    // Populate the select options
    sample_names.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Get the first sample from the list
    var firstSample = sample_names[0];

    // Build initial charts and metadata panel
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();

