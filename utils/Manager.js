//This is where the constructor is for the Manager class

const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, managerOffice) {
        super(name, id, email);
        this.managerOffice = managerOffice;
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

    getOfficeNumber() {
        return this.managerOffice;
    };

    getRole() {
        return 'Manager';
    };
}

module.exports = Manager;