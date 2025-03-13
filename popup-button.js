const button = document.getElementById('toggleMenu');
  const popup = document.getElementById('popupMenu');

  function togglePopup() {
    // Jika popup sudah tampil, tutup saja
    if (popup.style.display === 'block') {
      popup.style.display = 'none';
      return;
    }

    // Tampilkan popup "sementara" agar bisa diukur
    popup.style.display = 'block';
    popup.style.visibility = 'hidden';

    // Dapatkan posisi & ukuran tombol
    const rect = button.getBoundingClientRect();

    // Ukuran popup
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;

    // Ruang di bawah tombol
    const spaceBelow = window.innerHeight - rect.bottom;
    // Ruang di atas tombol
    const spaceAbove = rect.top;

    // -- Logika Vertical (atas/bawah) --
    let topPos;
    if (spaceBelow >= popupHeight) {
      // Cukup ruang di bawah tombol
      topPos = rect.bottom + window.scrollY;
    } else if (spaceAbove >= popupHeight) {
      // Tidak cukup di bawah, tapi cukup di atas
      topPos = rect.top + window.scrollY - popupHeight;
    } else {
      // Baik atas maupun bawah tidak cukup, fallback ke bawah
      topPos = rect.bottom + window.scrollY;
    }

    // -- Logika Horizontal (kiri/kanan) --
    // Default: sejajar sisi kiri tombol
    let leftPos = rect.left + window.scrollX;

    // Cek apakah melewati sisi kanan layar
    if (leftPos + popupWidth > window.innerWidth) {
      // Jika tidak muat di sisi kiri, coba geser ke sisi kanan tombol
      // agar sisi kanan popup sejajar dengan sisi kanan tombol
      leftPos = rect.right + window.scrollX - popupWidth;

      // Jika tetap kurang dari 0, berarti layar sangat sempit,
      // fallback: biar popup menempel di sisi kiri layar
      if (leftPos < 0) {
        leftPos = 0;
      }
    }

    // Set posisi final
    popup.style.top = topPos + 'px';
    popup.style.left = leftPos + 'px';

    // Bikin popup terlihat
    popup.style.visibility = 'visible';
  }

  // Klik tombol untuk buka/tutup popup
  button.addEventListener('click', function(e) {
    togglePopup();
    e.stopPropagation(); // agar klik tombol tidak menutup popup
  });

  // Tutup popup jika klik di luar popup
  document.addEventListener('click', function(e) {
    if (!popup.contains(e.target) && e.target !== button) {
      popup.style.display = 'none';
    }
  });
