const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const writeFile = require('./Develop/utils/generateFile.js');


const promptProject = data => {


  return inquirer .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project? (Required)',
      validate: title => {
        if(title){
          return true;
        } else {
          console.log('Please enter the project name!');
          return false;
        }
      }
    },
    {
      type:'input',
      name: 'description',
      message: 'Desribe your project: (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a desription of the project!')
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      messsage: 'What kind of license does this project have?',
      choices: ['None', 'Apache 2.0', 'MIT', 'GNU GPLv2','GNU GPLv3', 'ISC'],
      default: 'None'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the user installation instructions:',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter the installation instructions!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information:',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter the usage information!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'What are the guidelines to contribute to this project?',
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log("Please enter the guidelines to contribute to this project. If contributions are not currently being accepted, write a small notice.");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmTest',
      message: 'Would you like to include test instructions?',
      default: false
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter the test instructions:',
      when: ({confirmTest}) => {
        if(confirmTest) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username for questions',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address!')
          return false;
        }
      }
    }
  ])
}


// Create a function to initialize app
function init() {
  promptProject()
  .then(fileData => {
    return generateMarkdown(fileData);
  })
  .then(data => {
    return writeFile(data);
  })
  .catch(err => {
    console.log(err)
  })
};

// Function call to initialize app
init();
