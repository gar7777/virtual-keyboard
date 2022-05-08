import { initRender } from './src/modules/render.js';
import { handleKeyDown, handleKeyUp } from './src/modules/handlers.js';
import { state } from './src/modules/state.js';

document.addEventListener('DOMContentLoaded', initRender);
window.addEventListener('beforeunload', () => {
  localStorage.setItem('lang', state.lang);
});
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);