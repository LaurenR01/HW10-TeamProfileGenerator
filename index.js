const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');



const generateHTML = (answers) => ``

inquirer
.prompt([
{type: 'input',
name: 'managerName',
message: 'What is the Managers name?'
},
{type: 'input',
name: 'managerID',
message: 'What is the Managers ID?'
},
{type: 'input',
name: 'managerEmail',
message: 'What is the Managers email?'
},
{type: 'input',
name: 'managerOfficeNumber',
message: 'What is the Managers office number?'
},
{type: 'list',
name: 'add',
message: 'What kind of team member would you like to add?',
choices: ['Engineer', 'Intern', new inquirer.Separator(),'Finish Building Team'],
},
{type: 'input',
name: 'engineerName',
message: 'What is the Engineers name?',
when:(answers) => {
    return answers.add === 'Engineer'
}
},
{type: 'input',
name: 'engineerID',
message: 'What is the Engineers ID?'
},
{type: 'input',
name: 'engineerEmail',
message: 'What is the Engineers email?'
},
{type: 'input',
name: 'engineerGithub',
message: 'What is the engineers GitHub username?'
},
{type: 'list',
name: 'add',
message: 'What kind of team member would you like to add?',
choices: ['Engineer', 'Intern', new inquirer.Separator(),'Finish Building Team'],
},
{type: 'input',
name: 'internName',
message: 'What is the Interns name?',
when:(answers) => {
    return answers.add === 'Intern'
}
},
{type: 'input',
name: 'internID',
message: 'What is the Interns ID?'
},
{type: 'input',
name: 'internEmail',
message: 'What is the Interns email?'
},
{type: 'input',
name: 'internSchool',
message: 'What is the name of the Interns school?'
},
{type: 'list',
name: 'add',
message: 'What kind of team member would you like to add?',
choices: ['Engineer', 'Intern', new inquirer.Separator(),'Finish Building Team'],
when: (answers) =>{
    return answers.internSchool.isTrue || answers.engineerGithub.isTrue;
}
},
])
.then((answers) => {
    if(answers.add === 'Finish Building Team'){
    const contentHTML = generateHTML(answers)
    fs.writeFile('index.html', contentHTML, (err) =>
    err? console.log(error) : console.log('Team Profile Created'));
}});
