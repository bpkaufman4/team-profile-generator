const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Brian', 1, 'bpkaufman4@gmail.com', 'KU');

    expect(intern.name).toBe('Brian');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('bpkaufman4@gmail.com');
    expect(intern.school).toBe('KU');
});

test('gets the interns role', () => {
    const intern = new Intern('Brian', 1, 'bpkaufman4@gmail.com', 'KU');

    expect(intern.getRole()).toBe('Intern');
});

test('gets the interns school', () => {
    const intern = new Intern('Brian', 1, 'bpkaufman4@gmail.com', 'KU');

    expect(intern.getSchool()).toBe('KU');
});