// MAP() -> Built-in Method
//Jadi Method map berfungsi untuk membuat array baru dengan memanggil fungsi khusus yang digunakan untuk mengambil setiap elemen pada array yang lama.
//Jadi map() sangat berguna untuk merombak atau mengubah data, tanpa merusak sifat atau data aslinya.


//tanpa Map - using callback
const nums = [1, 2, 3, 4, 5]
const n = nums.length;

console.log("Array Asli")
console.log(nums);

console.log("Tanpa Map() -------------------")
function trialWithoutMap(arr, cb){
    const newArr = [];
    
    for(let i = 0; i < n; i++){
        newArr[i] = cb(arr[i]);
    }
    return newArr
}

const timesWithTen = num => num * 10;
console.log(trialWithoutMap(nums, timesWithTen))


console.log("Pakai Map() -------------------")
//Tanpa pakai callback - dan hanya mengambil nilai asli tanpa merombak atau mengubah data
const newMap1 = nums.map( //Menggunakan return biasa pakai declaration function dan harus menunliskan return.
    function(num){
        return num * 2;
    }
)
console.log(newMap1);

const newMap = nums.map(x => x); //ini namanya return dengan implicit return menggunakan arrow function yang dimana JS akan melakukan return secara otomatis
console.log(newMap);



//Pakai Map() - Callback, mencoba untuk merubah data dengan setiap elemen ditambahkan dgn 5
function trialWithMap(arr, cb)
{
    const addSum = arr.map(x => cb(x))
    return addSum;
}

const addFive = num => num + 5;
console.log(trialWithMap(nums, addFive));

// Kesimpulan------------------------
// Map() tidak bersifat mutasi;
// Bersifat tidak merubah nilai asli, yaitu ukuran panjang(index) Array(baru) sama tetapnya seperti array yang asli.
