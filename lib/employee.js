class Employee {
    constructor(name, id, email, role){
    this.name=name;
    this.id =id;
    this.email=email;
    this.role=role;
    };
    // printInfo(){
    //     console.log(`name: ${this.name}`)
    //     console.log(`id: ${this.id}`)
    //     console.log(`emil: ${this.email}`)
    //     console.log(`role: ${this.role}`)
    // }
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
    return "Employee"
    };
   

}
 
module.exports = Employee