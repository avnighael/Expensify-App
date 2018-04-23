var nameVar = 'Avni';
nameVar = 'John';
console.log('nameVar',nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet)

const nameConst = 'Frank';
console.log('nameConst', nameConst)

function getPetName() {
    let petName = 'Tommy';
    return petName;
}

let petName = getPetName();
console.log(petName);

// Block scoping

const fullname = 'Avni Ghael';

if(fullname) {
    var firstName = fullname.split(' ')[0];
    console.log(firstName);
}

/**
 * firstName here is accessible only it is declared with var.
 * It let or const is used then it in not accessible here
 */
console.log(firstName);

let lastName;

if(fullname) {
    lastName = fullname.split(' ')[1];
    console.log(lastName);
}

console.log(lastName);

//NOTE: If the value needs reassigning then use let; if not then use const
