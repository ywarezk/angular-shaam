

const hello = () => {
    console.log('hello world')
}


class Person {
    // name : string = 'hello';
    public _age = 34;
    protected hello = 'world'

    constructor(public name = 'hello') {
        // let hello = 'world';
    }

    birthday() {
        // ?
        this._age++;
    }

    birthday2 = () => {
        // this === instance
        this._age++;
    }

    private _stam() {
        console.log('hello world');
    }
}



const yariv = new Person();

console.log(yariv._age); // 34

yariv.birthday2();

console.log(yariv._age); // 35

const a = {stam: yariv.birthday2}

// const stam = yariv.birthday;
// stam();
a.stam();

console.log(yariv._age); // 36



// class Child extends Person {

// }

abstract class Hello {

}

// const hello = new Hello();

class StamHello extends Hello {

}

const stamHello = new StamHello();



class MySingleton {

    static instance : MySingleton;

    static getInstance(){
        if (MySingleton.instance) {
            return MySingleton.instance;
        } else {
            MySingleton.instance = new MySingleton()
            return MySingleton.instance
        }
    }

    private constructor() {

    }



}

// MySingleton.getInstance();

// MySingleton.getInstance = MySingleton.getInstance.bind(MySingleton);

// const b = {getInstance : MySingleton.getInstance};





