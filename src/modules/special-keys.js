import { state } from "./state.js";
import { changeLang } from "./chang-lang.js";
import keySets from './key-sets.js'

export function handleCapsLock() {
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

export function handleShift(e) {
  const activeKey = e.target;
  const allKeys = [...document.body.querySelectorAll('.key-common')];
  allKeys.splice(allKeys.length - 1, 1);
  const keySet = [...keySets.numberKeysBel, ...keySets.letterKeysBel[0],
                    ...keySets.letterKeysBel[1], ...keySets.letterKeysBel[2]];
  if (state.isCapsOn) {
    allKeys.forEach((key, i) => {
      key.textContent = keySet[i].name;
    });
  } else {
    allKeys.forEach((key, i) => {
      key.textContent = keySet[i].altName;
    });
  }
  if(e.key === 'Shift') {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Shift') {
        if (!state.isCapsOn) {
          allKeys.forEach((key, i) => {
            key.textContent = keySet[i].name;
          });
        } else {
          allKeys.forEach((key, i) => {
            key.textContent = keySet[i].altName;
          });
        }
      }
    })
  } else {
    activeKey.addEventListener('mouseup', () => {
      if (!state.isCapsOn) {
        allKeys.forEach((key, i) => {
          key.textContent = keySet[i].name;
        });
      } else {
        allKeys.forEach((key, i) => {
          key.textContent = keySet[i].altName;
        });
      } 
    })
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