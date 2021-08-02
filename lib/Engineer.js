const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, github){
        super(name, id, email);
  this.github = github;
  this.role = 'Engineer'
}}
module.exports = Engineer;
