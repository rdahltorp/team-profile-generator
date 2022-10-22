//This is where the constructor will go for the Engineer class
const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    };
    getSchool() {
        return this.School;
    };
    getRole() {
        return 'Intern';
    };

}

module.exports = Intern

//This is where the questions go for the intern & we will export the responses to generateHTML.js

const inquirer = require('inquirer')

//POTENTIAL ISSUE: If they add more than one intern, then the tags will get confused in the generateHTML.js. Need to figure out a way to give each intern a new name so they can add multiple interns

function internQs() {
    inquirer
        .prompt([{
            type: 'input',
            name: "intName",
            message: "Please enter the intern's name: "
        },
        {
            type: 'input',
            name: 'intID',
            message: "Please enter the intern's ID#: "
        },
        {
            type: 'input',
            name: 'intEmail',
            message: "Please enter the intern's email: "
        },
        {
            type: 'input',
            name: 'intSchool',
            message: "Please enter the intern's school: "
        }
        ])
        .then((internResponse => {
            console.log(internResponse) //Need to update this to connect to an export
        }))
}