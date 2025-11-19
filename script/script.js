function bab(n, page) {
    if (page === "bab") {
        // Arahkan ke halaman bab-1, bab-2, dst
        window.location.href = `bab${n}-menu.html`;

    } else if (page === "evaluasi") {
        // Arahkan ke halaman evaluasi
        window.location.href = "evaluasi.html";

    } else {
        console.error("Parameter tidak valid!");
    }
}

function babPage(page, hal) {
    window.location.href = `bab/${page}Bab${hal}.html`
}

