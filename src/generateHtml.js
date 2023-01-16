const generateTeam = team => {

    const managerSection = manager => {
        return `<section class="card">
        <h1>Manager</h1>
        <ul>
            <li>Name: ${manager.name}</li>
            <li>ID: ${manager.id}</li>
            <li>Email: ${manager.email}</li>
            <li>Office Number: ${manager.officeNumber}</li>
        </ul>
    </section>`;
    };

    const engineerSection = engineer => {
        return `<section class="card">
        <h1>Engineer</h1>
        <ul>
            <li>Name: ${engineer.name}</li>
            <li>ID: ${engineer.id}</li>
            <li>Email: ${engineer.email}</li>
            <li>GitHub: ${engineer.github}</li>
        </ul>
    </section>`;
    };

    const internSection = intern => {
        return `<section class="card">
        <h1>Intern</h1>
        <ul>
            <li>Name: ${intern.name}</li>
            <li>ID: ${intern.id}</li>
            <li>Email: ${intern.email}</li>
            <li>School: ${intern.school}</li>
        </ul>
    </section>`;
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
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
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