//This is where the constructor will go for the Engineer class
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    };
    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;


//This is where the questions go for the engineer & we will export the responses to generateHTML.js

const inquirer = require('inquirer')

//POTENTIAL ISSUE: If they add more than one engineer, then the tags will get confused in the generateHTML.js. Need to figure out a way to give each engineer a new name so they can add multiple engineers

function engineerQs() {
    inquirer
        .prompt([{
            type: 'input',
            name: "engName",
            message: "Please enter the engineer's name: "
        },
        {
            type: 'input',
            name: 'engID',
            message: "Please enter the engineer's ID#: "
        },
        {
            type: 'input',
            name: 'engEmail',
            message: "Please enter the engineer's email: "
        },
        {
            type: 'input',
            name: 'engGithub',
            message: "Please enter the engineer's GitHub username: "
        }
        ])
        .then((engineerResponse => {
            console.log(engineerResponse) //Need to update this to connect to an export
        }))
}