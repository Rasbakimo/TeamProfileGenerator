const Employee = require('./employee');
class Engineer extends Employee {
    constructor( github){
    super(name, id, email, role);
   
    this.github = github
    }
}
const employee = new Employee('Employee', 10, '@','intern');
