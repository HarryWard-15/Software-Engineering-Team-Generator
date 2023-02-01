const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("School", () => {
        it("Should be equal to 'UWA'", () => {
            const school = 'UWA';
            const newIntern = new Intern("Harry", 1, "hward.1508@gmail.com", school);
  
            expect(newIntern.school).toEqual(school);
        });
    }); 
    describe("getRole()", () => {
        it("Should return 'Intern'", () => {
            const newIntern = new Intern("Harry", 1, "hward.1508@gmail.com", 'UWA');
  
            expect(newIntern.getRole()).toEqual('Intern');
        });
    });
    describe("getSchool()", () => {
        it("Should return 'UWA'", () => {
            const newIntern = new Intern("Harry", 1, "hward.1508@gmail.com", 'UWA');
  
            expect(newIntern.getSchool()).toEqual('UWA');
        });
    }); 
});