const data = {id:1, meta: {author: 'Jane', tags:['js','es6']}};

//Cara satu satu / dicicil-------------------
// const {id} = data; //untuk mengambil ID
// const {meta: {author}} = data; //untuk mengambil author
// const {meta: {tags:[satu,]}} = data; // untuk mengambil tag[0]

//cara langsung----------------
const {id, meta: {author, tags:[satu, dua]}} = data;


console.log(id);
console.log(author);
console.log(satu);