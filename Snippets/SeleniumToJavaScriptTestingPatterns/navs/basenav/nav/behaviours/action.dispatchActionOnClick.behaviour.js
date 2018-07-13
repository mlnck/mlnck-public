import React from 'react'
import sinon from 'sinon'

import ActionsBehaviour from '../../../../_patterns/behaviour/ActionsBehaviour'
import {sinonUtils} from '../../../../_utils/sinon.utils'

export default class ActionDispatchActionOnClick extends ActionsBehaviour
{
  constructor(Route,obj={})
  {
    super();
    this.rte = Route;
    this.obj = obj;
  }

  PerformAct()
  {
    console.log('On Page: ',this.rte.props.component.props.location);

    if(this.obj.elem === 'userLogout')//we have to open the dropdown first
    { this.rte.Map.userSection.simulate('click'); }

    const btn = this.rte.Map[this.obj.elem],
    //spy needs to move to base
          spyObj = (this.obj.spyObj === 'action') ? this.rte.props.component.props : null;
          // console.log('spyObj:',this.rte.props.component.props.actions, '\n\n', this.rte.props.component.props.changeRoute);
          sinon.spy(spyObj,this.obj.spyMethod)

    btn.simulate('click')
    sinonUtils.save(changeRouteSpy,'dispatchClick'+this.obj.spyMethod)

    changeRouteSpy.restore();
    console.log('sinonUtils:',sinonUtils);
  }

}
