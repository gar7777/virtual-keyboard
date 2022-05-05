import { initRender } from './src/modules/render.js';
import { handleKeyDown, handleKeyUp } from './src/modules/handlers.js'

document.addEventListener("DOMContentLoaded", initRender);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);