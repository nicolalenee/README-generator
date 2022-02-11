// if there is a license selected
const generateLicense = license => {
  if (!license || license === "None") {
    return '';
  }
  return `
  ## License
  ${license}
    `;
}

// if there are tests for this project
const generateTests = test => {
  if(!test) {
    return '';
  }
  return `
  ## Tests
  ${test}
  `;
}

function generateMarkdown(data) {
  const { title, license, description, installation, usage, contributions, test, github, email} = data;

  return `
  # ${title}
  ${generateLicense(license)}

  ## Table of Contents
    [Description](# Description)
    [Installation](# Installation)
    [Usage](# Usage)
    [License](# License)
    [Contributing](# Contributing)
    [Tests](# Tests)
    [Questions]{# Questions}
  ---

  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contributions}

  ${generateTests(test)}


  ## Questions?
  [http://github.com/${github}]
  [${email}]

`;
}

module.exports = generateMarkdown;
