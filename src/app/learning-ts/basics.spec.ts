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

    it('should talke about string', () => {
      // using new keyword
      const boringString = new String('booooooooring');
      // using string literals
      const singleQuotes: string = 'string literal using single quoutes';
      const doubleQuotes: string = "double qoutes";

      const trueName = 'template literals'
      // template literals
      const backticks: string = `suprise!!
        back ticks have super powers
        they really do they are called ${trueName}, but you can say back ticks
        also they can suppont multi-line strings and it supports string interpolation `;

      const checkThisOut = `template literals can do other stuff in the interpolation brackets like math
        since 2 + 2 = ${2 + 2} or even the calling of a function that returns a string or something that can be
        evaluated into a string implicitly like a number. like ${getName()} `
      console.log(checkThisOut)

      //concatenating a string w/ +
      const student = 'person 1';
      const action = 'did the thing';

      const sentence: string = student + ' ' + action;

      expect(sentence).toBe('person 1 did the thing');

      // string is an iterable
      let personToBother: string = 'ali';
      expect(personToBother[0]).toBe('a');
      personToBother.indexOf('i'); //returns 2
      personToBother.indexOf('t'); // returns -1

      const instructor = 'byron a brown';
      console.log('does instructor\'s name have an "a" in it', instructor.includes('a'))
    })

    it('should talk about arrays', () => {
      const people: string[] = ['ali', 'sherene', 'mark'];
      const noPeople: any[] = [];
      noPeople[0] = 'Tahir'; // technically we can add to the array as it doesnt change the reference. but man thats icky
      // noPeople = people; //here we are changing the ref so they won let us do it
      const morePeople: string[] = new Array<string>(); // you don't see this much

      const sentence = 'after this we will go to lunch because ' + people[1] + ' said it is time for lunch and she is the boss';

      function makeSentence(name: string) {
        console.log(name + ' is back from lunch');
      }

      // for each
      people.forEach((name) => { console.log(name + ' is back from lunch') });

      // map
      // transfrom each and return
      // map does manipulate the original
      const testScores = [80, 76, 90, 87, 95];
      const modifiedScores = testScores.map(function (score: number) {
        return score + 10;
      });

      expect(modifiedScores[0]).toBe(90);

      const drivers: any[] = [
        {
          firstName: 'mark',
          lastName: 'SonofMark'
        },
        {
          firstName: 'Ryan',
          lastName: 'SonofRyan'
        }
      ]

      const fullNamesOfDrivers: string[] = drivers.map(driver => {
        return driver.firstName + ' ' + driver.lastName;
      });

      fullNamesOfDrivers.forEach(name => console.log(name));

    })

    it('should talk about objects', () => {
      class Dog {
        name = 'fido';

        sound() {
          console.log('woof')
        }
      }

      const myDog = new Dog();

      // using object to describe data

      interface Tutor {
        name: string,
        project: string,
        org: string,
        campus: number | string,
        [key: string]: any // ** this allows us to use a variable in the bracket notation
      }


      const instructor: Tutor = {
        name: 'byron',
        project: 'servicing 2',
        org: 'ero',
        campus: 2
      }

      let prop: string = 'org';
      console.log(instructor.campus)
      console.log(instructor['name'])
      console.log(instructor[prop]) // refer to the interface of tutor
    })

    it(' talks about booleans', () => {
      let isDayTwo = true;
      const hasLab = false;

      let instructor = 'byron';
      let hasInstructor: boolean;

      hasInstructor = !!instructor;

      if (!!instructor) {
        // do something
      }

    })
  })

  describe('typing, interfaces, type aliases', () => {
    let someNum: number;
    let someString: string;
    let someArray: any[];

    interface Instructor {
      name: string,
      mainProject?: string,
      org?: string,
      isInternal: boolean,
      campus: number | string
      classes: string[]

    }
    let instructor: Instructor;
  });

  describe('functions', () => {
    it('should describe named function declarations', () => {
      addTwoNumbers(4, 5);
      function addTwoNumbers(num1: number, num2: number) {
        return num1 + num2
      }
    })


    describe('should describe anonymous function express', () => {
      it('is not an arrow', () => {
        // add(5, 4); can't do it
        type someMathFunction = (num1: number, num2: number) => number;
        const add: someMathFunction = function (num1: number, num2: number): number {
          return num1 + num2;
        }
      })

      it('is an arrow function', () => {

      })
    })


  });



  interface Cat1 {

    name: string,

    sex: string,

    family: string,

    characteristics: string[],

    food: string[]

  } // sherene

  interface Cat2 {

    name: string,

    age: number,

    furColors: string[],

    numberOfLivesLeft: number,

    friendly: boolean,

    favoriteTreat?: string

  } // ali

  interface Cat3 {

    name: string,

    age: number,

    breed: string,

    color: string,

    sex: string

    ownerName?: string,

    isVaccinated: boolean

  } // tahir

  interface Cat4 {

    name: string,

    breed: string,

    age: number,

    color: string[],

    weight: number

  } // brandon

  interface EmptyCat {
    name?: string
  }

  // type alias
  type Cat = Cat1 | Cat2 | Cat3 | Cat4 | EmptyCat;

  const myCats: Cat[] = [{}];

  function getName() {
    return 'this is a string';
  }

})
