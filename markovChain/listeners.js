export default function Listeners(generateObj)
{
  const titleButton = document.getElementById('btn-title'),
        btn = document.getElementsByTagName('button'),
        check = document.getElementsByTagName('input')

    for(let i=0; i<btn.length; i++)
    {
      btn[i].onclick = (e) =>
      {
        e.preventDefault()

        const fnc = e.currentTarget.getAttribute('name')
        generateObj[`generate${fnc}`]()
      }
    }
    
    // for(let j=0; j<check.length; j++)
    // {
    //   check[j].onclick = (e) =>
    //   { generateObj.updateCorpi() }
    // }
}
