// Наш герой.

class Hero {
  constructor({ position, boomerang }) {
    this.skin = '😎'; // можете использовать любые emoji '💃' '🤠'
    this.position = position;
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.position = this.position + 1;
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }

  win() {
    this.skin = '🕺';
    console.log('YOU ARRIVED!🕺');
    process.exit();
  }
}

module.exports = Hero;
