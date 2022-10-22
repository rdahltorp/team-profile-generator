/* Psudo code outline 

Step 1: Init + Manager questions
- Once app fires, trigger the questions on the Manager.js page. 
- Once answered, responses are pulled and added to a generateHTML.js file.

Step 2: Menu of additional options
- Once manager questions complete render a menu with 3 options: 
---1) Add engineer 
---2) Add intern
---3) Finish team/exit

Step 3a: "Add engineer" selected
- If first option is selected, fire the questions on Engineer.js page. 
- Once answered, responses are pulled and added to the generateHTML.js file.
- Return to menu (step 2)

Step 3b: "Add intern" selected
- If second option is selected, fire the questions on Intern.js page. 
- Once answered, responses are pulled and added to the generateHTML.js file.
- Return to menu (step 2)

Step 3c: "Finish team/exit" selected
- If third option is selected, log a message saying "team roster complete"; fire generateHTML.js file.
- End application.

///////////////////////////////

Page layout: 
-index.js 
---Holds the main code and navigation, along with the menu and exit code

-Manager.js, Intern.js, Engineer.js 
---Holds the questions for each of the specific roles.
---Exports to generateHTML

-generateHTML.js
---Holds the HTML code that will be created in temp literal.
---Writes the new file. 

/////////////////////////////

Remaining questions 
-What does the "employee.test.js" do that was recommened?
-When installing Jest, do we need to install as dependancy or dev dependancy?

*/

//PACKAGES
const Manager = require('./utils/Manager')
const Engineer = require('./utils/Engineer')
const Intern = require('./utils/Intern')
const fs = require('fs')
const inquirer = require('inquirer')


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
            console.log(teamMembers);
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
            console.log(teamMembers);
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
                console.log('This is your final team:');
                console.log(teamMembers);
                //NEED TO UPDATE THIS TO WRITE A FILE USING THE GENERATEHTML.JS
            }
        })
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
        console.log(teamMembers);
        addTeamMember()
    }))
