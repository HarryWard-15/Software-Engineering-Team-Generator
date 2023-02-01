// initializing all of the required files for the code
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const generateHTML = require('./src/HTMLgenerator.js');

// initializing the dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// initializing the array of all the team members
teamMembersArray = [];


function startApp () {

    // first asking for the details of the manager
    createManager();

    // asking which employee would are adding, and then calling the relevant function to ask more information
    function makeTeam () {
        inquirer.prompt(
            [
    
                {
                    type: "list",
                    message: "What type of employee would you like to add to your team?",
                    name: "addTeamMember",
                    choices: ["Engineer", "Intern", "My Team is Complete"]
                }
            ]) .then(function (res) {
                    switch (res.addTeamMember) {
                        case "Engineer":
                            createEngineer();
                            break;
                        case "Intern":
                            createIntern();
                            break;
                        default:
                            buildHTML();
                    }
            });
    }

    //using inquirer to ask for the relavent information for the manager card
    function createManager () {
        inquirer.prompt(
            [
                {
                    type: "input",
                    message: "What is the name of the manager?",
                    name: "managerName"
                },
                {
                    type: "input",
                    message: "What is the manager's employee ID?",
                    name: "managerId"
                },
                {
                    type: "input",
                    message: "What is the manager's email address?",
                    name: "managerEmail"
                },
                {
                    type: "input",
                    message: "What is the manager's offcie number?",
                    name: "managerOffice"
                },
            ])
            .then (response => {
                const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
                teamMembersArray.push(manager);
                makeTeam();
            }
        );
    }

    //using inquirer to ask for the relavent information for the engineer card
    function createEngineer () {
        inquirer.prompt(
            [
                {
                    type: "input",
                    message: "What is the name of the engineer?",
                    name: "engineerName"
                },
                {
                    type: "input",
                    message: "What is the engineer's employee ID?",
                    name: "engineerId"
                },
                {
                    type: "input",
                    message: "What is the engineer's email address?",
                    name: "engineerEmail"
                },
                {
                    type: "input",
                    message: "What is the engineer's GitHub?",
                    name: "engineerGitHub"
                },
            ])
            .then (response => {
                const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub);
                teamMembersArray.push(engineer);
                makeTeam();
            }
        );
    }

    //using inquirer to ask for the relavent information for the intern card
    function createIntern () {
        inquirer.prompt(
            [
                {
                    type: "input",
                    message: "What is the name of the intern?",
                    name: "internName"
                },
                {
                    type: "input",
                    message: "What is the intern's employee ID?",
                    name: "internId"
                },
                {
                    type: "input",
                    message: "What is the intern's email address?",
                    name: "internEmail"
                },
                {
                    type: "input",
                    message: "What school is the intern from?",
                    name: "internSchool"
                },
            ])
            .then (response => {
                const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
                teamMembersArray.push(intern);
                makeTeam();
            }
        );
    }
    
    //this function is called when you select team is full, and then called the generateHTML file which is located in SRC to generate the index.html file
    function buildHTML () {
        fs.writeFileSync('./dist/index.html', generateHTML(teamMembersArray));
        console.log('Your HTML file have been generated and are located in the dist/ directory');
    }
}

startApp();
