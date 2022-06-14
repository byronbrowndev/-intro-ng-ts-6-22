describe('variables, data types, typing', () => {
  it('should declare a variable', () => {
    // var name; don't nope, stop, go back
    // constants
    const name = 'byron'; // didnt type it
    const coolestGuyEver: string = 'ram';

    // use "let" for variables that are... well variable
    let myAge: number; // declare and type
    myAge = 32; // initialize
    myAge = 33; // reassign

    let car = 'toyota'; // declared and initialized so we implicity assume this SHOULD be a string
    // car = 13; // vs code won't let me do it

    // vs code does not know what our intentions from truck are so upon reassign they let us do whatever we want.
    let truck;
    truck = 'chevy';
    truck = {
      make: 'chevrolet'
    };

    console.log(car)

  })

  describe('basic types', () => {
    it('should talk about numbers', () => {
      // number
      const n1: number = 12;
      const n2: number = 3.1415;
      const n3: number = 0xFFF; // Base 16.
      const n4: number = 0o111; // base 8 - octal.
      const n5: number = 0b11011; // base 2 - binary.
      const n6: number = Infinity;
      const n7: number = -Infinity;
      const n8: number = 1_156_597_879;

      // this is basic JS stuff so here are JS dox
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
    })
  })

})
