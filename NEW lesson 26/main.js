// Регулярні вирази в JavaScript використовуються для пошуку тексту, заміни частин рядків і валідації даних. Вони є потужним інструментом для роботи з текстом.

// a, b, c, ... — буквальні символи, наприклад, a відповідає символу 'a'.
// \d — будь - яка цифра(0 - 9).
// \w — будь - який буквенно - цифровий символ(буква, цифра або підкреслення).
// \s — будь - який пробільний символ(пробіл, табуляція, новий рядок).
// . — будь - який символ, крім нового рядка.

// /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g - валідація електроної пошти

const validationForm = document.querySelector(".validation-form");
const inputForm = document.querySelectorAll(".form-control");

for (const item of inputForm) {
    item.addEventListener("blur", (event) => {
        validateForm(event.target);
    });
}

validationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    inputForm.forEach((item) => {
        validateForm(item);
        if (item.classList.contains("invalid")) {
            isValid = false;
        }
    });
    if (isValid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fix the errors in the form.");
    }
});

const setError = (element, message) => {
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = message;
    element.classList.add("invalid");
    element.classList.remove("valid");
}

const setValid = (element) => {
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = "";
    element.classList.remove("invalid");
    element.classList.add("valid");
}

const validateEmail = (emailField) => {
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g;

    if (emailField.value === "") {
        setError(emailField, "Email cannot be blank");
    } else if (!regex.test(emailField.value)) {
        setError(emailField, "Email is not valid");
    } else {
        setValid(emailField);
    }
}

const validatePassword = (password) => {
    const regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.value === "") {
        setError(password, "Password cannot be blank");
    } else if (!regex.test(password.value)) {
        setError(
            password,
            "Password must be at least 6 characters long and contain only letters, numbers, and special characters"
        );
    } else {
        setValid(password);
    }
}

const validateConfirmPassword = (passwordConfirm) => {
    const password = document.querySelector("#password").value;
    if (passwordConfirm.value === "") {
        setError(passwordConfirm, "Password cannot be blank");
    } else if (passwordConfirm.value !== password) {
        setError(passwordConfirm, "Passwords do not match");
    } else {
        setValid(passwordConfirm);
    }
}

const validateForm = (element) => {
    switch (element.id) {
        case "email":
            validateEmail(element);
            break;
        case "password":
            validatePassword(element);
            break;
        case "confirmPassword":
            validateConfirmPassword(element);
            break;
        default:
            alert("Validation error");
    }
}
