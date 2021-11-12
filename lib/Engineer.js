
const Employee = require('./Employee');

function Engineer(name = '', id, email = '', github = '',) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype.getRole = function() {
    return 'Engineer';
}

Engineer.prototype.getGithub = function() {
    return this.github;
}
module.exports = Engineer;