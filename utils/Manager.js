//This is where the questions go for the manager & we will export the responses to generateHTML.js

const inquirer = require('inquirer')

function managerQs() {
    inquirer
        .prompt([{
            type: 'input',
            name: "managerName",
            message: "Please enter the team manager's name: "
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter team manager's ID#: "
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter team manager's email: "
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Please enter team manager's office number: "
        }
        ])
        .then((managerResponse => {
            console.log(managerResponse) //Need to update this to connect to an export
        }))
}