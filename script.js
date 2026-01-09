/* =====================
   VALIDASI TRANSAKSI
===================== */
function validasiTransaksi() {
    const nama = document.getElementById("nama").value.trim();
    const jumlah = document.getElementById("jumlah").value.trim();
    const kategori = document.getElementById("kategori").value.trim();
    const error = document.getElementById("error");

    if (!nama || !jumlah || !kategori) {
        error.textContent = "Semua data wajib diisi!";
        return false;
    }

    alert("Transaksi berhasil disimpan.");
    return true;
}

/* =====================
   REVEAL ANIMATION GLOBAL
===================== */
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.2
    });

    reveals.forEach(el => observer.observe(el));
});
