const fs = require('fs');

const inquirer = require('inquirer');

//path module
const path = require('path')

const Choice = require('inquirer/lib/objects/choice');

inquirer.prompt(
    [{
            message: 'Name of Your App?',
            name: 'name',
            type: 'input'
        },
        {
            message: 'Install Notes?',
            name: 'install',
            type: 'input'
        },
        {
            message: 'License?',
            name: 'license',
            type: 'list',
            choices: ["MIT", "GPL-v3", "Unlicense"],
        }, {
            message: 'Your Github UserName?',
            name: 'github',
            type: 'input'
        }

    ]
).then((res) => {
    console.log(res);

    // Generate readme file based on the answers
    const outputPath = path.join(__dirname, 'output', 'README.md');
    console.log(outputPath);

    // fs.writeFileSync()
})



// --Installation

// --Description

// --Licence

// --Github