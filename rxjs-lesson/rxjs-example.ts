// RXJS

import {Observable, Subscription, Subject, BehaviorSubject, interval} from 'rxjs';

// Promise resolved once
// Observable has many next

// Observable states
// cold
// hot
// closed

// observable is lazy

// observable is duplicated to every listener

// complete
// error


const myIntervalObservable : Observable<string | number> = new Observable((observer) => {
    console.log('how many times is this running?')
    let counter = 0;
    setInterval(() => {
        counter++;
        if (counter < 5) {
            observer.next('hello world'); 
        } else {
            // observer.complete();
            observer.error(new Error('something happened'));
        }
        // observer.next('hello world');
        // observer.error(new Error('something happened'));
        
    }, 1000);

    // servercall(function() { observer.next})
});

const sub : Subscription = myIntervalObservable.subscribe(
    // next
    (msg) => {

    },

    (err : Error) => {

    }
)

sub.unsubscribe();

myIntervalObservable.subscribe(
    // next
    (msg) => {

    },

    (err : Error) => {

    }
)


const myExampleSubject : Subject<string> = new Subject();


setInterval(() => {
    myExampleSubject.next('hello world');
}, 1000)


// myExampleSubject.complete();
// myExampleSubject.error(new Error());


const sub1 = myExampleSubject.subscribe((msg: string) => {

})

myExampleSubject.next('hello world');

sub1.unsubscribe();





interval(1000)
