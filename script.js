// Initialize prices (in Rupiah)
const prices = [10000, 12000, 5000, 3000, 7000]; // Bakso, Mie Ayam, Kebab, Es Teh, Buavita

// Dish Elements (Array to store all quantity and total price elements)
const quantities = [
    document.getElementById('quantity1'),
    document.getElementById('quantity2'),
    document.getElementById('quantity3'),
    document.getElementById('quantity4'),
    document.getElementById('quantity5')
];

const totalPrices = [
    document.getElementById('totalPrice1'),
    document.getElementById('totalPrice2'),
    document.getElementById('totalPrice3'),
    document.getElementById('totalPrice4'),
    document.getElementById('totalPrice5')
];

// Grand Total
let grandTotal = document.getElementById('grandTotal');

// Function to format number to Rupiah with commas
function formatToRupiah(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Update total price for a specific item
function updateItemTotal(index) {
    let quantity = parseInt(quantities[index].textContent, 10);
    let total = quantity * prices[index];
    totalPrices[index].textContent = formatToRupiah(total);

    // Update grand total after each change
    updateGrandTotal();
}

// Grand Total Calculation
function updateGrandTotal() {
    let total = 0;
    for (let i = 0; i < totalPrices.length; i++) {
        total += parseInt(totalPrices[i].textContent.replace(/\./g, ''), 10) || 0;
    }
    grandTotal.textContent = formatToRupiah(total);
}

// Attach event listeners to increase and decrease buttons
document.querySelectorAll('.menu-item').forEach((menuItem, index) => {
    // Increase button
    menuItem.querySelector('.increase').addEventListener('click', function() {
        quantities[index].textContent = parseInt(quantities[index].textContent, 10) + 1;
        updateItemTotal(index);
    });

    // Decrease button
    menuItem.querySelector('.decrease').addEventListener('click', function() {
        if (parseInt(quantities[index].textContent, 10) > 0) {
            quantities[index].textContent = parseInt(quantities[index].textContent, 10) - 1;
            updateItemTotal(index);
        }
    });
});

// Function to send data to Google Sheets
function sendOrderToGoogleSheets(name, email, orders, total) {
    const url = 'https://script.google.com/macros/s/AKfycbz80BSrUwWEecu1cX3Mef9Zlcm6azQAfgN-dnfzebIb/dev';  // Replace with your Google Web App URL
    
    // Create data object
    const data = {
        name: name,
        email: email,
        orders: orders,
        total: total
    };
    
    // Send the data via POST request
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        alert('Order has been sent successfully!');
    })
    .catch(error => {
        console.error('Error sending data:', error);
        alert('There was an error submitting your order.');
    });
}

// Order Button Event Listener
document.getElementById('order-btn').addEventListener('click', function() {
    // Get customer name and email
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;

    // Get total order price
    const totalPrice = document.getElementById('grandTotal').textContent;

    // Collect food order quantities
    let foodOrders = [];
    for (let i = 0; i < quantities.length; i++) {
        if (parseInt(quantities[i].textContent, 10) > 0) {
            foodOrders.push(`${quantities[i].textContent} x Dish ${i + 1}`);
        }
    }

    // Convert food orders array to a string
    let foodOrderString = foodOrders.join(", ");

    // Validate that the name and email are filled in
    if (customerName === "" || customerEmail === "") {
        alert("Please enter your name and email.");
        return;
    }

    // Send data to Google Sheets
    sendOrderToGoogleSheets(customerName, customerEmail, foodOrderString, totalPrice);
});
