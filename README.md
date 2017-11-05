## rxjs-fep-arguments-problem-showcase

This repo is only for showing a possible simple use case of passing multiple arguments from event emitter to Observable that created with `fromEventPattern`. The relavent issue is https://github.com/ReactiveX/rxjs/issues/3048 , https://github.com/ReactiveX/rxjs/issues/2431 and PR https://github.com/ReactiveX/rxjs/pull/3049 .

#### explanation:

The simple use case is about to use [Oboe](http://oboejs.com/api) to consume a json-streaming server. The server returns every second only a part of a whole json object. Observable is introduced to process the data returned from the json-streaming server. But it got only the first argument while the original Oboe event passed 3 arguments in event handler.
