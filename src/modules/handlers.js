import { state } from "./state.js";
import { handleCapsLock } from "./special-keys.js";

export function handlePress(e, textarea) {
  console.log(textarea)
  textarea.focus();
  if (e.target.classList.contains('key')) {
    e.target.classList.add('key-active');
  }
  if (e.target.classList.contains('key-common')) {
    textarea.value += e.target.textContent
  }
  if (e.target.dataset.code === 'Tab') {
    textarea.value += '\t';
  }
  if (e.target.dataset.code === 'CapsLock') {
    handleCapsLock(e);
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

export function handleKeyDown(e) {
  const textarea = document.body.querySelector('textarea');
  textarea.focus();
  const allKeys = document.body.querySelectorAll('.key');
  allKeys.forEach(key => {
    if(key.dataset.code === e.code || key.dataset.code === e.key) {
      key.classList.add('key-active')
    }
  })
  if (e.key === 'Tab') {
    e.preventDefault();
    textarea.value += '\t';
  }
  if (e.key === 'Control' || e.key === 'Alt') {
    e.preventDefault();
  }
}

export function handleKeyUp() {
  const allKeys = document.body.querySelectorAll('.key');
  allKeys.forEach(key => {
    key.classList.remove('key-active')
  })
}

export function removeKeyActive() {
  const allKeys = document.body.querySelectorAll('.key');
  allKeys.forEach(key => {
    key.classList.remove('key-active')
  })
}