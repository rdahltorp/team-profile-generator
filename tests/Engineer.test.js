const Engineer = require('../utils/Engineer')

describe('Engineer class', () => {
    it("getName returns the name from the constructed class.", () => {

        const engName = 'Kristin';

        const eng = new Engineer('Kristin', 3, 'kemail@gmail.com', 'GitHub@ddress');
        
        expect(eng.name).toBe(engName);
    });

    it("getId returns the id from the constructed class.", () => {
        const engId = 3;

        const eng = new Engineer('Kristin', 3, 'kemail@gmail.com', 'GitHub@ddress');
        
        expect(eng.id).toBe(engId);
    });

    it("getEmail returns the email from the constructed class.", () => {
        const engEmail = 'kemail@gmail.com';

        const eng = new Engineer('Kristin', 3, 'kemail@gmail.com', 'GitHub@ddress');
        
        expect(eng.email).toBe(engEmail);
    });

    it("getGitHib returns the GitHub username from the constructed class.", () => {
        const engGitHub = 'GitHub@ddress';

        const eng = new Engineer('Kristin', 3, 'kemail@gmail.com', 'GitHub@ddress');

        expect(eng.gitHub).toBe(engGitHub);
    });

    it("getRole return a set value of 'Engineer'.", () => {
        const eng = new Engineer('Kristin', 3, 'kemail@gmail.com', 'GitHub@ddress');
        
        expect(eng.getRole()).toBe('Engineer');
    });
});