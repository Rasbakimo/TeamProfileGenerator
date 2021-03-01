const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);



function promptUser() {
    return inquirer.prompt([
    {
        type: 'input',
        message: "Github user name?",
        name: 'username',
        default: 'Rasbakimo'
       },
       {
        type: "input",
        name: "email ",
        message: "Enter email address",
        default: 'bakimocleckley@yahoo.com'
       },
     
    {
        type: 'input',
        message: "Project title?",
        name: 'title',
        default: 'README Template'
        },
    {
        type: 'input',
        message: "What's the Objective.",
        name: 'description',
        default: 'A quality README file template'
         },
    {
        type: 'input',
        message: "Here's how to install it.",
        name: 'installation',
        default:'install node and inquirer read docs if necessary'
    },
    {
        type: 'input',
        message: "Instructions and demo",
        name: 'usage',
        default: " vid or pic here"
    },
    {
        type: 'input',
        message: "Here's how to add contributions, please feel free to do so.",
        name: 'contributing',
        default: "Read the doc for inquirer on the npm website to see the different types of inputs. once you're done, use git workflow to push your contributoins"
    },
  
    
]); 
}
promptUser()
  .then(function(userResponse) {
    const html = generateMarkdown(userResponse);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Success check the folder");
  })
  .catch(function(err) {
    console.log(err);
  });