
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Brian', 1, 'bpkaufman4@gmail.com', 'bpkaufman4');

    expect(engineer.name).toBe('Brian');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('bpkaufman4@gmail.com');
    expect(engineer.github).toBe('bpkaufman4');
});

test('gets the engineers role', () => {
    const engineer = new Engineer('Brian', 1, 'bpkaufman4@gmail.com', 'bpkaufman4');

    expect(engineer.getRole()).toBe('Engineer');
});

test('gets the engineers github username', () => {
    const engineer = new Engineer('Brian', 1, 'bpkaufman4@gmail.com', 'bpkaufman4');

    expect(engineer.getGithub()).toBe('bpkaufman4');
});