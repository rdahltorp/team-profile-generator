//Function that builds Manager HTML
function genManager(data) {
    let managerHTML=""
    data.forEach(member => {
        if(member.getRole() === 'Manager') {
        managerHTML += 
        `<div class="card text-bg-primary mb-3 col-4" style="max-width: 18rem;">
                    <div class="card-header">MANAGER</div>
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text">Employee ID #: ${member.id}</p>
                        <p class="card-text">Office #: ${member.managerOffice}</p>
                        <p class="card-text">Email: <a href="mailto:${member.email}" class="card-link text-white">${member.email}</a></p>
                    </div>
                    </div>
                </div>
                ` 
        }
    });
    return managerHTML
}

//Function that builds Intern HTML
function genInt(data) {
    let IntHTML=""
    data.forEach(member => {
        if(member.getRole() === 'Intern') {
        IntHTML += 
        `<div class="card text-bg-warning mb-3 col-4" style="max-width: 18rem;">
                    <div class="card-header">INTERN</div>
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text">Employee ID #: ${member.id}</p>
                        <p class="card-text">School: ${member.school}</p>
                        <p class="card-text">Email: <a href="mailto:${member.email}" class="card-link text-black">${member.email}</a></p>
                    </div>
                </div>
                ` 
        }
    });
    return IntHTML
}

//Function that builds Engineer HTML
function genEng(data) {
    let engHTML=""
    data.forEach(member => {
        if(member.getRole() === 'Engineer') {
        engHTML += 
        `<div class="card text-bg-info mb-3 col-4" style="max-width: 18rem;">
                    <div class="card-header">ENGINEER</div>
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text">Employee ID #: ${member.id}</p>
                        <p class="card-text">GitHub username: <a href="https://github.com/${member.gitHub}" class="card-link text-black" target="_blank">${member.gitHub}</a></p>
                        <p class="card-text">Email: <a href="mailto:${member.email}" class="card-link text-black">${member.email}</a></p>
                    </div>
                </div>
                `
        }
    });
    return engHTML
}

//Function that builds the entire HTML
function generateHTML(data) {
    let mgrHTML = genManager(data)
    let engHTML = genEng(data)
    let intHTML = genInt(data)

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