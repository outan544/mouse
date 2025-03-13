// <![CDATA[
    
  // Pasang event listener di document untuk menangani klik
  document.addEventListener('click', function(e) {
    // Jika tombol yang diklik adalah dengan id "toggleMenu"
    if (e.target && e.target.id === 'toggleMenu') {
      const popup = document.getElementById('popupMenu');
      if (!popup) return;

      // Logika toggle popup seperti sebelumnya
      if (popup.style.display === 'block') {
        popup.style.display = 'none';
      } else {
        popup.style.display = 'block';
        popup.style.visibility = 'hidden';

        const rect = e.target.getBoundingClientRect();
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        let topPos;

        if (spaceBelow >= popupHeight) {
          topPos = rect.bottom + window.scrollY;
        } else if (spaceAbove >= popupHeight) {
          topPos = rect.top + window.scrollY - popupHeight;
        } else {
          topPos = rect.bottom + window.scrollY;
        }

        let leftPos = rect.left + window.scrollX;
        if (leftPos + popupWidth > window.innerWidth) {
          leftPos = rect.right + window.scrollX - popupWidth;
          if (leftPos < 0) {
            leftPos = 0;
          }
        }

        popup.style.top = topPos + 'px';
        popup.style.left = leftPos + 'px';
        popup.style.visibility = 'visible';
      }
      e.stopPropagation();
    } else {
      // Jika klik di luar popup, tutup popup
      const popup = document.getElementById('popupMenu');
      const button = document.getElementById('toggleMenu');
      if (popup && !popup.contains(e.target) && e.target !== button) {
        popup.style.display = 'none';
      }
    }
  });

  // Muat konten eksternal
  fetch("https://outan544.github.io/mouse/js/emoticon-list.txt")
    .then(response => response.text())
    .then(data => {
      document.getElementById("emoticon-container").innerHTML = data;
    })
    .catch(error => console.error("Error memuat file:", error));
    
// ]]>
