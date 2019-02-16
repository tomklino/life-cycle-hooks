# life-cycle-hooks
A clean way to bind functions to events in custom code

## Install

```bash
npm i --save life-cycle-hooks
```

## Usage

Start by initializing a lifecycle object:

```js
const LifeCycle = require('life-cycle-hooks');
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

## Example use case

Suppose you have a websocket server, and you want to respond differently for mobile and desktop:

```js
ws_server.on('connection', async function connection(ws, req) {
  if(isMobile(req)) {
    lifecycle.trigger('mobile_connection', ws);
  } else {
    lifecycle.trigger('desktop_connection', ws);
  }
}
```

You can then return `lifecycle`, and in another part of your code, do the following:

```js
lifecycle.on('mobile_connection', (ws) => {
  ws.send('hello mobile user');
});

lifecycle.on('desktop_connection', (ws) => {
  ws.send('hello desktop user');
});
```
