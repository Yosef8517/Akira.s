// Display a toast with dynamic content
function showToast(serviceName) {
    const toastBody = document.querySelector("#toastMessage .toast-body");
    toastBody.textContent = `${serviceName} details coming soon!`;
    const toast = new bootstrap.Toast(document.getElementById("toastMessage"));
    toast.show();
}
