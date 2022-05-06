import { state } from "./state.js";
import keySets from "./key-sets.js";

export function changeLang() {
  const allKeys = [...document.body.querySelectorAll('.key-common')];
  allKeys.splice(allKeys.length - 1, 1);
  if (state.lang === 'eng') {
    const keySet = [...keySets.numberKeysBel, ...keySets.letterKeysBel[0],
                    ...keySets.letterKeysBel[1], ...keySets.letterKeysBel[2]];
    allKeys.forEach((key, i) => {
      key.textContent = keySet[i].name;
      key.dataset.altName = keySet[i].altName;
    })
    state.lang = 'bel';
  } else {
    const keySet = [...keySets.numberKeysEng, ...keySets.letterKeysEng[0],
                    ...keySets.letterKeysEng[1], ...keySets.letterKeysEng[2]];
    allKeys.forEach((key, i) => {
      key.textContent = keySet[i].name;
      key.dataset.altName = keySet[i].altName;
    })
    state.lang = 'eng';
  }
}