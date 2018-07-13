/*
These will need to be reworked. Placing here so I don't forget about them.
 Something like Promise.prototype.del/get/etc would be the best point to start.
 Don't think we'll be able to use promises/generators nicely with this - need to start with the source
*/
export function* del(s,o=null){ let data = yield doFetch(s,'DELETE',o); return data }
export function* get(s,o=null){ let data = yield doFetch(s,'GET',o); return data }
export function* put(s,o=null){ let data = yield doFetch(s,'PUT',o); return data }
export function* post(s,o=null){ let data = yield doFetch(s,'POST',o); return data }

function* doFetch(s,m,o)
{
  o.method = m;
  const fetched = yield fetch(s,o)
    .then((response) =>
    { return response.json(); })
    .catch(err => console.error(err) );
  return fetched;
}
