# belly-button-challenge
<img width="1375" height="998" alt="image" src="https://github.com/user-attachments/assets/91cb76f6-453e-4f47-a596-1667de8a3300" />
https://talibahnt.github.io/belly-button-challenge/



The code is in the startercode file, then go to static, then js. Then go to app.js to find the code.

Belly Button Challenge
Project Overview
The Belly Button Biodiversity project is an interactive web application that explores a dataset cataloging the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (operational taxonomic units, or OTUs) are present in more than 70% of people, while the rest are relatively rare.

This dashboard allows users to dynamically explore the demographic metadata and microbial profiles of various test subjects.

##Live Application
Check out the live dashboard here:

👉 Belly Button Biodiversity Dashboard: https://talibahnt.github.io/belly-button-challenge/

##Repository Structure
The core codebase is organized as follows:

Plaintext
belly-button-challenge/
│
├── startercode/
│   ├── static/
│   │   └── js/
│   │       └── app.js   <-- Core JavaScript logic & Plotly charts
│   └── index.html       <-- Main dashboard HTML page
└── README.md

index.html: The main layout page that structures the dashboard using Bootstrap.

app.js: Located under startercode/static/js/, this script handles data fetching, builds the interactive charts, and manages the dashboard's responsive updates.

##Features & Visualizations
Upon selecting a subject ID from the dropdown menu, the dashboard dynamically updates to display:

Demographic Info Panel: Shows the selected individual's metadata (ID, ethnicity, gender, age, location, bbtype, and wfreq).

Horizontal Bar Chart: Displays the top 10 OTUs found in that individual, utilizing sample_values as values, otu_ids as labels, and otu_labels as hover text.

Bubble Chart: Visualizes every microbial sample found in the individual.

otu_ids are mapped to the x-axis and marker colors.

sample_values are mapped to the y-axis and marker sizes.

otu_labels provide the hover text values.

##Technologies Used
JavaScript (ES6+)

D3.js (Data-Driven Documents for data fetching and DOM manipulation)

Plotly.js (For rendering interactive charts)

HTML5 & CSS3

Bootstrap 3 (For responsive dashboard layout)

GitHub Pages (For project deployment)

##How to Run the Project Locally
Because the project fetches data via an external API/JSON file using D3, running the index.html file directly from your local file system may trigger CORS restrictions in some browsers.

To run it locally:

Clone the repository to your machine.

Open the project folder in an editor like VS Code.

Use a local development server extension (like Live Server in VS Code) to launch index.html.
