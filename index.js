module.exports = class LifeCycle {
  constructor() {
    this.events = {};
  }

  on(event_name, callback) {
    if(!this.events[event_name]) {
      this.events[event_name] = [];
    }
    this.events[event_name].push(callback)
  }

  trigger(event_name, ...args) {
    if(!this.events[event_name]) {
      return;
    }

    this.events[event_name].forEach(callback => callback(...args))
  }
}
