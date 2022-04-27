// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;

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
}

module.exports = generateMarkdown;
