/* Psudo code outline 

Remaining questions / things to do
-Need to write tests
-When installing Jest, do we need to install as dependancy or dev dependancy?
-When I try to log the info from 

*/

//PACKAGES
const Manager = require('./utils/Manager')
const Engineer = require('./utils/Engineer')
const Intern = require('./utils/Intern')
const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./utils/generateHTML')


//ADDITIONAL FUNCTIONS

//Engineer question set function
function engineerQs() {
    inquirer
        .prompt([{
            type: 'input',
            name: "name",
            message: "Please enter the engineer's name: "
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's ID#: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email: "
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please enter the engineer's GitHub username: "
        }
        ])
        .then((engineerResponse => {
            let newEng = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.gitHub);
            teamMembers.push(newEng);
            addTeamMember();       
        }))
}

//Intern question set function
function internQs() {
    inquirer
        .prompt([{
            type: 'input',
            name: "name",
            message: "Please enter the intern's name: "
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the intern's ID#: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email: "
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school: "
        }
        ])
        .then((internResponse => {
            let newIntern = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school);
            teamMembers.push(newIntern);
            addTeamMember();
        }))
}

//Add another team member or stop function
function addTeamMember() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'addToTeam',
            choices: ['Add engineer', 'Add intern', 'Generate team'],
            message: 'Would you like to add another team member or generate your team?'
        }])
        .then(addToTeam => {
            if(addToTeam.addToTeam === 'Add engineer') {
                engineerQs()
            } else if(addToTeam.addToTeam === 'Add intern') {
                internQs()
            } else if (addToTeam.addToTeam === 'Generate team'){
                //console.log(teamMembers);
                renderHTML()
            }
        })
}

//Generates HTML
function renderHTML() {
    let generateMyTeam = generateHTML(teamMembers)
    console.log(generateMyTeam);
    //ISSUE I AM FACING - THE CODE ABOVE RETURNS UNDEFINED FOR EACH EMPLOYEE SECTION AND UNSURE WHY

    //THE CODE BELOW WRITES A NEW DOC> TESTING CODE FIRST IN LOG BEFORE IMPLEMENTING
    // fs.writeFile('generatedTeam.html', generateMyTeam, (err) =>
    // err ? console.log(err) : console.log('Success! Your team HTML page has been created.'))
}


//ARRAY OF TEAM MEMBERS
let teamMembers = [];


//INITIAL MANAGER QUESTION SET & START OF PROGRAM
inquirer
    .prompt([{
        type: 'input',
        name: "name",
        message: "Please enter the team manager's name: "
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter team manager's ID#: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter team manager's email: "
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "Please enter team manager's office number: "
    }])
    .then((managerResponse => {
        let teamManager = new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.managerOffice)
        teamMembers.push(teamManager)
        addTeamMember()
    }))
