# A Verbose Console Extension for Front-End JavaScript Debugging

This allows you to more easily see the variables, strings, and objects that you wish to print out in the Developer's Tool console.
It returns a "pretty print" version of what you would console log.

With the built in _console.log_ method you would see something along the lines of:
![Console Log](console-log.png)

With the _console.debug_ method you will see something along the lines of:
![Console Log](console-debug.png)

##Usage:
Import the script into your page.
That will allow you access to the _console.debug_ method.

By default each item that you log will be logged on its own line.
There will be recursively nested tables that display for each array and object within the item.

###Options
In addition to displaying the format using _console.log_ you can also specify to use _info_, _warn_, or _error_.
You do this by passing the display option as the first argument:
```javascript
  console.debug(console.WARN,'username','password',arr,obj,'strVar:',strVar);
```
The options are:
* console.LOG (default)
* console.INFO
* console.ERR
* console.WARN

You are also able to globally set the log level for all output using _console.debug_.
You do this by calling using the _setLogLevel_ method.
```javascript
  console.setLogLevel(console.DEBUG);
```
The options are:
* console.DEBUG (default)
* console.NORM (displays the generic _console.log_ method)
* console.PROD (suppresses all logging)

If you want to override the log level for a single console statement, you can do so by chaining the _isLevel_ method to the beginning of the _debug_ method.
```javascript
  console.setLogLevel(console.PROD);
  console.debug(console.WARN,'username','password',arr,obj,'strVar:',strVar); //will not display due to logLevel being set to "PROD" above
  console.isLevel(console.DEBUG).debug(console.ERROR,'username','password',arr,obj,'strVar:',strVar); //will display using "pretty print" style
```

Lastly, although it is not fully supported by all browsers, you can enable profiling.
_**WARNING:**_ This will _greatly_ decrease load time and increase memory usage.
