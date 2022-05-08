import { state } from "./state.js";
import { changeLang } from "./chang-lang.js";
import keySets from './key-sets.js'

export function toggleCase() {
  const letterKeys = document.body.querySelectorAll('.key-letter');
  const firstNumberKey = document.body.querySelector('.key');
  if(letterKeys[0].textContent === letterKeys[0].textContent.toLowerCase()) {
    letterKeys.forEach(key => {
      key.textContent = key.textContent.toUpperCase();
    });
    firstNumberKey.textContent = firstNumberKey.textContent.toUpperCase()
  } else {
    letterKeys.forEach(key => {
      key.textContent = key.textContent.toLowerCase();
    });
    firstNumberKey.textContent = firstNumberKey.textContent.toLowerCase()
  }
}

export function handleCapsLock() {
  const capsKey = document.body.querySelector('.caps-lock');
  capsKey.classList.toggle('instant-active');
  toggleCase();
  if (!state.isCapsOn) {
    state.isCapsOn = true;
  } else {
    state.isCapsOn = false;
  }
} 

export function handleShift() {
  const shiftKeys = [...document.body.querySelectorAll('.shift')];
  shiftKeys.forEach(key => key.classList.toggle('instant-active'));
  const allKeys = [...document.body.querySelectorAll('.key-common')];
  allKeys.splice(allKeys.length - 1, 1);
  let letterSetLang = keySets.letterKeysEng;
  let numberSetLang = keySets.numberKeysEng;
  if (state.lang === 'bel') {
    letterSetLang = keySets.letterKeysBel;
    numberSetLang = keySets.numberKeysBel;
  }
  const keySet = [...numberSetLang, ...letterSetLang[0],
                    ...letterSetLang[1], ...letterSetLang[2]];
  handleShiftChange(keySet, allKeys);
}

export function handleShiftChange(keySet, allKeys) {
  const letterKey = document.body.querySelector('.key-letter');
  toggleCase();
  if (!state.isShiftOn){
    console.log(letterKey.textContent)
    allKeys.forEach((key, i) => {
      if (letterKey.textContent === letterKey.textContent.toUpperCase()) {
        key.textContent = keySet[i].altName.toUpperCase();
      } else {
        key.textContent = keySet[i].altName
      }
    });
    state.isShiftOn = true
  } else {
    allKeys.forEach((key, i) => {
      if (letterKey.textContent === letterKey.textContent.toUpperCase()) {
        key.textContent = keySet[i].name.toUpperCase();
      } else {
        key.textContent = keySet[i].name
      }
    });
    state.isShiftOn = false
  }
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
