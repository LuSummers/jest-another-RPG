const Enemy = require ('../lib/Enemy');
const Potion = require ('../lib/Potion');

jest.mock('../lib/Potion.js');

test ("get's enemy's health value", () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test ("checks if player is alive or not", () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.isAlive()).toBeTruthy();
    enemy.health = 0;
    expect(enemy.isAlive()).toBeFalsy();
});

test ("subtract from enemy's health", () => {
    const enemy = new Enemy ('goblin', 'sword');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

 expect(enemy.health).toBe(oldHealth - 5) ;

enemy.reduceHealth (9999);

expect(enemy.health).toBe(0);

});


test("gets enemy's attack value", () => {
const enemy = new Enemy('goblin', 'sword');
enemy.strength = 10;

expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
 
});
test ('gets a descripyion of the enemy',() => {
    const enemy = new Enemy ('goblin', 'sword');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));

});