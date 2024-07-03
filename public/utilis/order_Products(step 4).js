function openPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

document.querySelector('.user-image-btn').addEventListener('click', () => {
    document.querySelector('.dropdown-menu').classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.user-image-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function showPaymentTab(tabId) {
    const tabs = document.querySelectorAll('.payment-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

function placeOrder() {
    alert('Order placed successfully!');
    closePopup('paymentMethodPopup');
}
