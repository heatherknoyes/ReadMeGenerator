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
  if (license) {
    return `[![License: ${license}](${renderLicenseBadge(
      license
    )})](${renderLicenseLink(license)}) `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readme = `# ${data.title}

  ${renderLicenseSection(data.license)}
  
  ## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Run the following command in order to be able to install the package for this code:

    ${data.installInstructions}

## Usage

To run this code from the parent directory use the following command:

    ${data.usageInfo}
    
## License
    
This project is covered under the following license: ${renderLicenseSection(
    data.license
  )}

## Contributing

${data.contribution}

## Tests

Run the following command to initiate tests on the code:

    ${data.testInstructions}
    
## Questions

If there are any questions on the work provided in this repository please use the following contact information: 

GitHub: [${data.github}](https://github.com/${data.github})
    
Email: ${data.email}`;

  return readme;
}

module.exports = generateMarkdown;
