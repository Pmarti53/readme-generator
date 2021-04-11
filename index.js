// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of this project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description"
    },
    {
        type: "input",
        name: "instructions",
        message: "Please enter usage instructions:"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions:"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list your contributors"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(fileName, data)

    let markup = `


# ${data.title}


## Description
${data.description}

## Instructions
${data.instructions}

## Installation
${data.installation}

## Github
${data.github}

## Contributors
${data.contributors}

`

    fs.writeFileSync('./README.md', markup)
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then(response => {
            writeToFile(response.title, response)
            console.log(response);
        });
};

// Function call to initialize app
init();








