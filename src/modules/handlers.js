// import { state } from "./state.js";
import { handleCapsLock, handleShift } from "./special-keys.js";

export function handlePress(e, textarea) {
  textarea.focus();
  const position = textarea.selectionStart;
  const arr = (textarea.value).split('');
  if (e.target.classList.contains('key')) {
    e.target.classList.add('key-active');
  }
  if (e.target.classList.contains('key-common')) {
    arr.splice(position - 1, 0, e.target.textContent)
    textarea.value = arr.join('');
    textarea.setSelectionRange(position, position);
  }
  if (e.target.dataset.code === 'CapsLock') {
    handleCapsLock(e);
  }
  if (e.target.dataset.code === 'ShiftLeft' || e.target.dataset.code === 'ShiftRight') {
    handleShift(e);
  }
  if (e.target.dataset.code === 'Tab') {
    arr.splice(position, 0, '\t')
    textarea.value = arr.join('');
    textarea.setSelectionRange(position + 1, position + 1);
  }
  if (e.target.dataset.code === 'Enter') {
    arr.splice(position, 0, '\n')
    textarea.value = arr.join('');
    textarea.setSelectionRange(position + 1, position + 1);
  }
  if (e.target.dataset.code === 'Backspace') {
    arr.splice(position -1, 1)
    textarea.value = arr.join('');
    textarea.setSelectionRange(position - 1, position - 1);
  }
  if (e.target.dataset.code === 'Delete') {
    arr.splice(position, 1)
    textarea.value = arr.join('');
    textarea.setSelectionRange(position, position);
  }
  if (e.target.dataset.code === 'ArrowLeft') {
    textarea.setSelectionRange(position - 1, position - 1);
  }
  if (e.target.dataset.code === 'ArrowRight') {
    textarea.setSelectionRange(position + 1, position + 1);
  }
  if (e.target.dataset.code === 'ArrowDown') {
    const event = new KeyboardEvent('keydown', {'key': 'ArrowDown', 'code': 'ArrowDown', 'which': 40})
    console.log(event)
    textarea.dispatchEvent(event);
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
    let position = textarea.selectionStart;
    const arr = (textarea.value).split('');
    e.preventDefault();
    arr.splice(position - 1, 0, '\t')
    textarea.value = arr.join('');
    textarea.setSelectionRange(position, position);
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

export function removeKeyActive(textarea) {
  textarea.focus();
  const allKeys = document.body.querySelectorAll('.key');
  allKeys.forEach(key => {
    key.classList.remove('key-active')
  })
}