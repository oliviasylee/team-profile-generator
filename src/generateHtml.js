const generateTeam = team => {

    const managerSection = manager => {
        return `
    <div class="container bootstrap snippets bootdeys">
        <div class="row card-boxes">
            <div class="col-md-3 col-sm-6 content-card">
                <div class="card-big-shadow">
                    <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                    <div class="content">
                        <h6 class="category"><i class="fa-solid fa-people-roof"></i> ${manager.getRole()}</h6>
                        <h4 class="title">${manager.name}</h4>

                    <p class="description">  
                    <i class="fa-regular fa-id-card"></i> ID #${manager.id} <br>
                    <i class="fa-regular fa-envelope"></i> <a href="mailto:${manager.email}" target="_blank">${manager.email}</a> <br>
                    <i class="fa-regular fa-building"></i> Office #${manager.officeNumber}
                    </p>
                </div>
            </div>
        </div>
    </div>`;
    };

    const engineerSection = engineer => {
        return `
            <div class="col-md-3 col-sm-6 content-card">
                <div class="card-big-shadow">
                    <div class="card card-just-text" data-background="color" data-color="green" data-radius="none">
                        <div class="content">
                        <h6 class="category"><i class="fa-solid fa-laptop"></i> ${engineer.getRole()}</h6>
                        <h4 class="title">${engineer.name}</h4>

                        <p class="description">  
                        <i class="fa-regular fa-id-card"></i> ID #${engineer.id} <br>
                        <i class="fa-regular fa-envelope"></i> <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a> <br>
                        <i class="fa-brands fa-github"></i> <a href="https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>`;
    };

    const internSection = intern => {
        return `
            <div class="col-md-3 col-sm-6 content-card">
                <div class="card-big-shadow">
                <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                <div class="content">
                    <h6 class="category"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h6>
                    <h4 class="title">${intern.name}</h4>

                    <p class="description">  
                    <i class="fa-regular fa-id-card"></i> ID #${intern.id} <br>
                    <i class="fa-regular fa-envelope"></i> <a href="mailto:${intern.email}" target="_blank">${intern.email}</a> <br>
                    <i class="fa-solid fa-graduation-cap"></i> ${intern.school}</a>
                    </p>
                </div>
            </div> 
         </div>
    </div>
  </div>
</div>
    `;
    };

    const html  = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => managerSection(manager))
    );
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => engineerSection(engineer)).join("")
    );
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => internSection(intern)).join("")
    );
    
    return html.join("");
}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/4f46042201.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="./dist/style.css"/>
</head>

<body>
    <header class="jumbotron">
        <h1 class="display-3">My Team</h1>
        <p class="lead">A simple Node.js command-line app for generating the team's basic info</p>
    </header>

    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};