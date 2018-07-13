//Advanced:
  //https://automatetheplanet.com/advanced-behaviours-design-pattern-part-1/

export default class AwaitableAssertableActionBehaviour
{
  constructor(rte,o)
  {
    const executionYields = [
          'PerformPreAwaitAction',
          'PerformPreAwaitAssert',
          'PerformAwaitAction',
          'PerformAwaitAssert',
          'PerformPostAwaitAction',
          'PerformPostAwaitAssert'
        ];

    this.Execute = () =>
    { this.PerformYields(executionYields,rte,o) }
  }
}
