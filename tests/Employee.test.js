const Employee = require('../utils/Employee')

describe('Employee class', () => {
    it("getName returns the name from the constructed class.", () => {

        const empName = 'Reed';

        const emp = new Employee('Reed', 2, 'email@gmail.com');
        
        expect(emp.name).toBe(empName);
    });

    it("getId returns the id from the constructed class.", () => {
        const empId = 2;

        const emp = new Employee('Reed', 2, 'email@gmail.com');
        
        expect(emp.id).toBe(empId);
    });

    it("getEmail returns the email from the constructed class.", () => {
        const empEmail = 'email@gmail.com';

        const emp = new Employee('Reed', 2, 'email@gmail.com');
        
        expect(emp.email).toBe(empEmail);
    });

    it("getRole return a set value of 'Employee'.", () => {
        const emp = new Employee('Reed', 2, 'email@gmail.com');
        
        expect(emp.getRole()).toBe('Employee');
    });
});

