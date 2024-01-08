// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
// two paramters, health and damage
// return health - damage
// if the health - damage is < 0 , return 0 instead of negative

function combat(health, damage) {
    let currentHealth = health - damage;
    if (currentHealth < 0) {
        return 0;
    }
    return currentHealth;
}

function combat(health, damage) {
	return health < damage ? 0 : health - damage
}

const combat = (health, damage) => Math.max(0, health - damage);