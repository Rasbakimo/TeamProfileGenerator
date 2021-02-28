class Employee {
    constructor(name, id, email, role){
    this.name=name;
    this.id =id;
    this.email=email;
    this.role=role;
    };
    Employee.prototype.printStats = function () {
        console.log(
          `Name: ${this.name}\nId: ${this.id}\nEmail: ${this.email}\nRole: ${this.role}}`
        );
        console.log('\n-------------\n');
      };
     
     getName(){
     return this.name
    };
    getId() {
    return this.id
    };
    getEmail() {
    return this.email
    }
    getRole(){
    return this.role
    }
   

}
 
const employee = new Employee('Employee', 10, '@','role');
// const grace = new Character('Grace', 30, 75);
employee.getName()
console.log(employee.getName());
employee.getId()
console.log(employee.getId());
employee.getemail()
console.log(employee.getEmail());
employee.getRole()
console.log(getRole());



module.exports = Employee