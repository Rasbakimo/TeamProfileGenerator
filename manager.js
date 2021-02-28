const Employee = require('./employee');
class Manager extends Employee{
    constructor(officeNumber){
    super(name, id, email, role);
    this.officeNumber = officeNumber;
    }
}
const manager = new Employee('Manager', 10, '@','intern');
