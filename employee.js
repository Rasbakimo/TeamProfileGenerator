class Employee {
    constructor(name, id, email, role){
    this.name=name;
    this.id =id;
    this.email=email;
    this.role=role;
    };
    printInfo(){
        console.log(`name: ${this.name}`)
        console.log(`id: ${this.id}`)
        console.log(`emil: ${this.email}`)
        console.log(`role: ${this.role}`)
    }
     getName() {
     return this.name
    };
    getId() {
    return this.id
    };
    getEmail() {
    return this.email
    };
    getRole(){
    return this.role
    };
   

}
 
const employee = new Employee('Employee', 10, '@','role');
// const grace = new Character('Grace', 30, 75);
employee.getName()
console.log(employee.getName());
employee.getId()
console.log(employee.getId());
employee.getEmail()
console.log(employee.getEmail());
employee.getRole()
console.log(employee.getRole());



module.exports = Employee