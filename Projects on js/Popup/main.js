const submit = document.querySelector(".btn");
const popUp = document.querySelector(".pop-up");
const submittedBtn = document.querySelector(".submittedBtn");

submit.addEventListener("click", () => {
    popUp.style.display = "block";


    submittedBtn.addEventListener("click", () => {
        popUp.style.display = "none";
    });
});

