const Manager = require('./lib/Manager'); // custom module
const Engineer = require('./lib/Engineer'); // custom module
const Intern = require('./lib/Intern'); // custom module

const inquirer = require('inquirer'); //third party module
const fs = require('fs'); // native module & default module

var team = [];

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        },
    ]).then((res) => {
        const {name, id, email, officeNumber} = res;
        const manager = new Manager(name, id, email, officeNumber)
        team.push(manager)
        console.log(team)
    })
}
managerQuestions()

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email?"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is your engineer's GitHub username?"
        },
    ]).then((res) => {
        const {name, id, email, gitHub} = res;
        const engineer = new Engineer(name, id, email, gitHub)
        team.push(engineer)
        console.log(team)
    })
}
engineerQuestions()

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'interName',
            message: "What is the your intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the your intern's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the your intern's email?"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the your intern's school?"
        },
    ]).then((res) => {
        const {name, id, email, school} = res;
        const intern = new Intern(name, id, email, school)
        team.push(intern)
        console.log(team)
    })
}
internQuestions()

const createHtml = data => {
    fs.writeFile("./dist/index.html", data, err => {
        console.log(data),
        err ? console.log(err) : console.log("HTML has been created!")
    })
}
createHtml()