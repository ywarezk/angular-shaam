export class User {
    firstName : string = '';
    lastName : string = '';

    get fullName() {
        return this.firstName + this.lastName;
    }
}

