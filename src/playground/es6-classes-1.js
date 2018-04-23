
class Person {
     constructor (name = 'Anonymous', age=0) {
         this.name = name;
         this.age = age;
     }
     getGreeting() {
         return `Hi. I am ${this.name}!`;
     }
     getDescription() {
         return `${this.name} is ${this.age} years old.`;
     }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += `${this.name} is majoring in ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
        hasHomeLocation() {
            return !!this.homeLocation;
        }

        getGreeting() {
        let greeting = super.getGreeting();
            if(this.hasHomeLocation()) {
                greeting += ` I am visiting from ${this.homeLocation}.`;
            }
            return greeting;
        }

}

const me = new Student('John Smith', 18, 'Computer Science');
console.log(me.major);
console.log(me.getDescription());

const me1 = new Student();
console.log(me1.getDescription());

const me2 = new Traveler('Andrew Mead', 26, 'New York');
console.log(me2.getGreeting());

const me3 = new Traveler(undefined,undefined,'NoWhere');
console.log(me3.getGreeting());
