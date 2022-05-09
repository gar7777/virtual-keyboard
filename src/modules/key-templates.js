class Key {
   constructor (name, dataAttr, altName) {
    this.element = document.createElement('div');
    this.element.classList.add('key');
    this.element.textContent = name;
    this.element.dataset.code = dataAttr;  
    this.element.dataset.altName = altName;  
  }
}

export class KeyLetter extends Key {
  constructor(name, dataAttr, altName) {
    super(name, dataAttr, altName);
    this.element.classList.add('key-common', 'key-letter');
  }
}

export class KeyNum extends Key {
  constructor(name, dataAttr, altName) {
    super(name, dataAttr, altName);
    this.element.classList.add('key-common', 'key-num');
  }
}

export class KeyGeneral extends Key {
  constructor(name, dataAttr) {
    super(name, dataAttr);
    this.element.classList.add('key-general');
  }
}

export class Line {
  constructor () {
    this.element = document.createElement('div');
    this.element.classList.add('keyboard-line');
  }
}