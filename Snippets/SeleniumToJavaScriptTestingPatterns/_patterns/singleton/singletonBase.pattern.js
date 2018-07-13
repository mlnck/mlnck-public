class SingletonBase
{
  constructor()
  {
   if(!SingletonBase.instance)
   {
     this._data = [];
     SingletonBase.instance = this;
   }
   return SingletonBase.instance;
  }

  add(item,ref)
  {
    item.id = ref || this._data.length
    this._data.push(item);
  }

  get(id)
  { return this._data.find(d => d.id === id); }

  remove(id)
  { this._data.forEach((itm,indx)=>{ if(itm.id === id){ this._data.splice(indx,1) } }) }

}

const instance = new SingletonBase();
Object.freeze(instance);

export default instance;
