const buildQuestions = [
  {
    type: 'list',
    name: 'versionUpdateType',
    message: `This build is an update of type`,
    choices: ['None(dev)','Major', 'Minor', 'Patch'],
    default: 'None(dev)'
  },

  { type: 'list',
    name: 'apiPath',
    message: `The API Path is:`,
    choices: [
      'https://api.circulation.com/ (production)',
      'https://development-api.circulation.care/ (development)',
      'Other'
    ],
    default: 'https://api.circulation.com/ (production)',
  },
  {
    type: 'input',
    name: 'apiPathOverride',
    message: 'Enter API Path',
    default: 'include http(s)://',
    when(answers)
    { return answers.apiPath === 'Other'; },
    validate(value)
    { return validateUrl(value) },
    filter: String
  },

  { type: 'list',
    name: 'contentSrc',
    message: `The Content Source is:`,
    choices: [
      'index.html (local)',
      'https://app.circulation.com (production)',
      'http://localhost:8080 (iOS)',
      'http://10.0.2.2:8080 (android)',
      'Other'
    ],
    default: 'index.html (local)',
  },
  {
    type: 'input',
    name: 'contentSrcOverride',
    message: 'Enter Content Source Path',
    default: 'enter url or path',
    when(answers)
    { return answers.contentSrc === 'Other'; },
    validate(value)
    { return true /*validateUrl(value)*/ },
    filter: String
  },

  { type: 'list',
    name: 'chcpSrc',
    message: `The Hot Code Push .json File is:`,
    choices: [
      'https://app.circulation.com/js/chcp.json (production)',
      'Other (ngrok)'
    ],
    default: 'https://app.circulation.com/js/chcp.json (production)',
  },
  {
    type: 'input',
    name: 'chcpSrcOverride',
    message: 'Enter chcp.json file Path',
    default: 'include http(s)://',
    when(answers)
    { return answers.chcpSrc === 'Other (ngrok)'; },
    validate(value)
    { return validateUrl(value) },
    filter: String
  },

  {
    type: 'confirm',
    name: 'printInstructions',
    message: `Print Post-Build Instructions Upon Completion?`,
    default: true
  }
];

function validateUrl(s)
{
  const valid = !!(s.length) && ~s.indexOf('http') && ~s.indexOf('.') && s !== 'include http(s)://';
  return (valid) ? true : 'Please enter a valid url';
}

module.exports = { buildQuestions }
