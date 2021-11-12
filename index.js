
const questions = require('./lib/questions');

var choice = function() {
    questions.promptAction()
        .then(promptData => {
            if (promptData.options === 'Add a new engineer') {
                questions.promptAddEngineer()
                    .then(engineerData => {
                        if(engineerData.engineer_name && engineerData.engineer_id && engineerData.engineer_email && engineerData.engineer_github){
                            choice();
                        }
                    })
            } else if (promptData.options === 'Add a new intern') {
                questions.promptAddIntern()
                    .then(internData => {
                        if(internData.intern_name && internData.intern_id && internData.intern_email && internData.intern_school){
                            choice();
                        }
                    })
            } else if (promptData.options === 'Finish building my team') {
                console.log('program ended');
            }
        })
}

questions.promptAddManager()
    .then(inputData => {
        if (inputData.manager_name && inputData.manager_id && inputData.manager_email && inputData.manager_office) {
            choice();
        }    
    })



