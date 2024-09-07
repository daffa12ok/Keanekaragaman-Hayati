
// Mendapatkan elemen tombol dengan class 'cta-button'
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Terima kasih sudah memesan!');
});

// Harga makanan
const prices = [10, 15];

// Mendapatkan elemen untuk makanan pertama (Dish 1)
let quantity1 = document.getElementById('quantity1');
let totalPrice1 = document.getElementById('totalPrice1');

// Mendapatkan elemen untuk makanan kedua (Dish 2)
let quantity2 = document.getElementById('quantity2');
let totalPrice2 = document.getElementById('totalPrice2');

// Fungsi untuk memperbarui jumlah dan total harga
function updateTotalPrice(quantityElement, totalPriceElement, price) {
    let quantity = parseInt(quantityElement.textContent);
    let total = quantity * price;
    totalPriceElement.textContent = total;
}

// Menambah event listener untuk Dish 1
document.querySelectorAll('.menu-item')[0].querySelector('.increase').addEventListener('click', function() {
    quantity1.textContent = parseInt(quantity1.textContent) + 1;
    updateTotalPrice(quantity1, totalPrice1, prices[0]);
});

document.querySelectorAll('.menu-item')[0].querySelector('.decrease').addEventListener('click', function() {
    if (parseInt(quantity1.textContent) > 0) {
        quantity1.textContent = parseInt(quantity1.textContent) - 1;
        updateTotalPrice(quantity1, totalPrice1, prices[0]);
    }
});

// Menambah event listener untuk Dish 2
document.querySelectorAll('.menu-item')[1].querySelector('.increase').addEventListener('click', function() {
    quantity2.textContent = parseInt(quantity2.textContent) + 1;
    updateTotalPrice(quantity2, totalPrice2, prices[1]);
});

document.querySelectorAll('.menu-item')[1].querySelector('.decrease').addEventListener('click', function() {
    if (parseInt(quantity2.textContent) > 0) {
        quantity2.textContent = parseInt(quantity2.textContent) - 1;
        updateTotalPrice(quantity2, totalPrice2, prices[1]);
    }
});

// Elemen untuk total keseluruhan
let grandTotal = document.getElementById('grandTotal');

// Fungsi untuk memperbarui total keseluruhan
function updateGrandTotal() {
    let total1 = parseInt(totalPrice1.textContent);
    let total2 = parseInt(totalPrice2.textContent);
    let overallTotal = total1 + total2;
    grandTotal.textContent = overallTotal;
}

// Modifikasi fungsi updateTotalPrice untuk memperbarui total keseluruhan
function updateTotalPrice(quantityElement, totalPriceElement, price) {
    let quantity = parseInt(quantityElement.textContent);
    let total = quantity * price;
    totalPriceElement.textContent = total;
    
    // Memperbarui total keseluruhan setelah perubahan harga per item
    updateGrandTotal();
}
