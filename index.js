const Observable = require('rxjs').Observable;
const Oboe = require('oboe');

// create oboe instance
const oboe = Oboe({
  url: 'http://test-streaming.shengsoft.net',
  method: 'GET'
});

// original usage of oboe node event
oboe.on('node', '!.*', function() {
  console.log('from original oboe node event callback');
  console.log(arguments); // here 3 arguments are passed in
  console.log('');
});


// create another oboe instance
const oboe1 = Oboe({
  url: 'http://test-streaming.shengsoft.net',
  method: 'GET'
});

// use fromEventPattern to convert oboe event in Observable
const oboeObs = Observable.fromEventPattern((handler) => {
  oboe1.on('node', '!.*', handler);
});

oboeObs.subscribe(function() {
  console.log('from Observable handler');
  console.log(arguments); // only the first argument is passed in
  console.log('');
});
