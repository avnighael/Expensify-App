// arguments object - no longer bound with arrow functions

const add =  (a, b) => {

    //throws error arguments is not defined under arrow function while this works in es5 function
    // console.log(arguments);

    return a + b;
};
console.log(add(55,1, 1001));

//this keyword - no longer bound

// const user = {
//   name: 'Avni',
//   cities: ['Boston', 'New York', 'Mumbai'],
//   printplacesLived: function () {
//       console.log(this.name); //this.name is accessible here
//       console.log(this.cities);
//
//       this.cities.forEach(function (city) {
//           console.log(this.name + 'has lived in' + city); //this.name is not accessible here
//       });
//   }
// };

// Workaround of above problem of this
// const user = {
//     name: 'Avni',
//     cities: ['Boston', 'New York', 'Mumbai'],
//     printplacesLived: function () {
//         const that = this;
//
//         this.cities.forEach(function (city) {
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// };

// Actual solution of 'this' issue
// const user = {
//     name: 'Avni',
//     cities: ['Boston', 'New York', 'Mumbai'],
//
//     /**
//      * here you need binding to its own value. Hence, normal function.
//      * Here it goes to global scope if arrow function is used and
//      * thus gives undefined instead of user object reference
//      */
//     printplacesLived: function () {
//         this.cities.forEach((city) => { // works because we are not rebinding 'this' here
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };

//Same solution as above but just used ES6 method on printplacesLived instead of ES5 function
const user = {
    name: 'Avni',
    cities: ['Boston', 'New York', 'Mumbai'],

    /**
     * here you need binding to its own value. Hence, normal function.
     * Here it goes to global scope if arrow function is used and
     * thus gives undefined instead of user object reference
     */
    printplacesLived() {

        // with map you can actually transform each items and give new array with transformed item
        // If you use map, it doesn't change the original array (here cities array)
        return this.cities.map((city) => { //this function gets called only one time for every item in array
            return this.name + ' has lived in ' + city;
        });

        // this.cities.forEach((city) => { // works because we are not rebinding 'this' here
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

// NOTE: where you don't want to use arrow function
// example in method as seen in above example
console.log(user.printplacesLived());


// Challenge area

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
