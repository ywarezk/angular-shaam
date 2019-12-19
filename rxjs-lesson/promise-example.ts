

// Promise

// promise wraps async code
// class
// promise is in one of these states
// - pending
// - resolved / rejected
// promise sends resolve or reject once

const myTimerPromise : Promise<string> = new Promise((resolve, reject) => {
    console.log('how many times Promise is this running?');
    setTimeout(() => {
        resolve('hello world');
        // resolve('hello world2');
        // reject(new Error('something happened'))
    }, 1000)

    // document.getElementById('myButton').addEventListener('click', function() {
    //     resolve()
    // });

});

myTimerPromise.then(
    // when promise resolved
    (msg : string) => {

    },

    // when promise rejected
    (err : Error) => {

    }
)

myTimerPromise.then((msg: string) => {

})



