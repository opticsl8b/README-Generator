// TODO: Introduce packages 
const fs = require('fs');
const inquirer = require('inquirer');
const readmeGen = require('./library/readmeGen')


const questions = [{
        type: 'input',
        name: 'project',
        message: 'Name of this Project?'
    }, {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ["MIT", "MPL 2.0", "ODbL", "WTFPL", "None"]
    }, {
        type: 'input',
        name: 'description',
        message: 'Description of the project',
    }, {
        type: 'input',
        name: 'installation',
        message: 'Description of the installation instructions?'
    }, {
        type: 'input',
        name: 'usage',
        message: 'How to use the application?'
    }, {
        type: 'input',
        name: 'contribute',
        message: 'How to contribute to the project?'
    }, {
        type: 'input',
        name: 'tests',
        message: 'How do you test the project?',
    }, {
        type: 'input',
        name: 'github',
        message: 'GitHub username?',
    }, {
        type: 'input',
        name: 'email',
        message: "Your email address?",
    }, {
        type: 'input',
        name: 'author',
        message: 'Author of this Project?',
    },

];

// TODO: Function to write README file
function toWrite(answers) {
    readmeGen.licenseHeadsup(answers.license);
    fs.writeFile('./output/ReadMe.md', readmeGen.generateMarkdown(answers.project, answers.license, answers.description, answers.installation, answers.usage, answers.contribute, answers.tests, answers.github, answers.email, answers.author, readmeGen.licenseHeadsup()),
        (error) =>
        error ? console.error(error) : console.log('\x1b[32m', 'ReadMe file has been create successfully'))
}

// TODO: Function to initialize 
function initialize() {
    inquirer.prompt(questions).then(toWrite)
}

initialize();