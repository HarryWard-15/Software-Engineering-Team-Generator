const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("OfficeNumber", () => {
        it("Should be equal to 100", () => {
            const office = 100;
            const newManager = new Manager("Harry", 1, "hward.1508@gmail.com", office);
  
            expect(newManager.office).toEqual(office);
        });
    }); 
    describe("getRole()", () => {
        it("Should return 'Manager'", () => {
            const newManager = new Manager("Harry", 1, "hward.1508@gmail.com", 100);
  
            expect(newManager.getRole()).toEqual('Manager');
        });
    });
});