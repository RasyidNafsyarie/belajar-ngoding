// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peranharus memiliki isi data, 
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
//Ketika value peran sesuai dengan nama perannya program akan dijalankan sesuai nama peran masing-masing
//jika value peran kosong maka akan menjalankan pesan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
//jika value peran tidak sesuai dengan value yang ada di statement if maka akan kondisi else akan dijalankan


let nama = "proxitia", peran = "";

//code disini gunakan console.log untuk outputnya
if (peran === "Ksatria") {
    console.log(` halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if(peran === "Tabib") {
    console.log(` halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
} else if (peran === "Penyihir") {
    console.log(` halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else if (peran === "") {
    console.log(' tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada');
} else {
    console.log(' Pilih Peranmu untuk memulai game');
}