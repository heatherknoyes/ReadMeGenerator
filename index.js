// DONE: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const confirmAnswerValidator = (answer) => {
  if (answer !== "") {
    return true;
  }
  return "Please enter at least one character.";
};

// DONE: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project title: ",
    name: "title",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Description of project: ",
    name: "description",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Installation instructions: ",
    name: "installInstructions",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Usage information: ",
    name: "usageInfo",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Contribution guidelines: ",
    name: "contribution",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Test instructions: ",
    name: "testInstructions",
    validate: confirmAnswerValidator,
  },
  {
    type: "list",
    message: "Pick a license: ",
    name: "license",
    choices: ["MIT", "Apache", "IBM"],
  },
  {
    type: "input",
    message: "GitHub Username: ",
    name: "github",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Email address: ",
    name: "email",
    validate: confirmAnswerValidator,
  },
];

// DONE: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// DONE: Create a function to initialize app
function init() {
  inquire
    .prompt(questions)
    .then((response) => {
      const filename = "README.md";
      writeToFile(filename, response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
