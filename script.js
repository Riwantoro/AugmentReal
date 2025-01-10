// Fungsi untuk menangani klik/tap pada objek
function setupClickListener() {
    // Ambil elemen kubus menggunakan ID
    const cube = document.querySelector("#myCube");

    // Tambahkan event listener untuk klik/tap
    cube.addEventListener("click", function () {
        // Ubah warna kubus secara acak
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        cube.setAttribute("color", randomColor);

        // Tampilkan pesan di konsol
        console.log("Kubus diklik! Warna berubah menjadi: " + randomColor);
    });
}

// Jalankan fungsi setelah scene siap
window.addEventListener("load", function () {
    setupClickListener();
});