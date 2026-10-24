document.addEventListener('DOMContentLoaded', function () {

    // 1. Data Rekening Bank Dinamis
    const bankData = {
        'BRI': { number: '98181981', name: 'Testing. BRI' },
        'BNI': { number: '0091234567', name: 'Testing. BNI' },
        'MANDIRI': { number: '137000123456', name: 'Testing. Mandiri' },
        'BSI': { number: '7123456789', name: 'Testing. BSI' },
        'MEGA': { number: '01074001234', name: 'Testing. Bank Mega' },
        'BMS': { number: '5010012345', name: 'Testing. Mega Syariah' },
        'SEABANK': { number: '901234567890', name: 'Testing. SeaBank' },
        'SUPERBANK': { number: '881234567890', name: 'Testing. SuperBank' }
    };

    const selectBank = document.getElementById('selectBank');
    if (selectBank) {
        selectBank.addEventListener('change', function () {
            const selected = this.value;
            if (bankData[selected]) {
                document.getElementById('accountNumber').innerText = bankData[selected].number;
                document.getElementById('accountName').innerText = bankData[selected].name;
            }
        });
    }

    // 2. Rotasi Ikon Panah Accordion Summary Total
    const collapseSummary = document.getElementById('collapseSummary');
    const accordionIcon = document.getElementById('accordionIcon');
    
    if (collapseSummary && accordionIcon) {
        collapseSummary.addEventListener('hide.bs.collapse', function () {
            accordionIcon.className = 'bi bi-chevron-down transition-icon';
        });
        collapseSummary.addEventListener('show.bs.collapse', function () {
            accordionIcon.className = 'bi bi-chevron-up transition-icon';
        });
    }

    // 3. Copy Account Number
    const copyBtn = document.getElementById('copyAccountBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function () {
            const accNum = document.getElementById('accountNumber').innerText;
            navigator.clipboard.writeText(accNum);
            alert('Nomor rekening berhasil disalin: ' + accNum);
        });
    }

    // 4. Handle Toggle 'Lihat Semua' Produk (Di index.html)
    const btnLihatSemua = document.getElementById('btnLihatSemua');
    if (btnLihatSemua) {
        btnLihatSemua.addEventListener('click', function () {
            const extraProducts = document.querySelectorAll('.extra-product');
            const icon = document.getElementById('iconLihatSemua');
            const isHidden = extraProducts[0].classList.contains('d-none');

            extraProducts.forEach(function (product) {
                if (isHidden) {
                    product.classList.remove('d-none');
                } else {
                    product.classList.add('d-none');
                }
            });

            if (isHidden) {
                btnLihatSemua.childNodes[0].nodeValue = 'Sembunyikan ';
                icon.className = 'bi bi-chevron-up';
            } else {
                btnLihatSemua.childNodes[0].nodeValue = 'Lihat Semua ';
                icon.className = 'bi bi-chevron-right';
            }
        });
    }

    // 5. Payment Form Submit
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const fileInput = document.getElementById('buktiPembayaran');
            if (!fileInput.files.length) {
                alert('Silakan upload bukti pembayaran terlebih dahulu!');
                return;
            }
            const processModal = new bootstrap.Modal(document.getElementById('processNotificationModal'));
            processModal.show();
        });
    }

    // 6. Interactive Star Rating Modal Pesanan Selesai
    const stars = document.querySelectorAll('.star-rating i');
    if (stars.length > 0) {
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                stars.forEach((s, idx) => {
                    if (idx <= index) {
                        s.classList.add('active');
                        s.classList.remove('bi-star');
                        s.classList.add('bi-star-fill');
                    } else {
                        s.classList.remove('active');
                        s.classList.remove('bi-star-fill');
                        s.classList.add('bi-star');
                    }
                });
            });
        });
    }
});