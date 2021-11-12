
const questions = require('./lib/questions');
const fs = require('fs');
const generateHTML = require('./src/generateHtml');

internCards = [];
managerCards = [];
engineerCards = [];

var choice = function() {
    questions.promptAction()
        .then(promptData => {
            if (promptData.options === 'Add a new engineer') {
                questions.promptAddEngineer()
                    .then(engineerData => {
                        if(engineerData.engineer_name && engineerData.engineer_id && engineerData.engineer_email && engineerData.engineer_github){
                            console.log(engineerData);
                            engineerCards.push(engineerData);
                            choice();
                        }
                    })
            } else if (promptData.options === 'Add a new intern') {
                questions.promptAddIntern()
                    .then(internData => {
                        if(internData.intern_name && internData.intern_id && internData.intern_email && internData.intern_school) {
                            console.log(internData);
                            internCards.push(internData);
                            choice();
                        }
                    })
            } else if (promptData.options === 'Finish building my team') {
                console.log('finished')
                const pageHTML = generateHTML(managerCards, engineerCards, internCards);

                fs.writeFile('index.html', pageHTML, err => {
                    if (err) throw err;
                    console.log("file has been generated")
                })
            }
        })
}

questions.promptAddManager()
    .then(inputData => {
        if (inputData.manager_name && inputData.manager_id && inputData.manager_email && inputData.manager_office) {
            console.log(inputData);
            managerCards.push(inputData);
            choice();
        }    
    })
