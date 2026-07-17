function showJohn(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof name === "string"){
                resolve(name);
            }else{
                rejected("Tolong Masukkan Nama berupa String");
            }
        }, 1500);
    })
}

function showEd(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof name === "string"){
                resolve(name);
            }else{
                rejected("Tolong Masukkan Nama berupa String");
            }
        }, 2000);
    })
}

function showJane(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof name === "string"){
                resolve(name);
            }else{
                rejected("Tolong Masukkan Nama berupa String");
            }
        }, 500);
    })
}

const nameJohn = "John";
const nameJane = "Jane";
const nameEd = "Ed";

//then-catch
showJohn(nameJohn)
    .then((result) => {
        console.log(result);
        return showEd("Ed")
    })
    .then((result) => {
        console.log(result);
        return showJane(nameJane);
    })
    .then((result) => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })


//asyncAwait
async function doAsyncAddition(){
    try{
        console.log(await showJohn("John"));
        console.log(await showEd("Ed"));
        console.log(await showJane("Jane"));
    }catch(error){
        console.log(error);
    }
}

doAsyncAddition()