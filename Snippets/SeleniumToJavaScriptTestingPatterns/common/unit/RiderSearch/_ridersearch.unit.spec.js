import unitValidator from './validator'

import { RiderSearch } from './base'

describe('Rider Search Common Component (Unit)', () => {
  let componentBase;

  beforeEach(() => componentBase = new RiderSearch(unitValidator,'render'));

  test('Rider Search has input field', ()=>{
    componentBase.Validate().hasInputField();
    componentBase.Validate().hasPlaceholderText('Search by Rider Name, DOB, Rider or Ride ID#, Phone or Address')
  })

  test('Layout is unchanged', () =>
  { componentBase.Snap() })

});
