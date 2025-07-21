// Tunggu hingga seluruh konten halaman web dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // Pilih elemen-elemen yang kita butuhkan dari HTML
    const registrationForm = document.getElementById('registrationForm');
    const fullNameInput = document.getElementById('fullname');
    const successMessageContainer = document.getElementById('successMessage');

    // Tambahkan 'event listener' ke form. Ini akan menjalankan fungsi saat form disubmit.
    registrationForm.addEventListener('submit', function(event) {
        
        // 1. Mencegah form dari perilaku default-nya (yaitu me-refresh halaman)
        event.preventDefault(); 

        // 2. Ambil nilai (nama) dari kolom input "Full Name"
        const userName = fullNameInput.value;

        // 3. Sembunyikan form registrasi
        registrationForm.style.display = 'none';

        // 4. Buat konten HTML untuk pesan sukses, lalu masukkan nama pengguna
        successMessageContainer.innerHTML = `
            <h3>Registrasi Berhasil, ${userName}!</h3>
            <p>Selamat datang di Campkit. Akun Anda telah berhasil dibuat.</p>
        `;

        // 5. Tampilkan container pesan sukses
        successMessageContainer.style.display = 'block';
    });
});

// GANTI KODE SHADOW DENGAN KODE SPOTLIGHT INI DI script.js

// Efek Spotlight yang mengikuti kursor pada hero section
const heroSection = document.querySelector('.hero-section');
const spotlight = document.querySelector('.spotlight-overlay');

heroSection.addEventListener('mousemove', (e) => {
    // Mendapatkan posisi kursor relatif terhadap hero section
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Menggerakkan posisi gradasi radial (spotlight) ke posisi kursor
    spotlight.style.background = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)`;
});

heroSection.addEventListener('mouseleave', () => {
    // Mengembalikan spotlight ke tengah saat kursor keluar
    spotlight.style.background = `radial-gradient(circle 200px at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)`;
});

// --- Logika untuk Tombol Mute Audio ---
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');
    const iconVolumeOn = muteButton.querySelector('.fa-volume-high');
    const iconVolumeOff = muteButton.querySelector('.fa-volume-xmark');

    // Coba putar audio setelah interaksi pengguna (jika autoplay diblokir)
    function playAudio() {
        music.play().catch(error => console.log("Autoplay diblokir oleh browser. Interaksi pengguna diperlukan."));
        document.body.removeEventListener('click', playAudio); // Hapus listener setelah dijalankan
    }
    document.body.addEventListener('click', playAudio);

    muteButton.addEventListener('click', function() {
        // Cek apakah audio sedang di-mute atau tidak
        if (music.muted) {
            music.muted = false; // Jika di-mute, nyalakan kembali
            iconVolumeOn.style.display = 'inline-block';
            iconVolumeOff.style.display = 'none';
        } else {
            music.muted = true; // Jika tidak di-mute, bisukan
            iconVolumeOn.style.display = 'none';
            iconVolumeOff.style.display = 'inline-block';
        }
    });
});