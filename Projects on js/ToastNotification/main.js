const toasts = document.querySelectorAll(".showToast");
let toastBox = document.getElementById("toastBox");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error while submitting';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, please try again';

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

toasts.forEach(button => {
    button.addEventListener("click", function () {
        if (button.dataset.type === "success") {
            showToast(successMsg);
        } else if (button.dataset.type === "error") {
            showToast(errorMsg);
        } else if (button.dataset.type === "invalid") {
            showToast(invalidMsg);
        }
    });
});
