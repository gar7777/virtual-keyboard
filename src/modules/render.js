import keySets from './key-sets.js';
import {KeyNum,  KeyLetter, KeyGeneral, Line} from './key-templates.js';
import { state } from './state.js';
import { handlePress, removeKeyActive } from './handlers.js';

export function initRender() {
  const body = document.body;
  let lang = 'eng';
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }
  const textFields = keySets.textFields[lang];
  const h1 = document.createElement('h1');
  h1.className = 'h1';
  h1.textContent = textFields[0];
  const textarea = document.createElement('textarea');
  textarea.setAttribute('autofocus', true);
  textarea.classList.add('textarea');
  const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'keyboard-container';
  for (let i = 0; i < 5; i++) {
    const line = new Line();
    keyboardContainer.append(line.element)
  }
  const lines = keyboardContainer.querySelectorAll('.keyboard-line');
  //LINE 1
  let numberKeys = keySets.numberKeysEng;
  if (state.lang === 'bel') {
    numberKeys = keySets.numberKeysBel;
  }
  let letterKeys = keySets.letterKeysEng;
  if (state.lang === 'bel') {
    letterKeys = keySets.letterKeysBel;
  }
  numberKeys.forEach(item => {
    const keyObject = new KeyNum(item.name, item.data, item.altName);
    lines[0].append(keyObject.element)
  })
  const backspace = new KeyGeneral('Backspace', 'Backspace');
  lines[0].append(backspace.element);

  //LINE2
  const tab = new KeyGeneral('Tab', 'Tab');
  lines[1].append(tab.element);
  letterKeys[0].forEach(item => {
    const keyObject = new KeyLetter(item.name, item.data, item.altName);
    lines[1].append(keyObject.element)
  });
  const del = new KeyGeneral('Del', 'Delete');
  lines[1].append(del.element);

  //LINE 3
  const capsLock = new KeyGeneral('CapsLock', 'CapsLock');
  capsLock.element.classList.add('caps-lock');
  lines[2].append(capsLock.element);
  letterKeys[1].forEach(item => {
    const keyObject = new KeyLetter(item.name, item.data, item.altName);
    lines[2].append(keyObject.element)
  });
  const enter = new KeyGeneral('Enter', 'Enter');
  lines[2].append(enter.element);

  //LINE 4
  const leftShift = new KeyGeneral('Shift', 'ShiftLeft');
  leftShift.element.classList.add('shift')
  lines[3].append(leftShift.element);
  letterKeys[2].forEach(item => {
    const keyObject = new KeyLetter(item.name, item.data, item.altName);
    lines[3].append(keyObject.element)
  });
  const arrowUp = new KeyGeneral('↑', 'ArrowUp');
  lines[3].append(arrowUp.element);
  const rightShift = new KeyGeneral('Shift', 'ShiftRight');
  rightShift.element.classList.add('shift')
  lines[3].append(rightShift.element);

  //LINE 5
  const leftCtrl = new KeyGeneral('Ctrl', 'ControlLeft');
  lines[4].append(leftCtrl.element);
  const win = new KeyGeneral('Win', 'Meta');
  lines[4].append(win.element);
  const leftAlt = new KeyGeneral('Alt', 'AltLeft');
  lines[4].append(leftAlt.element);
  const space = new KeyLetter(' ', 'Space');
  lines[4].append(space.element);
  const rightAlt = new KeyGeneral('Alt', 'AltRight');
  lines[4].append(rightAlt.element);
  const rightCtrl = new KeyGeneral('Ctrl', 'ControlRight');
  lines[4].append(rightCtrl.element);
  const arrowLeft = new KeyGeneral('←', 'ArrowLeft');
  lines[4].append(arrowLeft.element);
  const arrowDown = new KeyGeneral('↓', 'ArrowDown');
  lines[4].append(arrowDown.element);
  const arrowRight = new KeyGeneral('→', 'ArrowRight');
  lines[4].append(arrowRight.element);

  //TEXTS
  const bottomTexts = document.createElement('div');
  bottomTexts.className = 'bottom-text'
  bottomTexts.innerHTML = `<p>${textFields[1]}</p>
                           <p>${textFields[2]}</p>
                          `;

  //EVENT_LISTENER
  keyboardContainer.addEventListener('mousedown', (e) => {
    handlePress(e, textarea)
  });
  keyboardContainer.addEventListener('mouseup', () => {
    removeKeyActive(textarea)
  });
  body.prepend(h1, textarea, keyboardContainer, bottomTexts);
}