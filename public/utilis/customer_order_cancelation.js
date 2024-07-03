document.addEventListener('DOMContentLoaded', function() {
    const cancelOrderPopup = document.getElementById('cancel-order-popup');
    const confirmCancelPopup = document.getElementById('confirm-cancel-popup');
    const orderSummaryDetails = document.getElementById('order-summary-details');

    function openCancelOrderPopup(service, details, dateTime) {
        orderSummaryDetails.innerHTML = `
            <p>${service}</p>
            <p>${details}</p>
            <p>${dateTime}</p>
        `;
        cancelOrderPopup.style.display = 'flex';
    }

    function closePopup(popupId) {
        document.getElementById(popupId).style.display = 'none';
    }

    function confirmCancelOrder() {
        cancelOrderPopup.style.display = 'none';
        confirmCancelPopup.style.display = 'flex';
    }

    function finalizeCancelOrder() {
        alert('Order Cancelled Successfully');
        confirmCancelPopup.style.display = 'none';
    }

    window.openCancelOrderPopup = openCancelOrderPopup;
    window.closePopup = closePopup;
    window.confirmCancelOrder = confirmCancelOrder;
    window.finalizeCancelOrder = finalizeCancelOrder;
});
