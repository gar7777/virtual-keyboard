import { state } from "./state.js";
import { changeLang } from "./chang-lang.js";
// import keySets from './key-sets.js'

export function handleCapsLock() {
  // const lettersSet = [...keySets.letterKeysEng[0], ...keySets.letterKeysEng[1], ...keySets.letterKeysEng[2]];
  // letterKeys.splice(letterKeys.length - 1, 1);
  const letterKeys = document.body.querySelectorAll('.key-letter');
  const firstNumberKey = document.body.querySelector('.key');
  const capsKey = document.body.querySelector('.caps-lock');
  capsKey.classList.toggle('instant-active');
  if (!state.isCapsOn) {
    letterKeys.forEach(key => {
      key.textContent = key.textContent.toUpperCase();
    });
    firstNumberKey.textContent = firstNumberKey.textContent.toUpperCase();
    state.isCapsOn = true;
  } else {
    letterKeys.forEach(key => {
      key.textContent = key.textContent.toLowerCase();
    });
    firstNumberKey.textContent = firstNumberKey.textContent.toLowerCase();
    state.isCapsOn = false;
  }
  

} 

export function handleShift() {
  console.log('shift')
}

export function handleControl(e) {
  if (e.getModifierState("Alt")) {
    changeLang();
  }
}

export function handleAlt(e) {
  if (e.getModifierState("Control")) {
    changeLang();
  }
}