/*
  https://www.youtube.com/watch?v=3AjlsTtrfVY
*/

import {corpus} from './corpus/corpus'
import {DISALLOWED_TITLE_BEGINNING, DISALLOWED_TITLE_ENDING} from '/constants.js'
import Listeners from './listeners'

console.log("corpus:",corpus);



let chainCorpus = [],
    corpusObj = {},
    corpusObjLen = 0;

function getStartingPoint()
{
  const startPt = Math.floor(Math.random() * (corpusObjLen*.95))
  let   curPt = 0;
  for(let k in corpusObj)
  {
    if(++curPt === startPt)
    { return k }
  }
  return startPt
}
function uppercaseStart(str)
{
  let starting = str.split(' ')
      starting[0] = starting[0]
                      .replace(/(?:^|\s)\S/g,
                        (a) => a.toUpperCase())
      starting = starting.join(' ')
  return starting;
}

generateMarkovChain() //initial
function generateMarkovChain()
{
  /*
    This would not be run at run-time.
    Instead it would be run before hand and the result would be persisted (blob?).
    That way a single database call would retrieve everything already in the
      correct format.
    So there can be some inefficiencies within this for now.
  */
  let corpi;
  console.log("window.location.search:",window.location.search);
switch(window.location.search)
{
  case '?corpi=night':
    corpi = [corpus['THE_NIGHT_LAND']]
    document.getElementById('nlcb').checked = true;
    break
  case '?corpi=robin,night':
    corpi = [corpus['ROBIN_HOOD'],corpus['THE_NIGHT_LAND']]
    document.getElementById('nlcb').checked = true;
    document.getElementById('rhcb').checked = true;
    break
  default:
    corpi = [corpus['ROBIN_HOOD']]
    document.getElementById('rhcb').checked = true;
}

console.log("corpi:",corpi);
  let re = /\s/g,
  str = corpi.map(itm => itm),
  result = re[Symbol.split](str);// split corpus
  
  result = result
                //remove whitespace
                //remove all caps if greater than 1 character
            .filter(itm => { return itm.length && (itm.length > 1 && !itm.match(/^([A-Z]*$)/g)) })
  console.log("result:",result);
  for(let i=0; i<result.length-2; i++) //-2 to take into account last word
  {
    let keyStr = `${result[i]} ${result[i+1]}`,
        keyVal = result[i+2]

    if(!corpusObj[keyStr])
    {
      corpusObj[keyStr] = {}
      corpusObjLen++;
    }
    corpusObj[keyStr][keyVal] = keyVal
  }
    //inefficiency mentioned above.
      //translate value objects into arrays
  for(let k in corpusObj)
  {
    let tmpArr = []
    for(let ky in corpusObj[k])
    { tmpArr.push(corpusObj[k][ky]) }
    corpusObj[k] = tmpArr;
  }
  console.log("corpusObj:",corpusObj);
  console.log("corpusObjLen:",corpusObjLen);
}

const updateCorpi = () =>
{
  chainCorpus = []
  corpusObj = {}
  console.log("chainCorpusAFTErPOP:",chainCorpus);
  const checkedBoxes = document.querySelectorAll('input:checked')
  checkedBoxes.forEach(itm => 
  {
    // console.log("itm:",itm.getAttribute('value'))
    // chainCorpus.push(corpus[itm.getAttribute('value')])
    chainCorpus.push(corpus['ROBIN_HOOD'])
    chainCorpus.push(corpus['THE_NIGHT_LAND'])
  });
  console.log("chainCorpus:",chainCorpus);
  generateMarkovChain(chainCorpus)
}

const generateTitle = () =>
{
  /*
    To generate title
      Create fragment by walking the chain, grabbing 3-7 words
      Shave undesireable words off beginning and end
        Undesirable beginning example:
          were, though, them, him, her, is, ...
        Undesirable ending example:
          this, were, every, are, which, their, has, until

    To extend titling
      10% include an "Author's or Editor's" note (just another generated sentence)
      20% add a title modifier
        "<n>th edition"
        ": Unabridged"
        "Vol: <VII>"
        etc
  */
  console.log("generateTitle:");
  const maxIteration = Math.round(Math.random()*4+3) // will give us 3-7
  let curIteration = 1, //while loop -start at 1 to preserve numbering
      curStr = getStartingPoint(),
      fullStr = curStr
      
  while(curIteration < maxIteration)
  {
    curIteration++;
    
    let randPos = Math.floor(Math.random()*corpusObj[curStr].length),
        addendum = ` ${corpusObj[curStr][randPos]}`
      
    
    fullStr += addendum
    curStr = curStr.split(' ').pop()
    curStr += addendum
  }
  fullStr = fullStr
              .replace(/[.,;]/g,'')
              .toUpperCase()
  
  //remove disallowed beginning and endings
  fullStr = fullStr.split(' ')
  //Not 100% (could potentially have multiple disallowed words next to each other)
  for(let i=DISALLOWED_TITLE_BEGINNING.length-1; i>=0; i--)
  { if(fullStr[0] === DISALLOWED_TITLE_BEGINNING[i]){ fullStr.shift() } }
  for(let i=DISALLOWED_TITLE_ENDING.length-1; i>=0; i--)
  { if(fullStr[fullStr.length-1] === DISALLOWED_TITLE_ENDING[i]){ fullStr.pop() } }
  fullStr = fullStr.join(' ')
  
  document.getElementById('txt-header').innerText='Title:'
  document.getElementById('txt-output').innerText=fullStr
  
  return fullStr
}

const generateSentence = () =>
{
  /*
    To generate sentence:
      Choose n-gram word at random
      Walk chain until you hit a period
        Place limit at 45-55 words.
  */
  
  const maxIteration = Math.round(Math.random()*10+45) // will give us 45-55
  let curIteration = 1, //while loop -start at 1 to preserve numbering
      curStr = getStartingPoint(),
      fullStr = curStr

  if(~fullStr.indexOf('.')) //don't allow a sentence to start with a period
  { return generateSentence() }
  
  while(curIteration < maxIteration && !~fullStr.indexOf('.'))
  {
    curIteration++;
    
    let randPos = Math.floor(Math.random()*corpusObj[curStr].length),
        addendum = ` ${corpusObj[curStr][randPos]}`
      
    
    fullStr += addendum
    curStr = curStr.split(' ').pop()
    curStr += addendum
  }
  
  if(curIteration === maxIteration)
  { fullStr += '.'; }

  //Capitalize first Letter
  fullStr = uppercaseStart(fullStr)
  
  document.getElementById('txt-header').innerText='Sentence:'
  document.getElementById('txt-output').innerText=fullStr
  
  return fullStr;
}

const generateParagraph = () =>
{
  /*
  To generate paragraph:
    Generate 3-8 sentences
  */
  console.log("generateParagraph:");
  const sntncNum = Math.floor(Math.random()*5+3)
  let curLoop = 0,
      para = ''

  while(curLoop++ < sntncNum)
  { para += `${generateSentence()} ` }
  
  document.getElementById('txt-header').innerText='Paragraph:'
  document.getElementById('txt-output').innerText=para
}

const generateBook = () =>
{
  /*
    To generate book:
      Generate 8-31 paragraphs
        5% generate a 'tome' (8-10x as long as normal book)
  */
  
  console.log("generateBook:");
  const paraNum = Math.floor(Math.random()*23+8)
  let curLoop = 0,
      book = ''

  while(curLoop++ < paraNum)
  { book += `${generateSentence()}\r\n\r\n` }
  
  document.getElementById('txt-header').innerText=generateTitle()
  document.getElementById('txt-output').innerText=book
}

Listeners({generateTitle, generateSentence, generateParagraph, generateBook, updateCorpi})
