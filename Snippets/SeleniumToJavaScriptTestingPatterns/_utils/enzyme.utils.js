export function inputChangeHelper(s){
  return { target: { value: String(s) } }
}
export function enzymeElement(o)
{ return o.get(0); }
export function setState(o,oo)
{ return o.rendered.setState(oo) }
