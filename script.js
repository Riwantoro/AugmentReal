// Fungsi untuk menangani tap pada objek
function setupTapListener() {
    // Ambil elemen kubus menggunakan ID
    const cube = document.querySelector("#myCube");

    // Fungsi untuk mengubah warna kubus
    function changeColor() {
        // Buat warna acak dalam format hex
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // Ubah warna kubus
        cube.setAttribute("color", randomColor);
        // Tampilkan pesan di konsol
        console.log("Kubus ditap! Warna berubah menjadi: " + randomColor);
    }

    // Tambahkan event listener untuk touchstart (layar sentuh)
    cube.addEventListener("touchstart", function (event) {
        // Hindari perilaku default (seperti zoom)
        event.preventDefault();
        // Panggil fungsi changeColor
        changeColor();
    });

    // Tambahkan event listener untuk click (desktop)
    cube.addEventListener("click", changeColor);
}

// Jalankan fungsi setelah scene siap
document.querySelector("a-scene").addEventListener("loaded", function () {
    setupTapListener();
});