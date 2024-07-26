let showPassword = document.querySelector(".showPassword");
let closePassword = document.querySelector(".closePassword");
let input = document.querySelector(".password");

showPassword.addEventListener("click", () => {
    input.type = "text";
    showPassword.style.display = "none";
    closePassword.style.display = "block";
});

closePassword.addEventListener("click", () => {
    input.type = "password";
    showPassword.style.display = "block";
    closePassword.style.display = "none";
})