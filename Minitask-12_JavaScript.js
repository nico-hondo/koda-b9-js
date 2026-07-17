import { setTimeout } from 'node:timers/promises';

function getDataApi(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(!response.ok){
                throw "Terjadi Error Geiss"
            }
            return response.json();
        })
        .then((data) => {
            const tampungEmail = [];
            let tampungLowerCasebyMethod = [];
            for(let i = 0; i < data.length; i++){
                tampungEmail.push(data[i].email)
            }
            //making by build-in method -> toLowerCase()
            tampungLowerCasebyMethod = tampungEmail.map(el => 
                typeof el === 'string' ? el.toLowerCase() : el
            );

            console.log("By then-catch - Original");
            console.log(tampungEmail);
            console.log("By then-catch - built-in Method");
            console.log(tampungLowerCasebyMethod);

        })
        .catch((error) => console.log(error));
}

getDataApi();

async function getDataTypiCode(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
            throw "Terjadi Kesalahan";
        }

        const data = await response.json();
        const tampungData = [];
        let tampungArrayAscii = [];
        for(let i = 0; i < data.length; i++){
            tampungData.push(data[i].email)

            let result = '';

            let simpanKata = data[i].email;
            for(let j = 0; j < simpanKata.length; j++){
                let x = simpanKata.charCodeAt(j);
                if(x >= 65 && x <= 90){
                    result += String.fromCharCode(x + 32);
                }else{
                    result += simpanKata[j];
                }
            }
            
            tampungArrayAscii[i] = result;
        }

        console.log("By AsyncAwait - Original");
        console.log(tampungData);
        console.log("By AsyncAwait - Ascii")
        console.log(tampungArrayAscii);
      
    }catch (error){
        console.log(error);
    }
}
getDataTypiCode();