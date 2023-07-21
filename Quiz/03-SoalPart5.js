//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
// Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
// untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
// tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let first = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

// code here


// ---------------------------------------
console.log(first+ ' ' + second+ ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + '' + seventh);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
// Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
// Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
// tersebut!

let word = 'wow JavaScript is so cool';
let completeSentence =  word[0] + word[1] + word[2] + word[3] + word[4] +
                        word[5] + word[6] + word[7] + word[8] + word[9] +
                        word[10] + word[11] + word[12] + word[13] +
                        word[14] + word[15] + word[16] + word[17] +
                        word[18] + word[19] + word[20] + word[21] +
                        word[22] + word[23] + word[24];
// ---------------------------------------
console.log('\nSecond Word: ' + completeSentence);
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let completeSentence2 = word3.substring(0, 25)
// ---------------------------------------
console.log('\nThird Word: ' + completeSentence2);
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('\nFirst Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

let word5 = 'wow JavaScript is so cool';
let exampleFirstWord5 = word5.substring(4, 14);

let secondWordLength = exampleFirstWord5.length;

console.log('\nSecond Word: ' + exampleFirstWord5 + ', with length: ' + secondWordLength);

let word6 = 'wow JavaScript is so cool';
let exampleFirstWord6 = word6.substring(15, 17);

let thirdWordLength = exampleFirstWord6.length;

console.log('\nThird Word: ' + exampleFirstWord6 + ', with length: ' + thirdWordLength);

let word7 = 'wow JavaScript is so cool';
let exampleFirstWord7 = word7.substring(18, 20);

let fourthWordLength = exampleFirstWord7.length;

console.log('\nFourth Word: ' + exampleFirstWord7 + ', with length: ' + fourthWordLength);

let word8 = 'wow JavaScript is so cool';
let exampleFirstWord8 = word8.substring(21, 25);

let fifthWordLength = exampleFirstWord8.length;

console.log('\nFifth Word: ' + exampleFirstWord8 + ', with length: ' + fifthWordLength);