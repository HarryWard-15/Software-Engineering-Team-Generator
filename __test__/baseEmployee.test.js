const Employee = require('../lib/baseEmployee');

describe("Employee", () => {
    describe("initialize", () => {
        it("Should return 'object'", () => {
            const newEmployee = new Employee();
  
            expect(typeof(newEmployee)).toBe('object');
        });
    }); 
    describe("Name", () => {
        it("Should return 'Harry'", () => {
            const name = "Harry";
            const newEmployee = new Employee(name);
    
            expect(newEmployee.name).toEqual('Harry');
        });
      }); 
    describe("ID", () => {
        it("Should return 5", () => {
            const id = 5;
            const newEmployee = new Employee("Harry", id);
    
            expect(newEmployee.id).toEqual(5);
        });
    }); 
    describe("Email", () => {
        it("Should return hward.1508@gmail.com", () => {
            const email = "hward.1508@gmail.com";
            const newEmployee = new Employee("Harry", 5, email);
    
            expect(newEmployee.email).toEqual(email);
        });
    }); 
    describe("getName()", () => {
        it("Should return 'Harry'", () => {
            const getName = "Harry";
            const newEmployee = new Employee(getName);
    
            expect(newEmployee.getName()).toEqual('Harry');
        });
      }); 
    describe("getID()", () => {
        it("Should return 5", () => {
            const getId = 5;
            const newEmployee = new Employee("Harry", getId);
    
            expect(newEmployee.getId()).toEqual(5);
        });
    }); 
    describe("getEmail()", () => {
        it("Should return hward.1508@gmail.com", () => {
            const getEmail = "hward.1508@gmail.com";
            const newEmployee = new Employee("Harry", 5, getEmail);
    
            expect(newEmployee.getEmail()).toEqual('hward.1508@gmail.com');
        });
    });
    describe("getRole()", () => {
        it("Should return 'Employlee'", () => {
            const getRole = "Employee";
            const newEmployee = new Employee("Harry", 5, "hward.1508@gmail.com");
    
            expect(newEmployee.getRole()).toEqual('Employee');
        });
    });
  });