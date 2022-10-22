//This is where the constructor is for the Engineer class

const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getGitHub() {
        return this.gitHub;
    };

    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;