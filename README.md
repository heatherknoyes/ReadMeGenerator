# ReadMeGenerator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The motivation for this project was to create a command line program that would dynamically generate a standard README.md file based on user inputs. The two Javascript libraries used to achieve this were inquirer and fs. By utilizing Javascript alone a quick file generator was able to be created that utilized new concepts like command line user interaction and file creation. I learned how to effectively use template literals to make a simple user experience. The thing I am most proud of with this project was that I originally had the ability for multiple licenses to be selected and badges to be shown; however, I determined that only one was likely better and that in the future I would be able to apply that same logic to apply multiple other badges. With the completion of this project I fulfilled the following user story and acceptance criteria.

[Video of Deployed Application](https://drive.google.com/file/d/19Cqaq639g5iuhIsND2iHwaZdJy5CXtCr/view)

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Run the following command in order to be able to install the package for this code:

    npm install

## Usage

To run this code from the parent directory use the following command:

    node index.js

## License

This project is covered under the following license: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing

To contribute to this project please clone the repo locally and commit your code using a separate branch. Please have unit tests for your code and make sure all tests pass using the test command before opening a pull request.

## Tests

Run the following command to initiate tests on the code:

    npm run test

## Questions

If there are any questions on the work provided in this repository please use the following contact information:

GitHub: [heatherknoyes](https://github.com/heatherknoyes)

Email: heatherknoyes@gmail.com
