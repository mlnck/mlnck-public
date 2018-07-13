//I placed the snapshot functionality in the utils folder because there seems to
  //be a lot of future enhancements that will be coming. Having it here now avoids
  //reconfiguring when it grows to a more robust method.

import renderer from 'react-test-renderer';

export const snapshot = (component) =>
{
  const snapped = renderer.create(component).toJSON();
  return expect(snapped).toMatchSnapshot();
}

//just a reminder to save a google search
export const updateSnapshot = () =>
{
  console.log(`
              To update our snapshot artifacts.
              You can run Jest with a flag that will tell it to re-generate snapshots:
                jest --updateSnapshot
                  OR
                jest -u
              `)
}

//debug helper
export const printDebug = (obj) =>
{
  for(let k in obj)
  {
    if(Array.isArray(obj[k])){ obj[k].forEach((itm) => printDebug(itm)) }
    else if( typeof(obj[k])  === 'object'){ printDebug(obj[k]) }
    else{ console.log(`${k} is ${obj[k]}`); }
  }
}
