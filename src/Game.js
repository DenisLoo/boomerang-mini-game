// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.enemy = new Enemy(this.trackLength - 1);
    this.boomerang = new Boomerang();
    this.hero = new Hero({ position: 0, boomerang: this.boomerang }); // Герою можно аргументом передать бумеранг.
    this.view = new View(trackLength - 20);
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    if (this.hero.position >= this.enemy.position) {
      this.hero.die(); // враг убивает героя
    }
    if (this.boomerang.position >= this.enemy.position - 1) {
      this.enemy.die(); // бумеранг убивает врага
      this.boomerang.direction = 'left';
      this.view.countDead += 1;
      this.enemy = new Enemy(this.trackLength - 1);
    }
    if (this.enemy.position > -1) {
      this.enemy.moveLeft(); // враг идет на героя
    }
    if (this.boomerang.position > -1 && this.boomerang.direction === 'right') {
      this.boomerang.moveRight();
    }
    if (this.boomerang.position >= this.enemy.position) {
      this.boomerang.direction = 'left';
    }
    if (this.boomerang.position > -1 && this.boomerang.direction === 'left') {
      this.boomerang.moveLeft();
    }
    if ((this.boomerang.position <= this.hero.position) && (this.boomerang.position > -1)) {
      this.boomerang.position = -1; // бумеранг исчезает когда возвращается к герою
      this.boomerang.direction = 'right';
    }
    if (this.hero.position >= (this.trackLength - 20)) {
      this.hero.win();
    }
  }

  play() {
    runInteractiveConsole(this.hero);
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 70);
  }
}

module.exports = Game;
