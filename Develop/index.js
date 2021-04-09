// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");

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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    
    inquirer
    .prompt(questions)
 };

// Function call to initialize app
init();
