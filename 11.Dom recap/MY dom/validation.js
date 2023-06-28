//we have number , string , boolean type;
const Number = "20";
if(typeof Number == "number"){
    console.log("this is a number");
}
else{
    console.log("this is not a number");
}

const Numbers = [12,30,40 ,10];
const student = {
    name: "soumen",
    id: "B170604079",
    dep: "Cse",
    fev: [12,23,223,221,211,43]
}
console.log(typeof Numbers);
console.log(typeof student);
console.log(Array.isArray(Numbers));
console.log(Array.isArray(student.fev));
console.log(isNaN('33'));