// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(length) {
    this.length = length;
    this.countDead = 0;
  }

  render(track) {
    const yourTeamName = 'Merdzhen | Elbrus_2022';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('🖱'.repeat(this.length));
    console.log(`\n\nYou killed ${this.countDead} enemies on yor way`);
    console.log('\n');
    console.log(`Created by ${yourTeamName}\n`);
  }
}

module.exports = View;
