import img from '../img/goblin.png';
import move from './move';

const items = Array.from(document.querySelectorAll('.item'));
const goblin = document.createElement('img');
goblin.src = img;
goblin.classList.add('goblin');
setInterval(move, 1000, goblin, items);
