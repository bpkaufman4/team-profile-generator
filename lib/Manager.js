const Employee = require('./Employee');

function Manager(name = '', id, email = '', officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getRole = function() {
    return 'Manager';
}

module.exports = Manager;