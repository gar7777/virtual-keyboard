import { initRender } from './src/modules/render.js';
import { handleKeyDown, handleKeyUp } from './src/modules/handlers.js'
import { changeLang } from './src/modules/chang-lang.js'

document.addEventListener("DOMContentLoaded", initRender);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

const lang = document.getElementById('lang')

lang.addEventListener('click', changeLang)