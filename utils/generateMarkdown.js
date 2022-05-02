// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "Apache") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else if (license === "IBM") {
    return "https://img.shields.io/badge/License-IPL_1.0-blue.svg";
  }
  return "";
}

// DONE: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "IBM") {
    return "https://opensource.org/licenses/IPL-1.0";
  }
  return "";
}

// DONE: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = "";
  license.forEach((item) => {
    section += `
[![License: ${item}](${renderLicenseBadge(item)})](${renderLicenseLink(item)})

`;
  });
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

- What was your motivation?
- Why did you build this project? 
- What problem does it solve?
- What did you learn?

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installInstructions}

## Usage

${data.usageInfo}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.testInstructions}

## Questions

If there are any questions on the work provided in this repository please use the following contact information: 

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}`;
}

module.exports = generateMarkdown;
