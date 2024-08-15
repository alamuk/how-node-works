### EventEmitter is a class
### it requires events module 
new class object

Event emitter has method which listening of the emit function every time when is the event happened.

## on 
means - we are listening a event.
- it is a listener method of Event emitter class 



## best practice to create new class which will actually inherit from the node Eventemitter.
```javascript
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales(); 
```
* Sales - parent class
* EventEmitter - super class 
``` 
super is used in the context of class inheritance. 
It is used to call the constructor or methods of a parent class. 
This is particularly useful when you want to extend or override functionality from 
a parent class in a subclass.
```
* by running, we are getting access to the method of the parent class. 
* this way all class created - http, file system and many other core modules. 
* all them actually inherited EventEmitter Class. 

### streams
Used to process (read and write) data piece by piece(chunks), 
without completing the whole read or write operation and therefore, 
without keeping all the data in memory. 

### stream in node 
- readable stream - we can read/ consume data = e.g: http req, fs read steams = consume stream
```
streams are actually instance of the EventEmitter Class. 
so, readable steam - then can emit and we can listen to many different events. 
- most important events are 
1. data and 
2. end

- most important functions are: 
1. pipe()
2. read()
```
- writeable stream - stream by which we can write data = http res,fs write steams = consume stream
``` 
- most important events are 
1. drain
2. finish

- most important functions are: 
1. write()
2. end()

```
- duplex stream
```
streams both readable and writeable e.g. net web spcket
```
- transform stream - its is transform data as it is written and read - zlib Gzip creation.


## each js file is treated as a separate Module. 
### commonJS Module system:
```
to explore the Data from js file/ module 
we use require function require('')
this is a commonJS Module system: -  require(), exports , module.exports

```
### Es module system
```
in used in browser: import/ export 


```

## Modules: type
## Core module        # require('http')
```
firts start with core module by thier the name 

```
## Developer module   # require('.lib/controller')
```
if begine with dot: # '. '  or ../ its from developer Module;
if no file found - then try to file try with index.js 
# require('.lib/controller')
```
## 3rd party module   # require('express')
```
here we need to remember that we load from NPM 
we dont need to file path.
just module name 
require('express')
```

## what module get: 
(function ( require, export, module, __filename, __dirname ))
* require('') = function = function to require module
* module = object = reference to the current module.
* export = object = reference to module.export, used to export object from the module
* __filename = variable = absolute path of the current module's file
* __dirname = variable = directory name of the current module

### returning export 
require function returns 'export' of the required module
module.exports—is the returned object(important)
``` 
when one single variable - like one class/ one function - we will use = module.export.
when multiple variable/ funcrion / class - we will use - those as a property of the export module. 
like - export.add / export.multiply from a calculater module. 


this works for both import and export object. 
```

