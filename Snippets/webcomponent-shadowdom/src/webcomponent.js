(function(){
  let tmpl = document.createElement('template');
      tmpl.innerHTML = `<style>:host{}</style><p>shadow dom</p><slot></slot>`;
  class WebComponent extends HTMLElement
  {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
    connectedCallback()
    { console.log('connected') }
    disconnectedCallback()
    { console.log('disconnected') }

    static get observedAttributes() 
    { return [/*attrName*/] } // return destructured list of attributes to listen to
    /*
      get attrName() { return this.hasAttribute('attrName'); }
      set attrName(val) { (val) ? this.setAttribute('disabled', '') : this.removeAttribute('disabled') }
    */
    attributeChangedCallback(attrName, oldVal, newVal)
    {/* handle side effects only - get/set for logic */}
  }
  window.customElements.define('web-component', WebComponent);
})()