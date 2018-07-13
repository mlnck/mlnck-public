import sinon from 'sinon'
import SinonSingleton from '../_patterns/singleton/singletonBase.pattern'

export const sinonUtils = {
  spy: {
    set: sinon.spy,
    on: (fnc) => { sinon.spy(fnc) },
    using: (o,m) => { sinon.spy(o,m) }
  },
  stub: {
    set: sinon.stub,
    on: (fnc) => { sinon.stub(fnc) },
    using: (o,m) => { sinon.stub(o,m) }
  },
  mock: {
    fnc: (fnc) => sinon.mock(fnc)
  },
  restore:(obj) => obj.method.restore(),
  save:(sin,name=null) =>{
    if(!sin) { throw "Tried to add null to singleton"; }
    SinonSingleton.add(sin,name);
  },
  assert: sinon.assert,
  get: (s) => sinonObj.get(s),
}
