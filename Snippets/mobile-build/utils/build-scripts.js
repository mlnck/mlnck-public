const chalk = require('chalk'),
      { exec } = require('child_process'),
      path = require('path')
let deviceBuild,
    nodeModulesAdd,
    nodeModulesRm,
    platformsAdd,
    platformsRm,
    pluginsAdd,
    pluginsRm;

const commenceBuild = (obj) => {
console.log('obj:',obj);
console.log(chalk.bold.red(`** Building Application for ${obj.platform} - This may take awhile **`));

nodeModulesRm = exec('rm -rf ./node_modules')

console.log(chalk.yellow('-> Removing All Caches'));
console.log(chalk.dim.yellow(' -> Removing Node Modules'));

  nodeModulesRm.stdout.on('data', (data) => {
    console.log(chalk.dim.white(' • Removing Node Modules Data: ')+data);
  });
  nodeModulesRm.stdout.on('end', (data) => {
    console.log(chalk.dim.yellow('  -> Node Modules Removed'));
    console.log(chalk.dim.white('  --------- '));
    console.log(chalk.dim.yellow('  -> Removing Platforms'));

    platformsRm = exec('npm run platforms:remove')
    platformsRm.stdout.on('data', (data) => {
      const str = (data.length > 1) ? data : 'please be patient...'
      console.log(chalk.dim.white(' • Removing Platforms Data: ')+str);
    });
    platformsRm.stdout.on('end', (data) => {
      console.log(chalk.dim.yellow('  -> Platforms Removed'));
      console.log(chalk.dim.white('  --------- '));
      console.log(chalk.dim.yellow('  -> Removing Plugins'));

      pluginsRm = exec('npm run plugins:remove')
      pluginsRm.stdout.on('data', (data) => {
        const str = (data.length > 1) ? data : 'please be patient...'
        console.log(chalk.dim.white(' • Removing Plugins Data: ')+str);
      });
      pluginsRm.stdout.on('end', (data) => {
        console.log(chalk.dim.yellow('  -> Plugins Removed'));
        console.log(chalk.dim.white('  --------- '));
        console.log(chalk.dim.yellow('  -> Installing Packages'));

        nodeModulesAdd = exec('npm install')
        nodeModulesAdd.stdout.on('data', (data) => {
          const str = (data.length > 1) ? data : 'please be patient...'
          console.log(chalk.dim.white(' • Installing Packages Data: ')+str);
        });
        nodeModulesAdd.stdout.on('end', (data) => {
          console.log(chalk.dim.yellow('  -> Packages Installed'));
          console.log(chalk.dim.white('  --------- '));
          console.log(chalk.dim.yellow('  -> Installing Platforms'));

          platformsAdd = exec('npm run platforms:add')
          platformsAdd.stdout.on('data', (data) => {
            const str = (data.length > 1) ? data : 'please be patient...'
            console.log(chalk.dim.white(' • Installing Platforms Data: ')+str);
          });
          platformsAdd.stdout.on('end', (data) => {
            console.log(chalk.dim.yellow('  -> Platforms Installed'));
            console.log(chalk.dim.white('  --------- '));
            console.log(chalk.dim.yellow('  -> Installing Plugins'));

            pluginsAdd = exec('npm run plugins:add')
            pluginsAdd.stdout.on('data', (data) => {
              const str = (data.length > 1) ? data : 'please be patient...'
              console.log(chalk.dim.white(' • Installing Plugins Data: ')+str);
            });
            pluginsAdd.stdout.on('end', (data) => {
              console.log(chalk.dim.yellow('  -> Platforms Installed'));
              console.log(chalk.dim.white('  --------- '));
              console.log(chalk.dim.yellow('  -> Building device'));

              const updateApi = exec(`process.env.APIpath = ${obj.apiPath}`)
              updateApi.stdout.on('data', (data) => {
                const str = (data.length > 1) ? data : 'please be patient...'
                console.log(chalk.dim.white(' • Updating API Data: ')+str);
              });
              updateApi.stdout.on('end', (data) => {
                deviceBuild = (obj.platform === 'android')
                      ? exec(`APIpath='${obj.apiPath}' cordova emulate android`)
                      : exec(`APIpath='${obj.apiPath}' cordova emulate ios`)
                deviceBuild.stdout.on('data', (data) => {
                  const str = (data.length > 1) ? data : 'please be patient...'
                  console.log(chalk.dim.white(' • Building Device Data: ')+str);
                });
                deviceBuild.stdout.on('end', (data) => {
                  console.log(chalk.bold.yellow('  -> Device Build <- '));
                  console.log(chalk.dim.white('  --------- '));
                  console.log(chalk.bold.green('~~ Build Complete ~~'));

                  if(obj.printInstructions)
                  {
                    const openFile = exec(`open ${path.resolve()}/scripts/mobile-build/instructions/${obj.platform}.txt`)
                    openFile.stdout.on('end', (data) => { console.log('file opened')})
                  }
                })
              })
            })
          })
        })
      })
    })


  });
}



module.exports = { commenceBuild }
