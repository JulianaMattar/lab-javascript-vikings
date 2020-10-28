// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }

    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let angryViking = this.vikingArmy[randomViking];
    let angrySaxon = this.saxonArmy[randomSaxon];

    const win = angrySaxon.receiveDamage(angryViking.strength);

    if (angrySaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }

    return win;
  }

  saxonAttack() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let angryViking = this.vikingArmy[randomViking];
    let angrySaxon = this.saxonArmy[randomSaxon];

    const win = angryViking.receiveDamage(angrySaxon.strength);

    if (angryViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }

    return win;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    }

    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    }

    if (this.vikingArmy.length >= 1 || this.saxonArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
