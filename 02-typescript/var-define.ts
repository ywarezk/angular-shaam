// how to define variable with typescript

var myString : string = 'hello';
let myNumber = 10;
const myBoolean : boolean = true;

myString = 'world';

// myBoolean = false;

myNumber = 40;
// myNumber = 'hello';

function hello(stamBoolean : boolean) : void {
    if (stamBoolean) {
        var message = 'hello';
    } else {
        var message = 'world';
    }
    console.log(message);
}

// var error = new Error();

function stamError() {
    // ...


    // if (true) {
    //     var error = new Error('something happened');
    // }

    // let er
    // if (error) {
    //     throw error;
    // }


    // if (something) {
    //     var message = 'hello';
    // }


    // if (somethingElse) {
    //     var message = 'else';
    // }


    // console.log(message);
}

