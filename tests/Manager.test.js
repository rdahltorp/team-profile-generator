const Manager = require('../utils/Manager');

describe('Engineer class', () => {
    it("getName returns the name from the constructed class.", () => {

        const mngName = 'Shenzi';

        const mng = new Manager('Shenzi', 1, 'shen@gmail.com', 53);
        
        expect(mng.name).toBe(mngName);
    });

    it("getId returns the id from the constructed class.", () => {
        const mngId = 1;

        const mng = new Manager('Shenzi', 1, 'shen@gmail.com', 53);
        
        expect(mng.id).toBe(mngId);
    });

    it("getEmail returns the email from the constructed class.", () => {
        const mngEmail = 'shen@gmail.com';

        const mng = new Manager('Shenzi', 1, 'shen@gmail.com', 53);
        
        expect(mng.email).toBe(mngEmail);
    });

    it("getOfficeNumber returns the intern;s school from the constructed class.", () => {
        const mngOffice = 53;

        const mng = new Manager('Shenzi', 1, 'shen@gmail.com', 53);

        expect(mng.managerOffice).toBe(mngOffice);
    });

    it("getRole return a set value of 'Manager'.", () => {
        const mng = new Manager('Shenzi', 1, 'shen@gmail.com', 53);
        
        expect(mng.getRole()).toBe('Manager');
    });
});