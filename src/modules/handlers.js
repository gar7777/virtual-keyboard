import { state } from "./state.js";
import { initRender } from "./render.js";

export function handlePress(e, textarea) {
  textarea.focus();
  if (e.target.classList.contains('key-common')) {
    textarea.value += e.target.textContent
  }
  if (e.target.dataset.code === 'Tab') {
    textarea.value += '\t';
  }
  if (e.target.dataset.code === 'Backspace') {
    const arr = (textarea.value).split('');
    arr.splice(arr.length - 1, 1)
    textarea.value = arr.join('');
  }
  if (e.target.dataset.code === 'Enter') {
    textarea.value += '\n';
  }
  if (e.target.dataset.code === 'CapsLock') {
    if (state.isCapsOn) {
      state.isCapsOn = false;
    } else {
      state.isCapsOn = true;
    }
  }
  if (e.target.dataset.code === 'ArrowLeft') {
    let valueLength = textarea.value.length;
    textarea.setSelectionRange(valueLength - 1, valueLength - 1)
    valueLength-- 
  }

}