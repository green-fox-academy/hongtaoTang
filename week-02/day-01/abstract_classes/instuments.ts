'use strict';

// Model stringed instruments
// We start with a base, abstract class Instrument.
abstract class Instrument {
  protected name: string;
  abstract play();
}

abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  abstract sound();

  play() {
    console.log(
      `${this.name}, a ${
      this.numberOfStrings
      }-stringed instrument that goes ${this.sound()}`
    );
  }
}

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super();
    this.numberOfStrings = numberOfStrings;
    this.name = 'Electric Guitar';
  }
  sound(): string {
    return 'Twang';
  }
}

export class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
    this.name = 'Bass Guitar';
  }
  sound(): string {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrument {
  constructor() {
    super();
    this.numberOfStrings = 4;
    this.name = 'Violin';
  }
  sound(): string {
    return 'Screech';
  }
}


// it reserves (e.g. protected) the name of the instrument
// it should provide a play() method.
// Next, we add another abstract class, StringedInstrument which extends Instrument. It

// introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable
// StingedInstrument has 3 descendants, namely:

// Electric Guitar (6 strings, 'Twang')
// Bass Guitar (4 strings, 'Duum-duum-duum')
// Violin (4 strings, 'Screech')
// The Workshop should be invoked from another file like app.ts or main.ts
console.log(
  'Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.'
);
const guitar = new ElectricGuitar();
const bassGuitar = new BassGuitar();
const violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log(
  'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
);
const guitar2 = new ElectricGuitar(7);
const bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
// We expect the following output:

// Test 1 Play
// Electric Guitar, a 6-stringed instrument that goes Twang
// Bass Guitar, a 4-stringed instrument that goes Duum-duum-duum
// Violin, a 4-stringed instrument that goes Screech
// Test 2, create Electric, Bass Guitar with 7 and 5 strings.
// Test 2 Play
// Electric Guitar, a 7-stringed instrument that goes Twangg
// Bass Guitar, a 5-stringed instrument that goes Duum-duum-duum