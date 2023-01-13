// Custom Module
const Manager = require('./lib/Manager'); 
const Engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern'); 

// Native & Default Module
const fs = require('fs');

// Third Party Module
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHtml')

var team = [];

const managerQuestions = () => {
    console.log('Welcome to the Team Profile Generator! \n Please build your team.');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's ID?"
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
        }
    ]).then((managerData) => {
        const {name, id, email, officeNumber} = managerData;
        const managerObj = new Manager(name, id, email, officeNumber)
        team.push(managerObj)
        console.log(managerObj)
    })
};

const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the employee?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub username?",
            when: (input) => input.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when:(input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: "Would you like to add more team members?",
            default: false
        }
]).then(employeeData => {
    let {name, id, email, role, github, school, confirmEmployee} = employeeData;
    let employee;
    if (role === 'Engineer'){
        employee = new Engineer (name, id, email, github);
        console.log(employee);

    } else if (role === 'Intern'){
        employee = new Intern(name, id, email, school);
        console.log(employee);
    }
    team.push(employee);
    if (confirmEmployee) {
        return addEmployee(team);
    } else {
        return team;
    }
})
};

const createHtml = data => {
    fs.writeFile("./dist/index.html", data, err => {
        console.log(data),
        err ? console.log(err) : console.log("HTML has been created!")
    })
}
// createHtml()

managerQuestions()
    .then(addEmployee)
    .then(team => {
        return generateHTML(team);
    })
    .then(pageHTML => {
        return createHtml(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });
        