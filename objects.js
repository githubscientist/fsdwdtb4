let person = ["sathish", 30, "software developer"];

let personObject = {
    name: "sathish",
    age: 30,
    profession: "software developer"
}

personObject["salary"] = 10000;

// delete personObject["name"];

// console.log(Object.entries(personObject));

// for (let index = 0; index < Object.entries(personObject).length; index++){
//     console.log(Object.entries(personObject)[index][1]);
// }

for (let key in personObject) {
    console.log(personObject[key]);
}