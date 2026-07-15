const totalBeli = 27000
const bayar = 100000;

const kembalian = bayar - totalBeli;
let decrease = kembalian;
decrease = Number(decrease);
let hitung = '';

while (decrease > 0) {
    if( decrease >= 50000){
        hitung += '50000, ';
        decrease -= 50000;
    }else if(decrease >= 10000){
        hitung += '10000, ';
        decrease -= 10000;
    }else if(decrease >= 5000){
        hitung += '5000, ';
        decrease -= 5000;
    }else if(decrease >= 2000){
        hitung += '2000, ';
        decrease -= 2000;
    }else if(decrease >= 1000){
        hitung += '1000, ';
        decrease -= 1000;
    }else{
        break
    }
}

console.log(`Kembalian nominal: ${kembalian}`);
console.log(`Kembalian Pecahan: ${hitung}`);

//susah pakai for :(