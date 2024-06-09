document.addEventListener("DOMContentLoaded", () => {
  // swiper
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 1100,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); // form validation

  function validation(form) {
    function createErrorInput(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement("label");
      parent.classList.add("error");
      errorLabel.classList.add("error-label");
      errorLabel.textContent = text;
      parent.append(errorLabel);
    }

    let result = true;

    function removeErrorInput(input) {
      const parent = input.parentNode;

      if (parent.classList.contains("error")) {
        parent.querySelector(".error-label").remove();
        parent.classList.remove("error");
      }
    }

    const allInputs = form.querySelectorAll(".form__text");

    allInputs.forEach((input) => {
      removeErrorInput(input);

      const reg = /^[А-ЯЁ]+$/i;

      if (!reg.test(input.value)) {
        createErrorInput(input, "Заполните, пожалуйста, поле");
        result = false;
      }
    });

    const inputPhone = form.querySelector(".form__number");
    removeErrorInput(inputPhone);
    const regPhone = /^7?\d{10}$/;
    if (!regPhone.test(inputPhone.value)) {
      createErrorInput(
        inputPhone,
        "Напишите ваш телефон в формате 79999999999"
      );
      result = false;
    }

    return result;
  }

  const formInPage = document.querySelectorAll("#form");

  formInPage.forEach((form) => {
    form.addEventListener("submit", function (e) {
      if (validation(this) === true) {
        alert("Форма заполнена успешно.");
      } else {
        e.preventDefault();
      }
    });
  });
});

// preloader
window.onload = function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};
