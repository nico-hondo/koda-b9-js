const movie = {
    id: 1,
    title: 'Pangeran Kodok Tamvan',
    image: 'Gambar1_Kodok.png',
    genre: ['Thriller', 'Komedi'],
    cast: [
        {
            name: 'Given',
            role: 'Pangeran'
        },
        {
            name: 'Nando',
            role: 'Princess'
        },
    ],

    tampilkanDataJudul(){
        return `Judul Film adalah: ${this.title}, dengan Genre: ${this.genre}\n`;
    },

    tampilkanDataCast(){
        if(this.cast instanceof Object){
            const cast = this.cast.length
            let pemain ='';
            for(let i = 0; i < cast; i++){
                pemain += `Pemain ${i + 1} dengan Nama: ${this.cast[i].name} dan Role sebagai: ${this.cast[i].role}\n`
            }
            return `List Pemain adalah: \n${pemain}`;
        }
        return false
        
    },

    changeJudul: function(newJudul){
        if(typeof this.title === 'string'){
            this.title = newJudul;
        }
    },

    changeGambar: function(newGambar){
        if(typeof this.image === 'string'){
            this.image = newGambar;
        }
    },
    tampilkanDataJudulSet(){
        return `Perubahan Judul: ${this.title}, dan Gambar: ${this.image}\n`;
    },
}

//2 Line Code dibawah adalah Method Getter
console.log(movie.tampilkanDataJudul());

console.log(movie.tampilkanDataCast());

//Ini adalah Method Setter
movie.changeJudul("Pangeran Given");
console.log(movie.tampilkanDataJudulSet());

movie.changeGambar("Gambar Pangeran Given.jpg");
console.log(movie.tampilkanDataJudulSet());