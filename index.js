// Custom module
const Manager = require('./lib/Manager'); 
const Engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern'); 
const generateHTML = require('./src/generateHtml');

// Native & default module
const fs = require('fs');

// Third party module
const inquirer = require('inquirer');

// Path module
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'index.html');

// Team array
const teamArr = [];

// Manager questions prompt
const managerQuestions = () => {
    console.log('Welcome to the Team Profile Generator!\n Please answer the questions and build your team.');
    return inquirer
            .prompt([
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
                const manager = new Manager(name, id, email, officeNumber)
                teamArr.push(manager)
                // console.log(manager)
            });
}

// Adds employees -engineer or intern- prompt
const addEmployee = () => {
    console.log(`
    =================================
    Please add employees to the team!
    =================================
    `);
    return inquirer
            .prompt([
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
                    // console.log(employee);

                } else if (role === 'Intern'){
                    employee = new Intern(name, id, email, school);
                    // console.log(employee);
                }
            teamArr.push(employee); 
                if (confirmEmployee) {
                    return addEmployee(teamArr);
                } else {
                    return teamArr;
                }
        })
};

// Creates the html file 
const generateHTMLFile = () => {
    fs.writeFile(outputPath, generateHTML(teamArr), 'utf-8', err => {
        if(err) throw err;
        console.log(`HTML file has been created. You can see it in index.html in the dist/ folder!`)
   });
}

// Prompts the user for information, add the information to an array, generate HTML, write the HTML to a file, and handle any errors that may occur during the process.
managerQuestions()
    .then(addEmployee)
    .then(teamArr => {
        return generateHTML(teamArr);
    })
    .then(pageHTML => {
        return generateHTMLFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });