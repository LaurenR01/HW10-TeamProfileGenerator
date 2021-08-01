const inquirer = require('inquirer');

const fs = require('fs');
// const jest = require('jest');

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
                <li class="name">Name: ${answers.name}</li>
                <li>ID: ${answers.id}</li>
                <li>Email:<a href="mailto:${answers.email}" target="_blank">${answers.email}</a></li>
                <li>Office Number: ${answers.officeNumber}</li>
                <li>GitHub: <a href="http://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                <li>School: ${answers.school}</li>
            </ul>
            </div>
            <div class="col">
            <ul>
                <li class="name">Name: ${answers.name}</li>
                <li>ID: ${answers.id}</li>
                <li>Email:<a href="mailto:${answers.email}" target="_blank">${answers.email}</a></li>
                <li>Office Number: ${answers.officeNumber}</li>
                <li>GitHub: <a href="http://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                <li>School: ${answers.school}</li>
            </ul>
            </div>
            <div class="col">
                <ul>
                <li class="name">Name: ${answers.name}</li>
                <li>ID: ${answers.id}</li>
                <li>Email:<a href="mailto:${answers.email}" target="_blank">${answers.email}</a></li>
                <li>Office Number: ${answers.officeNumber}</li>
                <li>GitHub: <a href="http://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                <li>School: ${answers.school}</li>
               </ul>
            </div>
            <div class="row">
            <div class="col">
                <ul>
                <li class="name">Name: ${answers.name}</li>
                <li>ID: ${answers.id}</li>
                <li>Email:<a href="mailto:${answers.email}" target="_blank">${answers.email}</a></li>
                <li>Office Number: ${answers.officeNumber}</li>
                <li>GitHub: <a href="http://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                <li>School: ${answers.school}</li>
            </ul>
            </div>
            <div class="col">
            <ul>
                <li class="name">Name: ${answers.name}</li>
                <li>ID: ${answers.id}</li>
                <li>Email:<a href="mailto:${answers.email}" target="_blank">${answers.email}</a></li>
                <li>Office Number: ${answers.officeNumber}</li>
                <li>GitHub: <a href="http://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                <li>School: ${answers.school}</li>
            </ul>
            </div>
            <div class="col">
                <ul>
                <li class="name">Name: ${answers.name}</li>
                <li>ID: ${answers.id}</li>
                <li>Email:<a href="mailto:${answers.email}" target="_blank">${answers.email}</a></li>
                <li>Office Number: ${answers.officeNumber}</li>
                <li>GitHub: <a href="http://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                <li>School: ${answers.school}</li>
               </ul>
            </div></div>
            <div class="row">
            <div class="col">
                <ul>
                <li class="name">Name: ${answers.name}</li>
                <li>ID: ${answers.id}</li>
                <li>Email:<a href="mailto:${answers.email}" target="_blank">${answers.email}</a></li>
                <li>Office Number: ${answers.officeNumber}</li>
                <li>GitHub: <a href="http://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                <li>School: ${answers.school}</li>
            </ul>
            </div>
            <div class="col">
            <ul>
                <li class="name">Name: ${answers.name}</li>
                <li>ID: ${answers.id}</li>
                <li>Email:<a href="mailto:${answers.email}" target="_blank">${answers.email}</a></li>
                <li>Office Number: ${answers.officeNumber}</li>
                <li>GitHub: <a href="http://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                <li>School: ${answers.school}</li>
            </ul>
            </div>
            <div class="col">
                <ul>
                <li class="name">Name: ${answers.name}</li>
                <li>ID: ${answers.id}</li>
                <li>Email:<a href="mailto:${answers.email}" target="_blank">${answers.email}</a></li>
                <li>Office Number: ${answers.officeNumber}</li>
                <li>GitHub: <a href="http://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                <li>School: ${answers.school}</li>
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
name: 'name',
message: 'What is the team members name?'
},
{type: 'input',
name: 'id',
message: 'What is the team members ID?'
},
{type: 'input',
name: 'email',
message: 'What is the team members email?'
},
{type: 'input',
name: 'officeNumber',
message: 'What is the managers office number?'
},
{type: 'input',
name: 'github',
message: 'What is the engineers GitHub username?'
},
{type: 'input',
name: 'school',
message: 'What is the name of the interns school?'
},
])
.then((answers) => {
    const contentHTML = generateHTML(answers)
    fs.writeFile('index.html', contentHTML, (err) =>
    err? console.log(error) : console.log('Team Profile Created'));
});
