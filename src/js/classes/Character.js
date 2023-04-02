export default class Character {
  constructor(name, type) {
    const types = [
      "Bowman",
      "Swordsman",
      "Magican",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (name.length > 2 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error("некорректное значение name");
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error("некорректное значение type");
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.level > 0) {
      this.level += 1;
      this.health = 100;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    } else {
      throw new Error("нельзя повысить левел умершего");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error("Герой мертв");
    }
  }
}
