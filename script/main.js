// Memanggil elemen waktu
const waktu = document.getElementById("waktu");

// Fungsi untuk menampilkan tanggal dan waktu secara real-time
function dateTime() {
    const date = new Date();
    // Format tanggal dan waktu
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    // Memperbarui konten elemen waktu dengan tanggal dan waktu yang diformat
    waktu.innerHTML = formattedDate;
}

// Memanggil fungsi dateTime setiap detik
setInterval(dateTime, 1000);

// Memanggil fungsi dateTime saat halaman dimuat
dateTime();
