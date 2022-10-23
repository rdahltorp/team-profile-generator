const Intern = require('../utils/Intern')

describe('Intern class', () => {
    it("getName returns the name from the constructed class.", () => {

        const intName = 'Riley';

        const int = new Intern('Riley', 4, 'Rye@gmail.com', 'University of Denver');
        
        expect(int.name).toBe(intName);
    });

    it("getId returns the id from the constructed class.", () => {
        const intId = 4;

        const int = new Intern('Riley', 4, 'Rye@gmail.com', 'University of Denver');
        
        expect(int.id).toBe(intId);
    });

    it("getEmail returns the email from the constructed class.", () => {
        const intEmail = 'Rye@gmail.com';

        const int = new Intern('Riley', 4, 'Rye@gmail.com', 'University of Denver');
        
        expect(int.email).toBe(intEmail);
    });

    it("getSchool returns the intern's school from the constructed class.", () => {
        const intSchool = 'University of Denver';

        const int = new Intern('Riley', 4, 'Rye@gmail.com', 'University of Denver');

        expect(int.school).toBe(intSchool);
    });

    it("getRole return a set value of 'Intern'.", () => {
        const int = new Intern('Riley', 4, 'Rye@gmail.com', 'University of Denver');
        
        expect(int.getRole()).toBe('Intern');
    });
});