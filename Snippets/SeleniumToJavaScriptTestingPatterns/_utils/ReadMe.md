### Testing Utils

## Deciding Which Library to Use
#### Jest
- Used to set up the testing structure, describes, beforeAlls, etc.
- Use for all component mocks
- As of version 20+ we should now use Jest for all async & non-async actions, spies where data is being mocked

#### Enzyme
- Enzyme is used to render the initial testable component
- And for all DOM Interactions (click, submit, focus, etc)

#### Sinon
- Sinon is used for all stubs and spies (both async & non-async) where non-mocked data is returned

---
## Enzyme Basic Information
### Rendering

  #### Shallow

  - shallow rendering methods available:
    - constructor
    - componentWillMount
    - render
    - setProps()
    - componentWillReceiveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - render

  #### Mount

  - Full DOM Rendering
  - mount rendering methods available
    - constructor
    - componentWillMount
    - render
    - componentDidMount
    - setProps()
    - componentWillReceiveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - render
    - componentDidUpdate

  #### Render

  - Static Rendering API
    - renders to static HTML
  - render rendering methods available
    - constructor
    - componentWillMount
    - render

---
## Sinon Basic Information
### Main Methods

> Note: Only meant to work on class methods, not members with a function type (e.g. functions bound in constructor not coming from props/state)

> Note: Sinon also needs to be handled differently. We must decalare/instantiate the spy/stub/mock outside of the component itself, but then rely on interactions after the component has mounted to trigger its methods.
> The most efficient way that I have found (with this set of patterns) is to include the methods within a singleton. Because they will be closely coupled the singleton is included within the sinonUtils package.

#### Spies
- In practice, you might not use spies very often.
- You're more likely to need a stub, but spies can be convenient for example to verify a callback was called:
  - _MAIN METHODS_
    1. Can be spied on action dispatch:
      - `sinon.spy(ReactComponent.myMethod())``
    1. Or set to be a watcher:
      - ```
        var setNameSpy = sinon.spy(user, 'setName');
        user.setName('Darth Vader');
        console.log(setNameSpy.callCount);
        ```
  - _IMPORTANT_: remember to restore the original function:
      `setNameSpy.restore();`

  - _SPY TYPES_
    - ANONYMOUS:
        `var spy = sinon.spy();`
        Creates an anonymous function that records arguments, this value, exceptions and return values for all calls.
    - FUNCTION:
        `var spy = sinon.spy(myFunc);`
        Spies on the provided function
    - OVERWRITE FUNCTION:
        `var spy = sinon.spy(object, "method");`
        Creates a spy for `object.method` and replaces the original method with the spy.
        -  An exception is thrown if the property is not already a function.
        -  The spy acts exactly like the original method in all cases.
        -  The original method can be restored by calling object.method.restore().
        -  The returned spy is the function object which replaced the original method.
          - `spy === object.method`.

---
#### Stubs
  Stubs are the go-to test-double because of their flexibility and convenience. They have all the functionality of spies, but instead of just spying on what a function does, a stub completely replaces it. In other words, when using a spy, the original function still runs, but when using a stub, it doesn’t.

  This makes stubs perfect for a number of tasks, such as:

  Replacing Ajax or other external calls which make tests slow and difficult to write
  Triggering different code paths depending on function output
  Testing unusual conditions, for example what happens when an exception is thrown?

---
#### Mocks
  Mocks are a different approach to stubs. If you’ve heard the term “mock object”, this is the same thing — Sinon’s mocks can be used to replace whole objects and alter their behavior similar to stubbing functions.

  They are primarily useful if you need to stub more than one function from a single object. If you only need to replace a single function, a stub is easier to use.

  The rule of thumb is:
    > if you wouldn’t add an assertion for some specific call, don’t mock it. Use a stub instead.

  > In general you should have no more than one mock (possibly with several expectations) in a single test.

---

#### Set Up
  Since Sinon affects the flow and return of the logic you need to propogate the test at a couple points.
  - In `__tests__/nav|routes/**/nav|page/sinonBase.js` we create a const that will hold the function and data to return if needed (stubs,mocks).
  > - NOTE: I plan on integrating with backend soon - this step will change.

  - In the same file we add the function name and the desired method call to the exported  `SinonBaseNav***` variable (_This is a var instead of a const to allow scalability with sinonUtil methods_)
  - In `__tests__/nav|routes/**/nav|page/base.js` we define and instantiate the Sinon Object.
    - We pass it directly into the component in the `super` method
    - We can then add it to the singleton (if desired)
  - We now have access to it in any behaviour, validation, or spec file.
  - Remember to call the `restore` method (if needed) after the assertion has taken place
