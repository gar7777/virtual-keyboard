import { state } from "./state.js";
// import keySets from './key-sets.js'

export function handleCapsLock(e) {
  e.target.classList.toggle('instant-active');
  // const lettersSet = [...keySets.letterKeysEng[0], ...keySets.letterKeysEng[1], ...keySets.letterKeysEng[2]];
  const letterKeys = document.body.querySelectorAll('.key-letter');
  // letterKeys.splice(letterKeys.length - 1, 1);
  if (!state.isCapsOn) {
    letterKeys.forEach(key => {
      key.textContent = key.textContent.toUpperCase();
    });
    state.isCapsOn = true;
  } else {
    letterKeys.forEach(key => {
      key.textContent = key.textContent.toLowerCase();
    });
    state.isCapsOn = false;
  }
  

} 

export function handleShift() {
  console.log('shift')
}