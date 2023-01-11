// Invalid Syntax
// var num = 1, 2, 3;

// Array Data Structure
let numArray = [1,2,3];

// Object Data Structure
let numObject = {

    // Key: Value Pairs

    // Properties (Primitive Data Types: Int, strings, booleans,...)
    value1: 1,
    value2: 2,
    value3: 3,

    // Methods Aka Functions
    // Function name -> key, function -> value
    numberStringOutput: () => {
        console.log("i like numbers");
    }
}


// Accessing properties
numObject.value1 //1

// Accessing Methods - 객체 안의 메소드를 호출할 때
// ()를 없애면 베이비 블루였는데 키네임이었다가 ()를 붙이면 펑션이기 때문에 색깔이 변함 
numObject.numberStringOutput()

let document = {
    // document properties reutring HTML element info
    /*
    ...
    ....
    */

    // document methods
    addEventListener: () => {

    }


}
document.addEventListener()

// Function
function numberStringOutput () {
    console.log("i like numbers");
}

// Invokes Function
numberStringOutput();


// ---- //
// Game Example

let mario = {
    // Mario Properties (Info) -> Informative

    // Mario Methods (Actions) -> something to do
}

let luigi = {
    // Mario Properties (Info)

    // Mario Methods (Actions)
}

let wario = {
    // Mario Properties (Info)

    // Mario Methods (Actions)
}


// Employee class includes name, id, email as properties and getName(), getId(), getEmail() and getRole() as methods in common. 

// Why do I need constructor? 
// let manager = { 
//     name: 'olivia',
//     id: 'oliviasylee',
//     email: 'oliviasylee@gmail.com'
// }

// let engineer = {
//     name: 'Ben',
//     id: 'bhy',
//     email: 'bhy@gmail.com'
// }

// function Team (name, id, email){
//     this.name = name;
//     this.id = id;
//     this.email = email;
// }

// let manager = new Team('Olivia', 'oliviasylee', 'oliviasylee@gmail.com');
// let engineer = new Team('Ben', 'bhyim', 'bhyim11@gmail.com');

// Employee {
//     Manager: {
//        name: "olivia",
//        email: "olivia@gmail.com",
//        id: 4,
//        officeNumber: 101
//     },
//     Engineer: {
//         name: "olivia",
//         email: "olivia@gmail.com",
//         id: 4,
//         github: "olivia123"
//     },
//     Intern: {
//         name: "olivia",
//         email: "olivia@gmail.com",
//         id: 4,
//         school: UNC
//     },
// }