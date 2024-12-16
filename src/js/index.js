import "../scss/fonts.scss";
import "../scss/style.scss";

const sliderWrapper = document.querySelector(".grid__card--4");

const sliderItems = sliderWrapper.querySelectorAll(".slider__item");
const pagination = sliderWrapper.querySelector(".slider__pagination");

let pageIndex = 0;
function scrollToIndex(index) {
  const cardWidth = sliderItems[0].offsetWidth;
  const gap = 16; // расстояние между карточками
  const padding = 65; // отступы

  const scrollTarget = index == 0 ? 0 : padding + index * (cardWidth + gap);
  slider.scrollTo({
    left: scrollTarget,
    behavior: "smooth", // плавная прокрутка
  });

  // Обновляем текущий индекс и пагинацию
  pageIndex = index;
  renderPagination();
}

function renderPagination() {
  pagination.innerHTML = Array.from(sliderItems)
    .map(
      (e, i) =>
        `<button  class="pagination__item ${i == pageIndex && "pagination__item--active"}"></button>`,
    )
    .join("");
  pagination.querySelectorAll(".pagination__item").forEach((e, i) => {
    e.addEventListener("click", () => {
      scrollToIndex(i);
    });
  });
}
renderPagination();

const slider = sliderWrapper.querySelector(".slider__wrapper");

slider.addEventListener("scroll", () => {
  console.log(slider.scrollLeft);

  // Параметры слайдера
  const cardWidth = sliderItems[0].offsetWidth; // Ширина карточки
  const gap = 16; // Расстояние между карточками
  const padding = 65; // Отступы

  // Центр видимой области
  const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;

  // Определение активной карточки
  let activeIndex = 0;
  let minDistance = Infinity;

  sliderItems.forEach((item, index) => {
    const cardCenter = padding + index * (cardWidth + gap) + cardWidth / 2;
    const distance = Math.abs(cardCenter - sliderCenter);

    if (distance < minDistance) {
      minDistance = distance;
      activeIndex = index;
    }
  });

  if (pageIndex !== activeIndex) {
    pageIndex = activeIndex;
    renderPagination();
  }
});

const formWrapper = document.querySelector(".site__feedback");
const form = formWrapper.querySelector(".feedback__form");
const name = form.querySelector(".feedback__name");
const telInput = form.querySelector(".feedback__tel");
const checkbox = form.querySelector(".feedback__checkbox");
const submitButton = form.querySelector(".feedback__submit");
const close = form.querySelector(".feedback__close");
const result = formWrapper.querySelector(".feedback__result");
const videoPlay = document.querySelector(".header__video");
submitButton.addEventListener("click", (e) => {
  fetch(`/api/feedback?name=${name.value}&tel=${telInput.value}`, {
    method: "GET",
  })
    .then((resp) => {
      console.log(resp.status);
      if (resp.status == 200) {
        result.classList.add("feedback__result--succses");
        result.innerHTML = "Заявка отправлена";
      } else {
        result.classList.add("feedback__result--fail");
        result.innerHTML = "Заявка не отправлена";
      }
    })
    .catch(console.error);
});

document.addEventListener("DOMContentLoaded", function () {
  const nameError = document.createElement("div");
  const telError = document.createElement("div");

  nameError.className = "feedback__error";
  telError.className = "feedback__error";

  name.parentNode.insertBefore(nameError, name.nextSibling);
  telInput.parentNode.insertBefore(telError, telInput.nextSibling);

  function validateForm() {
    const namePattern = /^[a-zA-Zа-яА-Я]{1,15}$/;
    const telPattern = /^\+7\d{10}$/;

    const isNameValid = namePattern.test(name.value);
    const isTelValid = telPattern.test(telInput.value);
    const isCheckboxChecked = checkbox.checked;

    if (!isNameValid && name.value !== "") {
      nameError.textContent =
        "Заполните поле. Используйте только русские или латинские буквы";
    } else {
      nameError.textContent = "";
    }

    if ((!isTelValid && telInput.value !== "") || telInput.value == "+7") {
      telError.textContent = "Заполните поле. Формат: +79999999999";
    } else {
      telError.textContent = "";
    }

    if (isNameValid && isTelValid && isCheckboxChecked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  name.addEventListener("input", validateForm);
  telInput.addEventListener("input", validateForm);
  checkbox.addEventListener("change", validateForm);

  telInput.addEventListener("focus", function () {
    if (!this.value) {
      this.value = "+7";
    }
  });

  telInput.addEventListener("input", function () {
    if (!this.value.startsWith("+7")) {
      this.value = "+7";
    }
  });

  telInput.addEventListener("keypress", function (e) {
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  });

  name.addEventListener("keypress", function (e) {
    if (!/[a-zA-Zа-яА-Я]/.test(e.key)) {
      e.preventDefault();
    }
  });

  name.addEventListener("focus", function () {
    nameError.textContent = "";
  });

  telInput.addEventListener("focus", function () {
    telError.textContent = "";
  });
});

const submitButtons = document.querySelectorAll(".card__submit");
const sliderButtons = document.querySelectorAll(".slider__submit ");

submitButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    formWrapper.classList.add("feedback--open");
  });
});
sliderButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    formWrapper.classList.add("feedback--open");
  });
});

close.addEventListener("click", function () {
  formWrapper.classList.remove("feedback--open");
  result.setAttribute("class", "feedback__result");
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("feedback--open")) {
    formWrapper.classList.remove("feedback--open");
    result.setAttribute("class", "feedback__result");
  }
});

videoPlay.addEventListener("click", () => {
  const player = document.querySelector(".header__player");

  player.offsetWidth;
  player.offsetHeight;

  player.innerHTML = `<iframe width="${player.offsetWidth}" height="${player.offsetHeight}" src="https://rutube.ru/play/embed/975b7ef01d4f1b3d948c646e85f244d5/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;
  videoPlay.classList.add("header__video--close");
  const closeButton = document.createElement("button");
  closeButton.classList.add("header__close");
  player.append(closeButton);
  closeButton.addEventListener("click", () => {
    videoPlay.classList.remove("header__video--close");
    player.innerHTML =
      '<img class="header__image" src="images/candies.png" alt="candies" />';
  });
});
