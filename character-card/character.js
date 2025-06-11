const character = {
      name: "Thrum",
      class: "Forge Brute",
      level: 5,
      health: 100,
      image: './character.png',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

let card = document.querySelector('.card');
let image = document.querySelector('.image');
let name = document.querySelector('.name');
let className = document.querySelector('#class');
let level = document.querySelector('#level');
let health = document.querySelector('#health');
let attacked = document.querySelector('#attacked');
let levelUp = document.querySelector('#levelup');
let log = document.querySelector('#log');


image.src = character.image;
name.textContent = character.name;
className.textContent = character.class;
level.textContent = character.level;
health.textContent = character.health;


function updateCard(action) {
  if (action === 'attacked') {
    character.attacked();
  } else if (action === 'levelup') {
    character.levelUp();
  }

  level.textContent = character.level;
  health.textContent = character.health;
  log.innerHTML = '';
  log.textContent += `Action: ${action}, Level: ${character.level}, Health: ${character.health}\n`;
}

attacked.addEventListener('click', () => {
  updateCard('attacked');
});
levelUp.addEventListener('click', () => {
  updateCard('levelup');
})