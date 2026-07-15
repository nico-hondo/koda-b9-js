//Hitung Jumlah elemen elemen yang ada

const arr = [1, "Nico", 4, 5, "Fernando", false, true, "Hondo", {country: "Bogor",}, {age: 23}, ["Boolean", "String"], ["Primitive Data Type", "Non-Primitive"]]

const n = arr.length;
let numberCount = 0;
let stringCount = 0;
let arrayCount = 0;
let booleanCount = 0;
let objectCount = 0;
// console.log(n);

for(let i = 0; i < n; i++){
    if(Array.isArray(arr[i])){
        arrayCount += 1;
    }else if(arr[i] instanceof Object){
        objectCount += 1;
    }else if(typeof arr[i] === "number"){
        numberCount += 1;
    }else if(typeof arr[i] === "string"){
        stringCount += 1;
    }else if(typeof arr[i] === "boolean"){
        booleanCount += 1;
    }
}
console.log("Jumlah Number: "+ numberCount + "\nJumlah String: " + stringCount + "\nJumlah Boolean: " + booleanCount + "\nJumlah Array: " + arrayCount + "\nJumlah Object: " + objectCount);