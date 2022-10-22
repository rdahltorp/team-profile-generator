//This page will generate the HTML doc using temp literal and write the file. 

const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

function genManager(teamMembers) {
    teamMembers.forEach(Manager => {
        return `            <div class="card text-bg-primary mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">MANAGER</div>
        <div class="card-body">
        <h5 class="card-title">${Manager.name}</h5>
        <p class="card-text">Employee ID #: ${Manager.id}</p>
        <p class="card-text">Office #: ${Manager.managerOffice}</p>
        <p class="card-text">Email: <a href="mailto:${Manager.email}" class="card-link text-white">${Manager.email}</a></p>
        </div>
    </div>`
        
    });
}

function genInt(teamMembers) {
    teamMembers.forEach(Intern => {
        return `            <div class="card text-bg-primary mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">MANAGER</div>
        <div class="card-body">
        <h5 class="card-title">${Intern.name}</h5>
        <p class="card-text">Employee ID #: ${Intern.id}</p>
        <p class="card-text">School: ${Intern.school}</p>
        <p class="card-text">Email: <a href="mailto:${Intern.email}" class="card-link text-white">${Intern.email}</a></p>
        </div>
    </div>` 
    });
}

function genEng(teamMembers) {
    teamMembers.forEach(Engineer => {
        return `            <div class="card text-bg-primary mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">MANAGER</div>
        <div class="card-body">
        <h5 class="card-title">${Engineer.name}</h5>
        <p class="card-text">Employee ID #: ${Engineer.id}</p>
        <p class="card-text">GitHub username: <a href="https://github.com/${Engineer.gitHub}" class="card-link text-black" target="_blank">${Engineer.gitHub}</a></p>
        <p class="card-text">Email: <a href="mailto:${Engineer.email}" class="card-link text-white">${Engineer.email}</a></p>
        </div>
    </div>` 
    });
}

//Function that builds the HTML
function generateTeamHTML(teamMembers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap link -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>Your Team</title>
    </head>
    <body>
        <header class="p-3 mb-2 bg-success text-white text-center">
            <h1>My Team</h1>
        </header>
        <main>
            <!-- Manager card section -->
            <div class="managerZone d-flex row justify-content-evenly">
                ${genManager(teamMembers)}
            </div>
    
            <!-- Engineer Card temp and section -->
            <div class="engZone d-flex row justify-content-evenly">
                ${genEng(teamMembers)}
            </div>
    
            <!-- Intern Card temp and section -->
            <div class="intZone d-flex row justify-content-evenly">
                ${genInt(teamMembers)}
            </div>
        </main>
    </body>
    </html>`
}

module.exports = generateTeamHTML