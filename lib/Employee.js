class Employee {
    constructor(name, id, email, role) {
    this.name = name
    this.id = id
    this.email = email
}
getName() {};
getId() {};
getEmail() {};
getRole() {
    return ('Manager')
};}

const Employee = new Employee('John Doe','3', 'emaily@boy.com', 'Manager');

console.log(Employee);