// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const gm = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", message: "What is your name? ", name: "name" },
  {
    type: "input",
    message: "Where are you located? ",
    name: "location",
  },
  {
    type: "input",
    message: "What is your favorite food? ",
    name: "favfood",
  },
  {
    type: "input",
    message: "Provide your LinkedIn Profile Username: ",
    name: "linkedin",
  },
  {
    type: "input",
    message: "Provide your GitHub Username: ",
    name: "github",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, gm.generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquire
    .prompt(questions)
    .then((response) => {
      const filename = `${response.name
        .toLowerCase()
        .split(" ")
        .join(" ")}.html`;
      writeToFile(filename, data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
