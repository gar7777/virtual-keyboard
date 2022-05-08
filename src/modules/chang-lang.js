import { state } from "./state.js";
import keySets from "./key-sets.js";

export function changeLang() {
  const allKeys = [...document.body.querySelectorAll('.key-common')];
  const h1 = document.body.querySelector('.h1');
  const bottomText = document.body.querySelector('.bottom-text');
  allKeys.splice(allKeys.length - 1, 1);
  if (state.lang === 'eng') {
    const keySet = [...keySets.numberKeysBel, ...keySets.letterKeysBel[0],
                    ...keySets.letterKeysBel[1], ...keySets.letterKeysBel[2]];
    allKeys.forEach((key, i) => {
      key.textContent = keySet[i].name;
      key.dataset.altName = keySet[i].altName;
    })
    checkCaps(keySet, allKeys);
    h1.textContent = keySets.textFields.bel[0];
    bottomText.innerHTML = `<p>${keySets.textFields.bel[1]}</p>
                            <p>${keySets.textFields.bel[2]}</p>
                           `;
    state.lang = 'bel';
  } else {
    const keySet = [...keySets.numberKeysEng, ...keySets.letterKeysEng[0],
                    ...keySets.letterKeysEng[1], ...keySets.letterKeysEng[2]];
    allKeys.forEach((key, i) => {
      key.textContent = keySet[i].name;
      key.dataset.altName = keySet[i].altName;
    })
    checkCaps(keySet, allKeys);
    h1.textContent = keySets.textFields.eng[0];
    bottomText.innerHTML = `<p>${keySets.textFields.eng[1]}</p>
                            <p>${keySets.textFields.eng[2]}</p>
                           `;
    state.lang = 'eng';
  }
}

function checkCaps(keySet, allKeys) {
  if (state.isShiftOn){
    allKeys.forEach((key, i) => {
      if (!state.isCapsOn) {
        key.textContent = keySet[i].altName.toUpperCase();
      } else {
        key.textContent = keySet[i].altName;
      }
    });
  } 
  if (state.isCapsOn) {
    allKeys.forEach((key, i) => {
      if (!state.isShiftOn) {
        key.textContent = keySet[i].name.toUpperCase();
      } else {
        key.textContent = keySet[i].name;
      }
    });
  }
}