const belanja = 750000
var hitung = 0

//switch case
switch(true){
    case belanja > 1000000:
        hitung = belanja - (belanja * 0.1)
        console.log("Total Belanja: " + hitung)
        break
    case belanja >= 500000:
        hitung = belanja - (belanja * 0.05)
        console.log("Total Belanja: " + hitung)
        break
    default:
        hitung = belanja - (belanja * 0)
        console.log("Total Belanja: " + hitung)
        break
}

//if-else
var diskon = 0
var total = 0
if(belanja > 1000000){
    diskon = 0.1
}else if(belanja >= 500000){
    diskon = 0.05
}else{
    diskon = 0
}

total = belanja - (belanja * diskon)
console.log("Total Belanja: " + total)