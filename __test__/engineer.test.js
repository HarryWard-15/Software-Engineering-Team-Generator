const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("gitHub", () => {
        it("Should be equal to 'harryward-15'", () => {
            const gitHubUser = 'harryward-15';
            const newEngineer = new Engineer("Harry", 1, "hward.1508@gmail.com", gitHubUser);
  
            expect(newEngineer.GitHub).toEqual(gitHubUser);
        });
    }); 
    describe("getRole()", () => {
        it("Should return 'Engineer'", () => {
            const newEngineer = new Engineer("Harry", 1, "hward.1508@gmail.com", 'harryward-15');
  
            expect(newEngineer.getRole()).toEqual('Engineer');
        });
    });
    describe("getGitHub()", () => {
        it("Should return 'harryward-15'", () => {
            const getGitHub = 'harryward-15';
            const newEngineer = new Engineer("Harry", 1, "hward.1508@gmail.com", getGitHub);
  
            expect(newEngineer.getGitHub()).toEqual(getGitHub);
        });
    }); 
});