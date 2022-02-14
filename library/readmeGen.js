let licenseInfo = ""

// TODO: Function that returns the license heads up of README
// If there is no license, return an empty string
function licenseHeadsup(license) {
    switch (license) {
        case "MIT":
            licenseInfo = "This project uses the MIT license."
            break;
        case "MPL 2.0":
            licenseInfo = "This project uses the Mozilla Public license MPL 2.0."
            break;
        case "WTFPL":
            licenseInfo = "This project uses The Do What the Fuck You Want to Public License."
            break;
        case "None":
            licenseInfo = "There is no license attached to this project"
            break;
    }
    return licenseInfo;
}

// TODO: Function generates markdown for README
function generateMarkdown(project, license, description, installation, usage, contribute, tests, github, email, author) {
    return `
## Description

<h3 align="center">-- ${project} --</h3>

![License](https://img.shields.io/badge/Lisence-${license}-orange)
   
  
  |  Table of Contents |
  | ----------- |
  | [1. Description.](#description)|
  | [2. Installation.](#installation) |
  | [3. Usage.](#usage)|
  | [4. License.](#licenses)|
  | [5. Contributing.](#contributing)|
  | [6. Tests.](#tests)|
  | [7. Questions.](#questions)|
    
  

  <p align="center">${description}</p>

  ## Installation

  <p align="center">${installation}</p>

  ## Usage
  
  <p align="center">${usage}</p>

  ## License
  
  <p align="center">${license}</p>

  ## Contributing

  <p align="center">${contribute}</p>

  ## Tests

  <p align="center">${tests}</p>

  ## Questions
  
  ### 7.1 Webpage URL
  [Github-URL](https://github.com/${github})
  
  ### 7.2 Email
  <p align="center">${email}</p>
  ### End
  <p align="center">${author}</p>
`;
}

module.exports = {
    generateMarkdown,
    licenseHeadsup,
    licenseInfo,
};