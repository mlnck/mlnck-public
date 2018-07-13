#!/usr/bin/env node --harmony

const chalk = require('chalk'),
      circMobile = require('commander'),
      fs = require('fs'),
      inquirer = require('inquirer'),
      path = require('path'),

      { getConfigData, setConfigData } = require('../utils/config-data'),
      { buildQuestions } = require('../utils/build-questions'),
      { commenceBuild } = require('../utils/build-scripts');

circMobile.onRoot = function checkLoc(s)
{
  if(
      path.resolve().split('/').pop() === 'mobile-build'
      || !fs.existsSync('./package.json')
      || !fs.existsSync('./config.xml')
    )
  {
    console.log(chalk.red.bold.underline('** Please run all scripts from the root of your project **'));
    process.exit(1);
  }
  return s;
};

circMobile
  .version('0.0.1');

circMobile
  .command('build')
  .description('creats mobile build of application')
  .arguments('[platform-type]')
  .action((platformType) =>
  {
    circMobile.onRoot()

    if(
        !platformType ||
        (platformType.toLowerCase() !== 'ios'
        && platformType.toLowerCase() !== 'android')
      )
    {
      const questionMobileType = {
        type: 'list',
        name: 'platformType',
        message: 'Are you building for',
        choices: ['Android', 'iOS'],
        default: 'Android'
      };

      inquirer.prompt([questionMobileType]).then((answer) =>
      { circMobile.getConfigData(answer.platformType.toLowerCase()) });
    }
    else
    { circMobile.getConfigData(platformType.toLowerCase()) }
  })
circMobile.createBuild = function(o)
{ commenceBuild(o) }

circMobile.getConfigData = function(platform)
{
  const currentConfigData = getConfigData(platform)

  console.log(
    chalk.magenta.bold.bgBlack(`Current Build Version is `) +
    chalk.yellow.bold.bgBlack.underline(`${currentConfigData.curVersion}`) +
    chalk.yellow.bold.bgBlack(' ')
  )

  inquirer.prompt(buildQuestions).then((answers) =>
  {
    const newConf = {...answers, ...currentConfigData}
    setConfigData(newConf, circMobile.createBuild);
  })
}

circMobile
  .command('*')
  .action((env) =>
  {
    console.log('environment: "%s"', env);
    console.log('circMobile:', circMobile);
  });

circMobile.parse(process.argv);
