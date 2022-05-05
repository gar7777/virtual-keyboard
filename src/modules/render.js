import keySets from './key-sets.js';
import {KeyNum,  KeyLetter, KeyGeneral, Line} from './key-templates.js';
import { state } from './state.js';
import { handlePress, removeKeyActive } from './handlers.js';

export function initRender() {
  const body = document.body;
  const textarea = document.createElement('textarea');
  textarea.setAttribute('autofocus', true);
  const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'keyboard-container';
  for (let i = 0; i < 5; i++) {
    const line = new Line();
    keyboardContainer.append(line.element)
  }
  const lines = keyboardContainer.querySelectorAll('.keyboard-line');
  //LINE 1
  keySets.numberKeys.forEach(item => {
    const keyObject = new KeyNum(checkName(item.name, item), item.data);
    lines[0].append(keyObject.element)
  })
  const backspace = new KeyGeneral('Backspace', 'Backspace');
  lines[0].append(backspace.element);

  //LINE2
  const tab = new KeyGeneral('Tab', 'Tab');
  lines[1].append(tab.element);
  keySets.letterKeysEng[0].forEach(item => {
    const keyObject = new KeyLetter(checkName(item.name, item), item.data);
    lines[1].append(keyObject.element)
  });
  const del = new KeyGeneral('Del', 'Delete');
  lines[1].append(del.element);

  //LINE 3
  const capsLock = new KeyGeneral('CapsLock', 'CapsLock');
  lines[2].append(capsLock.element);
  keySets.letterKeysEng[1].forEach(item => {
    const keyObject = new KeyLetter(checkName(item.name, item), item.data);
    lines[2].append(keyObject.element)
  });
  const enter = new KeyGeneral('Enter', 'Enter');
  lines[2].append(enter.element);

  //LINE 4
  const leftShift = new KeyGeneral('Shift', 'ShiftLeft');
  lines[3].append(leftShift.element);
  keySets.letterKeysEng[2].forEach(item => {
    const keyObject = new KeyLetter(checkName(item.name, item), item.data);
    lines[3].append(keyObject.element)
  });
  const arrowUp = new KeyGeneral('↑', 'ArrowUp');
  lines[3].append(arrowUp.element);
  const rightShift = new KeyGeneral('Shift', 'ShiftRight');
  lines[3].append(rightShift.element);

  //LINE 5
  const leftCtrl = new KeyGeneral('Ctrl', 'CtrlLeft');
  lines[4].append(leftCtrl.element);
  const win = new KeyGeneral('Win', 'Meta');
  lines[4].append(win.element);
  const leftAlt = new KeyGeneral('Alt', 'AltLeft');
  lines[4].append(leftAlt.element);
  const space = new KeyLetter(' ', 'Space');
  lines[4].append(space.element);
  const rightAlt = new KeyGeneral('Alt', 'AltRight');
  lines[4].append(rightAlt.element);
  const context = new KeyGeneral('Ctx', 'ContextMenu');
  lines[4].append(context.element);
  const rightCtrl = new KeyGeneral('Ctrl', 'CtrlRight');
  lines[4].append(rightCtrl.element);
  const arrowLeft = new KeyGeneral('←', 'ArrowLeft');
  lines[4].append(arrowLeft.element);
  const arrowDown = new KeyGeneral('↓', 'ArrowDown');
  lines[4].append(arrowDown.element);
  const arrowRight = new KeyGeneral('→', 'ArrowRight');
  lines[4].append(arrowRight.element);

  //EVENT_LISTENER
  keyboardContainer.addEventListener('mousedown', (e) => {
    handlePress(e, textarea)
  });
  keyboardContainer.addEventListener('mouseup', removeKeyActive);
  body.prepend(textarea, keyboardContainer);
}

function checkName(name, item) {
  let keyName = name;
  if (state.isCapsOn) keyName = item.altName;
  return keyName;
}

// function checkLanguage() {
//   console.log('hello')
// }