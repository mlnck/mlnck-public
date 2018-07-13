const chalk = require('chalk'),
      fs = require('fs'),
      path = require('path');
      configXML = fs.readFileSync(`${path.resolve()}/config.xml`, 'utf8');


const getConfigData = function(platform)
{
  const curVersionRegEx = new RegExp(`(version-${platform}=\\")([\\d\\.]*)`),
        curVersion = configXML.match(curVersionRegEx)[2];

  const configObj = {
    curVersion,
    platform
  }

  return configObj
}

const setConfigData = function(o,cb)
{
  const semverMap = { Major:0, Minor:1, Patch:2 },
        curVersionRegEx = new RegExp(`(version-${o.platform}=\\"[\\d\\.]*)`),
        contentSrc = o.contentSrcOverride || o.contentSrc.replace(/\s.*\)/g,'');
        chcpSrc = o.chcpSrcOverride || o.chcpSrc.replace(/\s.*\)/g,'');
        o.apiPath = o.apiPathOverride || o.apiPath.replace(/\s.*\)/g,'');

  let newVersion = o.curVersion.split('.');
      if(semverMap.hasOwnProperty(o.versionUpdateType))
      { parseInt(++newVersion[semverMap[o.versionUpdateType]]) }
      newVersion = newVersion.join('.')
  // console.log('newversion-',newVersion);
  let newConfigXML = configXML.replace(/version="[\d\.]*/g,`version="${newVersion}`)
      newConfigXML = newConfigXML.replace(curVersionRegEx,`version-${o.platform}="${newVersion}`)
      newConfigXML = newConfigXML.replace(/content src="[\w:/.]*/g,`content src="${contentSrc}`)
      newConfigXML = newConfigXML.replace(/config-file url="[\w:/.]*/g,`config-file url="${chcpSrc}`)

  fs.writeFileSync(`${path.resolve()}/config.xml`, newConfigXML, 'utf8', () => {
      if (err) throw err;
    });

  console.log(chalk.yellow.bold.bgBlack(' config.xml has been updated '));
  cb(o)
}

module.exports = { getConfigData, setConfigData }
