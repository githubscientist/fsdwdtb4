// function Form(name, age){
//     this.name = name
//     this.age = age
// }

// let form1 = new Form('krish', 24);
// let form2 = new Form('sathish', 35);
// let form3 = new Form('kannan', 20);

// let students = [form1, form2, form3];

// console.log(students);

class Form{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let form1 = new Form('krish', 24);
let form2 = new Form('sathish', 35);
let form3 = new Form('kannan', 20);

let students = [form1, form2, form3];

console.log(students);