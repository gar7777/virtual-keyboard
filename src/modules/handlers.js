// import { state } from "./state.js";
import { handleCapsLock, handleShift, handleControl, handleAlt } from "./special-keys.js";
import keySets from './key-sets.js';

export function handlePress(e, textarea) {
  textarea.focus();
  const position = textarea.selectionStart;
  const arr = (textarea.value).split('');
  if (e.target.classList.contains('key')) {
    e.target.classList.add('key-active');
  }
  if (e.target.classList.contains('key-common')) {
    arr.splice(position, 0, e.target.textContent)
    textarea.value = arr.join('');
    textarea.setSelectionRange(position + 1, position + 1);
  }
  if (e.target.dataset.code === 'CapsLock') {
    handleCapsLock();
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
    textarea.setSelectionRange(position + 58, position + 58);    
  }
  if (e.target.dataset.code === 'ArrowUp') {
    textarea.setSelectionRange(position - 58, position - 58);    
  }
}

export function handleKeyDown(e) {
  const textarea = document.body.querySelector('textarea');
  const position = textarea.selectionStart;
  const arr = (textarea.value).split('');
  const allKeys = document.body.querySelectorAll('.key');
  textarea.focus();
  const letters = [...keySets.numberKeysEng, ...keySets.letterKeysEng[0], ...keySets.letterKeysEng[1], ...keySets.letterKeysEng[2]] 
  allKeys.forEach(key => {
    if(key.dataset.code === e.code) {
      key.classList.add('key-active')
    }
  })
  if (letters.some(item => item.data === e.code)) {
    e.preventDefault();
    let currentLetter = null;
    allKeys.forEach(letter => {
      if(letter.dataset.code === e.code) {
        currentLetter = letter;
      }
    })
    if(!currentLetter) {
      arr.splice(position, 0, e.key)
    } else {
      arr.splice(position, 0, currentLetter.textContent)
    }
    textarea.value = arr.join('');
    textarea.setSelectionRange(position + 1, position + 1);
  }
  if (e.key === 'Tab') {
    let position = textarea.selectionStart;
    const arr = (textarea.value).split('');
    e.preventDefault();
    arr.splice(position, 0, '\t')
    textarea.value = arr.join('');
    textarea.setSelectionRange(position + 1, position + 1);
  }
  if (e.key === 'Control') {
    handleControl(e);
  }
  if (e.key === 'Alt') {
    handleAlt(e);
  }
  if (e.key === 'Shift') {
    handleShift(e);
  }
  if (e.key === 'CapsLock') {
    handleCapsLock();
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