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

## License

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

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








