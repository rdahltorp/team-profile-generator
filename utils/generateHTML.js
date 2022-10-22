//This page will generate the HTML doc using temp literal and write the file. 

const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')



function genManager(data) {
    // data.forEach(data => {
    //     if(data.getRole() === 'Manager') {
    //         return `            <div class="card text-bg-primary mb-3 col-4" style="max-width: 18rem;">
    //         <div class="card-header">MANAGER</div>
    //         <div class="card-body">
    //         <h5 class="card-title">${data.name}</h5>
    //         <p class="card-text">Employee ID #: ${data.id}</p>
    //         <p class="card-text">Office #: ${data.managerOffice}</p>
    //         <p class="card-text">Email: <a href="mailto:${data.email}" class="card-link text-white">${data.email}</a></p>
    //         </div>
    //     </div>`
    //     } else {
    //         return ``
    //     }        
    // });

    let managerHTML=""
    data.forEach(member => {
        if(member.getRole() === 'Manager') {
        managerHTML += `            
        <div class="card text-bg-primary mb-3 col-4" style="max-width: 18rem;">
            <div class="card-header">MANAGER</div>
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">Employee ID #: ${member.id}</p>
                <p class="card-text">Office #: ${member.managerOffice}</p>
                <p class="card-text">Email: <a href="mailto:${member.email}" class="card-link text-white">${member.email}</a></p>
            </div>
            </div>
        </div>` 
        }
    });
    return managerHTML
}

function genInt(data) {
    // data.forEach(member => {
    //     if(member.getRole() === 'Intern') {
    //     return `            <div class="card text-bg-primary mb-3 col-4" style="max-width: 18rem;">
    //     <div class="card-header">INTERN</div>
    //     <div class="card-body">
    //     <h5 class="card-title">${member.name}</h5>
    //     <p class="card-text">Employee ID #: ${member.id}</p>
    //     <p class="card-text">School: ${member.school}</p>
    //     <p class="card-text">Email: <a href="mailto:${member.email}" class="card-link text-white">${member.email}</a></p>
    //     </div>
    // </div>` 
    //     } else {
    //         return ``
    //     }        
    // });

    let IntHTML=""
    data.forEach(member => {
        if(member.getRole() === 'Intern') {
        IntHTML += `            
        <div class="card text-bg-warning mb-3 col-4" style="max-width: 18rem;">
            <div class="card-header">INTERN</div>
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">Employee ID #: ${member.id}</p>
                <p class="card-text">School: ${member.school}</p>
                <p class="card-text">Email: <a href="mailto:${member.email}" class="card-link text-white">${member.email}</a></p>
            </div>
            </div>
        </div>` 
        }
    });
    return IntHTML
}

function genEng(data) {
    // data.forEach(member => {
    //     if(member.getRole === 'Engineer') {
    //     return `            <div class="card text-bg-primary mb-3 col-4" style="max-width: 18rem;">
    //     <div class="card-header">MANAGER</div>
    //     <div class="card-body">
    //     <h5 class="card-title">${member.name}</h5>
    //     <p class="card-text">Employee ID #: ${member.id}</p>
    //     <p class="card-text">GitHub username: <a href="https://github.com/${member.gitHub}" class="card-link text-black" target="_blank">${member.gitHub}</a></p>
    //     <p class="card-text">Email: <a href="mailto:${member.email}" class="card-link text-white">${member.email}</a></p>
    //     </div>
    // </div>` 
    //     } else {
    //         return ``
    //     }        
    // });

    let engHTML=""
    data.forEach(member => {
        if(member.getRole() === 'Engineer') {
        engHTML += `            
        <div class="card text-bg-info mb-3 col-4" style="max-width: 18rem;">
            <div class="card-header">ENGINEER</div>
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">Employee ID #: ${member.id}</p>
                <p class="card-text">GitHub username: <a href="https://github.com/${member.gitHub}" class="card-link text-black" target="_blank">${member.gitHub}</a></p>
                <p class="card-text">Email: <a href="mailto:${member.email}" class="card-link text-white">${member.email}</a></p>
            </div>
            </div>
        </div>` 
        }
    });
    return engHTML

}

//Function that builds the HTML
function generateHTML(data) {
    let mgrHTML = genManager(data)
    let engHTML = genEng(data)
    let intHTML = genInt(data)


    //console.log(`Hello my name is ${data[0].name}, my office number is ${data[0].managerOffice} and I am the ${data[0].getRole}`);

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
                ${mgrHTML}
            </div>
    
            <!-- Engineer Card temp and section -->
            <div class="engZone d-flex row justify-content-evenly">
                ${engHTML}
            </div>
    
            <!-- Intern Card temp and section -->
            <div class="intZone d-flex row justify-content-evenly">
                ${intHTML}
            </div>
        </main>
    </body>
    </html>`
}

module.exports = generateHTML