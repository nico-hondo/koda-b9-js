const account = {
    id: 'acc1',
    username : 'uxNicoFH',
    pass : 'adaApaDengan@mu',
};

const check = account.pass.length;
const updateAcc = {
    pass : 'akunicosehatdankuat15',
};
let updateAccExe;

// console.log(check);

if(account instanceof Object){
    if(check >= 8){
        updateAccExe = {...account, ...updateAcc};
        console.log(account, " --> ", updateAccExe)
    }else{
        console.log("Silahkan buat password minimal 8 karakter");
    }
}else{
    console.log("Jangan nyusahin deh tim dev");
}
