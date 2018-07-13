//Advanced:
  //https://automatetheplanet.com/advanced-behaviours-design-pattern-part-1/
export default class AwaitableActionBehaviour
{
  Execute()
  {
    this.performAct();
    this.performPostActWait();
  }

  performAct = function(){}
  performPostActWait = function(){}
}
