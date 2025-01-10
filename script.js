// Fungsi untuk menangani klik/tap pada objek
function setupClickListener() {
    // Ambil elemen kubus menggunakan ID
    const cube = document.querySelector("#myCube");

    // Fungsi untuk mengubah warna kubus
    function changeColor() {
        // Buat warna acak dalam format hex
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // Ubah warna kubus
        cube.setAttribute("color", randomColor);
        // Tampilkan pesan di konsol
        console.log("Kubus diklik! Warna berubah menjadi: " + randomColor);
    }

    // Tambahkan event listener untuk klik (desktop) dan touchstart (smartphone)
    cube.addEventListener("click", changeColor);
    cube.addEventListener("touchstart", changeColor);
}

// Jalankan fungsi setelah scene siap
document.querySelector("a-scene").addEventListener("loaded", function () {
    setupClickListener();
});