//nama nama variable

// let a = 10;
// var b = 20;
// const c = 30;

//tipe data string
let namaDepan = "Rasyid"; 
let namaBelakang = "Nafsyarie";

//tipe data integer atau number
let umur = 19; 

//tipe data float berupa angka desimal
let beratBadan = 49.5; 

//tipe data boolean yg memiliki value true or false
let boolean = true; 

//tipe data object, yg berisikan beberapa value
let biodata = { 
    nama : "Rasyid",
    umur : 19,
    beratBadan : 49.5,
}

// console.log(biodata);

//operator aritmatika
let angka1 = 25;
let angka2 = 15;

// console.log('Ini Operator Penjumlahan ', + angka1 + angka2);
// console.log('Ini Operator Pengurangan ', + angka1 - angka2);
// console.log('Ini Operator Perkalian ', + angka1 * angka2);
// console.log('Ini Operator Pembagian ', + angka1 / angka2);
// console.log('Ini Operator Modulus ', + angka1 % angka2);


//pengisian variable
let hasilAritmatika = angka1 + angka2;
// console.log(hasilAritmatika)

//string bisa ditambah namun tidak bisa dikurang menggunakan operator aritmatika
let namaLengkap = namaDepan + " " + namaBelakang;
// console.log(namaLengkap)
// console.log(namaDepan + " " + namaBelakang)
// console.log(namaDepan - namaBelakang)


let number = 20;
// console.log(number + 10)
number = 20;
// console.log(number + 10)

//nilai true = 1, false = 0
number = true;
// console.log(number + 10)

const hewan = 'Jerapah'
console.log(hewan)

//error dikarenakan variable const tidak dapat di initiate kembali atau nilainya bersifat tetap
hewan = 'Singa'
console.log(hewan)
