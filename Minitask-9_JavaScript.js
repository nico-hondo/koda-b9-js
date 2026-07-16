function processArray(arr, processor){

    if(!Array.isArray(arr)){
        return "Harus Array Woi";
    }

    if(typeof processor === 'function'){
        let newArr = [];
        for(let i = 0; i < arr.length; i++){
            newArr[i] = processor(arr[i]);
        }
        return newArr;
    }
    return false;
}

const showNumber = num => `Number: ${num}`;
const makeDollar = num => `$${num}`;
const addFive = num => num + 5;

const numbers = [1, 2, 3, 4, 5];

console.log(processArray(numbers, showNumber));
console.log(processArray(numbers, makeDollar));
console.log(processArray(numbers, addFive));