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
function generateMarkdown(project, license, description, installation, usage, contribute, tests, github, email, author, licenseInfo) {
    return `
## Description

<h3 align="center">-- ${project} --</h3>

![License](https://img.shields.io/badge/Lisence-${license.split(' ').join('%20')}-orange)
   
  
  |  Table of Contents |
  | ----------- |
  | [1. Description.](#description)|
  | [2. Installation.](#installation) |
  | [3. Usage.](#usage)|
  | [4. Contributing.](#contributing)|
  | [5. Tests.](#tests)|
  | [6. Github-URL.](#github-url)|
  | [7. Email.](#email)|
  | [8. Author.](#author)|
  | [9. LicenseDetail.](#author)|



  <p align="center">${description}</p><br><hr><hr>

  ## Installation

  <p align="center">${installation}</p><br><hr><hr>

  ## Usage
  
  <p align="center">${usage}</p><br><hr><hr>

  ## Contributing

  <p align="center">${contribute}</p><br><hr><hr>

  ## Tests

  <p align="center">${tests}</p><br><hr><hr>

  ## Github-URL
  [https://github.com/${github}](https://github.com/${github})<br><hr><hr>
  
  ## Email
  <p align="center">${email}</p><br><hr><hr>

  ## Author
  <p align="center">${author}</p><br><hr><hr>

  ## LicenseDetail 
  <p align="center">${licenseInfo}</p><br><hr><hr>
`;
}

module.exports = {
    generateMarkdown,
    licenseHeadsup,
    licenseInfo,
};