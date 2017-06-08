if(!window.console){window.console = {};}
  console.debug = function(...args){
    console.profile('debug profile');//Not fully supported
    console.time('debugged in');
    let debugType;
    switch(args[0])
    {
      case 'INFO': debugType = 'info'; break;
      case 'ERR': debugType = 'error'; break;
      case 'WARN': debugType = 'warn'; break;
      default : debugType = 'log';
    }
    console.count('--START DEBUG BLOCK--');
    console.timeStamp('started at');//Not fully supported
    for(let i=0; i<args.length; i++)
    {
      let itemStr = (i+1)+') ';
      if(typeof(args[i]) === 'string' && args[i].charAt(args[i].length-1) === ':')
      { console[debugType](itemStr,args[i],args[++i]); }
      else
      { console[debugType](itemStr,args[i]); }
      checkForObject(itemStr,args[i]);
    }
    console.groupCollapsed('Stack Trace:'); console.trace(); console.groupEnd();
    console.timeEnd('debugged in');
    console.log('--END DEBUG BLOCK--');console.log('');console.log('');
    console.profileEnd('debug profile');//Not fully supported
    function checkForObject(s,o)
    {
      if(typeof(o) === 'object'){ console[debugType]('Tabular data for item '+s.replace(')','')+'↴'); }
      formatOutput(o);
    }
    function formatOutput(o,title='')
    {
      if(typeof(o) !== 'object'){ return false; }
      let nest = [],
          grpTitle = (+title) ? 'view table from item '+title+' above' : 'view root table'
      nest.push(o);
      console.groupCollapsed(grpTitle); console.table(nest); console.groupEnd();
      if(Array.isArray(o))
      {
        o.forEach(function(itm,indx){
          if(typeof(o) === 'object'){ formatOutput(itm,indx); }
        });
      }
      if(~String(o.constructor).indexOf('Object'))
      {
        let indx = 0;
        for(let k in o){ if(typeof(o[k]) === 'object'){ formatOutput(o[k],indx); } indx++; }
      }
    }
  };
