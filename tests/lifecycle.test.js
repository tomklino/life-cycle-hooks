const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const expect = chai.expect;

const LifeCycle = require('../index.js');

describe('basic tests', () => {
  it('should trigger an event that was bound', (done) => {
    const lifecycle = new LifeCycle();
    const mockFunction = sinon.spy();

    lifecycle.on('some_event', mockFunction);

    lifecycle.trigger('some_event');

    expect(mockFunction).to.have.been.called;
    done();
  });

  it('should trigger an event more as many times as it was triggered', (done) => {
    const lifecycle = new LifeCycle();
    const mockFunction = sinon.spy();

    lifecycle.on('some_event', mockFunction);

    lifecycle.trigger('some_event');
    lifecycle.trigger('some_event');
    lifecycle.trigger('some_event');

    expect(mockFunction).to.have.been.calledThrice;
    done();
  });

  it('should pass arguments from trigger', (done) => {
    const lifecycle = new LifeCycle();
    const mockFunction = sinon.spy();

    lifecycle.on('some_event', mockFunction);

    lifecycle.trigger('some_event', 1, 2, 3);

    expect(mockFunction).to.have.been.calledWith(1, 2, 3);
    done();
  });

  it('should not trigger events not bound', (done) => {
    const lifecycle = new LifeCycle();
    const mockFunction = sinon.spy();

    lifecycle.on('some_event', mockFunction);

    lifecycle.trigger('some_other_event');

    expect(mockFunction).to.not.have.been.called;
    done();
  })

  // lifecycle.on('short_input', (msg, length) => {
  //   console.log(`a short input of length ${length}:`, msg);
  // })
  //
  // lifecycle.on('long_input', (msg, length) => {
  //   console.log(`long input of length ${length}:`, msg);
  // })
  //
  // process.stdin.on('data', (data) => {
  //   const message = data.toString();
  //   if(message.length < 9) {
  //     lifecycle.trigger('short_input', message, message.length);
  //   } else {
  //     lifecycle.trigger('long_input', message, message.length);
  //   }
  //   lifecycle.trigger('finally', message);
  // })
})
