const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');



const generateHTML = (answers) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="style.css" rel='stylesheet'>
    <title>My Team</title>
</head>
<body>
<style>
h1{
    background-color: royalblue;
    color: white;
    text-align: center;
    margin: 20px;
    padding: 20px;
}
ul{
    list-style:none ;
    border: 5px solid royalblue;
    padding: 25px;
}
.name{
    font-weight: bold;
}
</style>
    <header>
        <div id="container-fluid">
        <h1>My Team</h1>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row">
            <div class="col">
                <ul>
                <li class="name">Name: ${answers.managerName}</li>
                <li>ID: ${answers.managerId}</li>
                <li>Email:<a href="mailto:${answers.managerEmail}" target="_blank">${answers.managerEmail}</a></li>
                <li>Office Number: ${answers.managerOfficeNumber}</li>
            </ul>
            </div>
            <div class="col">
            <ul>
                <li class="name">Name: ${answers.engineerName}</li>
                <li>ID: ${answers.engineerId}</li>
                <li>Email:<a href="mailto:${answers.engineerEmail}" target="_blank">${answers.engineerEmail}</a></li>
                <li>GitHub: <a href="http://github.com/${answers.engineerGithub}" target="_blank">${answers.engineerGithub}</a></li>
            </ul>
            </div>
            <div class="col">
                <ul>
                <li class="name">Name: ${answers.internName}</li>
                <li>ID: ${answers.internId}</li>
                <li>Email:<a href="mailto:${answers.internEmail}" target="_blank">${answers.internEmail}</a></li>
                <li>School: ${answers.internSchool}</li>
               </ul>
            </div>
           
            </div>
            </div>
            </div>
    </main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>`

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
when:(answers) => {
    return answers.engineerGithub === true
}
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
when:(answers) => {
    return answers.internSchool === true
}
},
])
.then((answers) => {
    // if(answers.add === 'Finish Building Team'){
    const contentHTML = generateHTML(answers)
    fs.writeFile('../dis/index.html', contentHTML, (err) =>
    err? console.log(error) : console.log('Team Profile Created'));
});
