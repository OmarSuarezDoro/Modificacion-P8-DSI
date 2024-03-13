import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { ObservableClass } from '../src/Observable.js';
import { ObserverClass } from '../src/Observer.js';
import { Event } from '../src/Interfaces.js';



describe('Tests class Observer', () => {
  let exampleEvent: Event<number>; 
  let exampleEvent2: Event<number>;
  let exampleEvent3: Event<number>;
  let observer1: ObserverClass;

  beforeEach(() => {
    exampleEvent = { id: 'E1', data: 1 };
    exampleEvent2 = { id: 'E2', data: 2 };
    exampleEvent3 = { id: 'E3', data: 3 };
    observer1 = new ObserverClass('0', 0);
  });
  it('Correct instance of the observer', () => {
    expect(observer1).to.be.instanceof(ObserverClass);
  })
  it('Must change the current id after an event', () => {
    observer1.update(exampleEvent);
    expect(observer1.id).to.be.equal('E1');
    observer1.update(exampleEvent2);
    expect(observer1.id).to.be.equal('E2');
    observer1.update(exampleEvent3);
    expect(observer1.id).to.be.equal('E3');
  })
  it('Must change the current data after an event', () => {
    observer1.update(exampleEvent);
    expect(observer1.data).to.be.equal(1);
    observer1.update(exampleEvent2);
    expect(observer1.data).to.be.equal(2);
    observer1.update(exampleEvent3);
    expect(observer1.data).to.be.equal(3);
  })
});


describe('Tests de la clase Observable', () => {
  let exampleEvent: Event<number>; 
  let exampleEvent2: Event<number>;
  let exampleEvent3: Event<number>;
  let observer1: ObserverClass;
  let observer2: ObserverClass;
  let observable: ObservableClass<number>;

  beforeEach(() => {
    exampleEvent = { id: 'E1', data: 1 };
    exampleEvent2 = { id: 'E2', data: 2 };
    exampleEvent3 = { id: 'E3', data: 3 };
    observer1 = new ObserverClass('0', 0);
    observer2 = new ObserverClass('0', 0);
    observable = new ObservableClass();
  });

  it ('Must suscribe observers to an observable', () => {
    expect(observable.observers.length).to.be.equal(0);
    observable.subscribe(observer1);
    expect(observable.observers[0]).to.be.eql(observer1);
    observable.subscribe(observer2);
    expect(observable.observers[1]).to.be.eql(observer2);
  })

  it ('Must throw an error if the observer is already in the list', () => {
    observable.subscribe(observer1);
    expect(observable.observers[0]).to.be.eql(observer1);
    expect(observable.subscribe(observer1)).to.throw('The element is already an Observer');    
  })

  it ('Must unsuscribe observers to an observable', () => {
    expect(observable.observers.length).to.be.equal(0);
    observable.subscribe(observer1);
    expect(observable.observers[0]).to.be.eql(observer1);
    observable.unsubscribe(observer1);
    expect(observable.observers.length).to.be.equal(0);
  })

  it ('Must throw an error if the observer is not in the list', () => {
    observable.subscribe(observer1);
    expect(observable.observers[0]).to.be.eql(observer1);    
    expect(observable.unsubscribe(observer2)).to.throw('The element is already an Observer');
  })

  it ('Must update the state of observers', () => {
    observable.subscribe(observer1);
    observable.subscribe(observer2);
    observable.notify(exampleEvent);
    let auxObserver: ObserverClass = new ObserverClass('E1', 1);
    expect(observable.observers[0]).to.be.eql(auxObserver);
    auxObserver = new ObserverClass('E2', 2);
    observable.notify(exampleEvent2);
    expect(observable.observers[0]).to.be.eql(auxObserver);
    auxObserver = new ObserverClass('E3', 3);
    observable.notify(exampleEvent3);
    expect(observable.observers[0]).to.be.eql(auxObserver);

  })
});