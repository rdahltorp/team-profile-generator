//This is where the constructor is for the Intern class

const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    };
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getSchool() {
        return this.School;
    };

    getRole() {
        return 'Intern';
    };

}

module.exports = Intern