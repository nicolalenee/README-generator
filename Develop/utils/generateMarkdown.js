const { renderLicenseBadge, generateLicense, generateLicenseLink } = require('./generateLicenseInfo.js');


// function that generates the format and content of the README.md 
const generateMarkdown = data => {
  const { title, license, description, installation, usage, contributions, test, github, email} = data;

  return `
  # ${title}
  ${renderLicenseBadge(license)}

  ## Table of Contents
  [Description](#description)  
  [Installation](#installation)  
  [Usage](#usage)  
  [Contributing](#contributing)  
  [Tests](#tests)  
  [Questions](#questions)  
  ${generateLicenseLink(license)}  

  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contributions}

  ## Tests
  ${test}


  ## Questions?
  GitHub ❤️ : [http://github.com/${github}]  
  Email 📧: [${email}]

  ${generateLicense(license)}

`;
}

module.exports = generateMarkdown;
