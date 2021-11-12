
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Brian', 1, 'bpkaufman4@gmail.com', 182);

    expect(manager.name).toBe('Brian');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('bpkaufman4@gmail.com');
    expect(manager.officeNumber).toBe(182);
});

test('gets the managers role', () => {
    const manager = new Manager('Brian', 1, 'bpkaufman4@gmail.com', 182);

    expect(manager.getRole()).toBe('Manager');
});
