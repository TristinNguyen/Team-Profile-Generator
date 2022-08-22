const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const util = require('util');
const html = require("./src/htmlFuncs");

// Set up Async file functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);


let teamArray = [];
let teamString = ``;

console.clear();
console.log("==========================================");
console.log("teamGen - Team Portfolio Generator")
console.log("==========================================");


// Main function
async function main() {
  try {
    await prompt()

    console.log(teamArray);

    for(let i = 0; i<teamArray.length; i++) {
      console.log(teamString);
      teamString = teamString + html.generateCard(teamArray[i]);
    }
    let finalHTML = html.generateHTML(teamString);

    console.clear();
    console.log('------------------------------------------');
    console.log('Generating index.html file...')
    console.log('------------------------------------------');

    writeFileAsync('./dist/index.html', finalHTML);

    console.clear();
    console.log('------------------------------------------');
    console.log('index.html file created')
    console.log('------------------------------------------');
  }
  catch (err) {
    return console.log(err);
  }
}

// Inquirer function to gather user info
async function prompt() {
  let resDone = 'Yes';
  do {
    try {
      console.log('------------------------------------------');
      let resEmployee = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: "What is the employee's name? ",
          validate: (name) => {
            return name !== '';
          }
        },
        {
          type: 'input',
          name: 'id',
          message: "What is the employee's ID? ",
          validate: (id) => {
            return id !== '';
          }
        },
        {
          type: 'input',
          name: 'email',
          message: "What is the employee's email address? ",
          validate: (email) => {
            return email !== '';
          }
        },
        {
          type: 'list',
          name: 'role',
          message: "What is the employee's role? ",
          choices: [
            'Manager',
            'Engineer',
            'Intern'
          ]
        }
      ]);

      let resRole = ''

      if (resEmployee.role === 'Manager') {
        // Manager Role
        resRole = await inquirer.prompt([
          {
            type: 'input',
            name: 'office',
            message: "What is the Manager's office number? ",
            validate: (office) => {
              return office !== '';
            }
          }
        ])

        // add to team array
        const manager = new Manager(
          resEmployee.name,
          resEmployee.id,
          resEmployee.email,
          resRole.office);
        teamArray.push(manager);

      } else if (resEmployee.role === 'Engineer') {
        // Engineer Role
        resRole = await inquirer.prompt([
          {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github username? ",
            validate: (github) => {
              return github !== '';
            }
          }
        ])

        // add to team array
        const engineer = new Engineer(
          resEmployee.name,
          resEmployee.id,
          resEmployee.email,
          resRole.github);
        teamArray.push(engineer);

      } else {
        // Intern Role
        resRole = await inquirer.prompt([
          {
            type: 'input',
            name: 'school',
            message: "What is the Intern's school name? ",
            validate: (school) => {
              return school !== '';
            }
          }
        ])

        // add to team array
        const intern = new Intern(
          resEmployee.name,
          resEmployee.id,
          resEmployee.email,
          resRole.school);
        teamArray.push(intern);
      }


    } catch (err) {
      return console.log(err);
    }

    resDone = await inquirer.prompt([
      {
        type: 'list',
        name: 'continue',
        message: "Do you wish to continue adding team members? ",
        choices: [
          'Yes',
          'No'
        ]
      }
    ])
    console.clear;
    console.log(resDone)

  } while (resDone.continue === "Yes");
}

// start program
main();