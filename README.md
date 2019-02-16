# life-cycle-hooks
A clean way to bind functions to events in custom code

## Install

```bash
npm i --save life-cycle-hooks
```

## Usage

Start by initializing a lifecycle object:

```js
const LifeCycle = require('./lifecycle.js');
const lifecycle = new LifeCycle();
```

Then, to attach events:

```js
lifecycle.on('some_event', (args, sent, by, event) => {
  console.log("some event happened")
})
```

To trigger all events bound to 'some_event':

```js
lifecycle.trigger('some_event', "args", "to", "the", "bound", "function")
```
