const managerSection = () => {
    return `<section class="card">
    <h1>Manager</h1>
    <ul>
        <li>Name: ${manager.name}</li>
        <li>ID: ${manager.id}</li>
        <li>Email: ${manager.email}</li>
        <li>Office Number: ${manager.officeNumber}</li>
    </ul>
</section>`
}

const engineerSection = () => {
    return `<section class="card">
    <h1>Manager</h1>
    <ul>
        <li>Name: ${engineer.name}</li>
        <li>ID: ${engineer.id}</li>
        <li>Email: ${engineer.email}</li>
        <li>Office Number: ${engineer.github}</li>
    </ul>
</section>`
}

const internSection = () => {
    return `<section class="card">
    <h1>Manager</h1>
    <ul>
        <li>Name: ${intern.name}</li>
        <li>ID: ${intern.id}</li>
        <li>Email: ${intern.email}</li>
        <li>Office Number: ${intern.school}</li>
    </ul>
</section>`
}

const compile = () => {
    return `<main>
    ${managerSection()}
    ${engineerSection()}
    ${internSection()}
</main>`
}

const baseHtml = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css" />
        <title>My Team</title>
    </head>
    <body>
        ${compile()}
    </body>
    </html>`
}

export default baseHtml()