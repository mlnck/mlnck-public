export default class BehaviourExecutor
{
  Execute(behaviours=[])
  {
    let exec;
    function* generateExecution()
    {
      for(let i=0; i<behaviours.length; i++)
      { if(behaviours[i]){ yield behaviours[i].Execute() } }
    }
    function execNext()
    {
      const yielded = exec.next();
      if(!yielded.done)
      { execNext(); }
    }
    exec = generateExecution();
    execNext();
  }
}
