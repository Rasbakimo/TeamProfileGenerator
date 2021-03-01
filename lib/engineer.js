const Employee = require('./employee');
class Engineer extends Employee {
    constructor(name, id, email, github){
    super(name, id, email, role);
    this.github = github
    }
    getRole() {
        return "Engineer";
    };
    getGitHub() {
        return this.github;
       };
}

module.exports = Engineer