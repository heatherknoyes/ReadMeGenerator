// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");

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
  const template = `
<!DOCTYPE html>
<html lang=“en”>
<head>
  <meta charset=“UTF-8">
  <meta http-equiv=“X-UA-Compatible” content=“IE=edge”>
  <meta name=“viewport” content=“width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Node Mini Project</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${response.name}</h1>
    <p class="lead">I am from ${response.location}</p>
    <h3>Contact Me</h3>
    <ul class="list-group">
      <li class="list-group-item">My favorite food is: ${response.favfood}</li>
      <li class="list-group-item">My GitHub is: <a href="https://github.com/${response.github}" target="_blank" class="github">GitHub</a></li>
      <li class="list-group-item">LinkedIn: <a href="https://www.linkedin.com/in/${response.linkedin}" target="_blank" class="linkedin">${response.linkedin}</a></li>
    </ul>
  </div>

  <script src=“index.js”></script>
</body>
</html>`;

  fs.writeFile(filename, template, (err) =>
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
