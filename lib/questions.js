
const inquirer = require('inquirer');

var promptAction = function() {
    return inquirer.prompt(
        [
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do next?',
                choices: ['Add a new engineer', 'Add a new intern', 'Finish building my team']
            }
        ]
    )
}

var promptAddManager = function() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'manager_name',
                message: 'What is the name of the manager?'
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'What is the ID of the manager?'
            },
            {
                type: 'input',
                name: 'manager_email',
                message: 'What is the email of the manager?'
            },
            {
                type: 'input',
                name: 'manager_office',
                message: 'What is the office number from which the manager works?'
            }
        ]
    );
};

var promptAddEngineer = function() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'engineer_name',
                message: 'What is the name of the engineer?'
            },
            {
                type: 'input',
                name: 'engineer_id',
                message: 'What is the ID of the engineer?'
            },
            {
                type: 'input',
                name: 'engineer_email',
                message: 'What is the email of the engineer?'
            },
            {
                type: 'input',
                name: 'engineer_github',
                message: 'What is the github username of the engineer?'
            }
        ]
    );
};

var promptAddIntern = function() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'intern_name',
                message: 'What is the name of the intern?'
            },
            {
                type: 'input',
                name: 'intern_id',
                message: 'What is the ID of the intern?'
            },
            {
                type: 'input',
                name: 'intern_email',
                message: 'What is the email of the intern?'
            },
            {
                type: 'input',
                name: 'intern_school',
                message: 'Which school did the intern attend?'
            }
        ]
    );
};

module.exports = Questions;