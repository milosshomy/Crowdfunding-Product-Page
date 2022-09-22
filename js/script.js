//Getting elements

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const modalBtn = document.getElementById("modal-btn");
const primaryBtn = document.querySelectorAll(".primary-btn");
const secondaryBtn = document.querySelector(".secondary-btn");
const bookmarkText = document.querySelector(".secondary-btn span");
const cash = document.getElementById("cash");
const backers = document.getElementById("backers");
const progressBar = document.getElementById("inner-progress-bar");
const numbers = document.querySelectorAll(".number");
const modalContainer = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");
const radioButtons = document.querySelectorAll(".radio-button");
const rewardContainer = document.querySelectorAll(".reward-container");
const buttonContainer = document.querySelectorAll(".btn-container");
const line = document.querySelectorAll(".line");
const inputBtn = document.querySelectorAll(".input-btn");
const gratitudeContainer = document.querySelector(".gratitude-container");
const gratitudeBtn = document.getElementById("gratitude-btn");
let progressBarWidth = 70;

//Open menu on hamburger click and change hamburger style

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  hamburger.classList.toggle("active");
});

//Change style and text of bookmark button on click

secondaryBtn.addEventListener("click", () => {
  secondaryBtn.classList.toggle("bookmarked");
  if (secondaryBtn.classList.contains("bookmarked")) {
    bookmarkText.textContent = "Bookmarked";
  } else {
    bookmarkText.textContent = "Bookmark";
  }
});

//Selecting rewards and updating stats

function calculateCashAndUpdateStats(event) {
  const removedFirstLetter = cash.textContent.substring(1);

  const replaceComaWithDot = removedFirstLetter.replace(/,/g, ".");

  const removeComa = backers.textContent.replace(/,/g, ".");

  const cashNumber = Number(replaceComaWithDot);

  const backersNumber = Number(removeComa);

  const result = event.target.previousElementSibling.firstElementChild;

  cash.textContent = "$" + (cashNumber + 25);

  result.textContent -= 1;

  //Check issue about numbers on backers content

  backers.textContent = backersNumber + 1 / 1000;
}

function calculateModalCashAndUpdateStats(event, inputNumberValue) {
  const removedFirstLetter = cash.textContent.substring(1);

  const replaceComaWithDot = removedFirstLetter.replace(/,/g, ".");

  const removeComa = backers.textContent.replace(/,/g, ".");

  const cashNumber = Number(replaceComaWithDot);

  const backersNumber = Number(removeComa);

  cash.textContent = "$" + (cashNumber + inputNumberValue);

  const mobileResult =
    event.target.offsetParent.firstElementChild.children[2].firstElementChild;

  mobileResult.textContent -= 1;

  const desktopResult =
    event.target.offsetParent.firstElementChild.children[0].lastElementChild
      .firstElementChild;

  desktopResult.textContent -= 1;

  //Check issue about numbers on backers content

  backers.textContent = backersNumber + 1 / 1000;
}

primaryBtn[1].addEventListener("click", (e) => {
  calculateCashAndUpdateStats(e);
  updateProgressBar();
});

primaryBtn[2].addEventListener("click", (e) => {
  calculateCashAndUpdateStats(e);
  updateProgressBar();
});

//Creating modal on button click

modalBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
  overlay.style.display = "block";
});

//Removing modal on close icon click

closeIcon.addEventListener("click", () => {
  modalContainer.classList.remove("show");
  overlay.style.display = "none";
});

//Changing style of container on radio button click and displaying button containers

radioButtons[0].addEventListener("click", () => {
  buttonContainer.forEach((btnContainer) => {
    btnContainer.classList.remove("flex");
  });
  rewardContainer.forEach((container) => {
    container.classList.remove("border-cyan");
  });
  rewardContainer[3].classList.add("border-cyan");
  buttonContainer[0].classList.add("flex");
});

radioButtons[1].addEventListener("click", () => {
  line.forEach((lines) => {
    lines.classList.remove("appear");
  });
  buttonContainer.forEach((btnContainer) => {
    btnContainer.classList.remove("flex");
  });
  rewardContainer.forEach((container) => {
    container.classList.remove("border-cyan");
  });
  rewardContainer[4].classList.add("border-cyan");
  buttonContainer[1].classList.add("flex");

  line[0].classList.add("appear");
});

radioButtons[2].addEventListener("click", () => {
  line.forEach((lines) => {
    lines.classList.remove("appear");
  });
  buttonContainer.forEach((btnContainer) => {
    btnContainer.classList.remove("flex");
  });
  rewardContainer.forEach((container) => {
    container.classList.remove("border-cyan");
  });
  rewardContainer[5].classList.add("border-cyan");
  buttonContainer[2].classList.add("flex");

  line[1].classList.add("appear");
});

//Selecting rewards on modal container updating stats and showing gratitude container on click

inputBtn[0].addEventListener("change", (e) => {
  const inputValue = e.target.value;

  const inputNumberValue = Number(inputValue);

  primaryBtn[5].addEventListener("click", (e) => {
    calculateModalCashAndUpdateStats(e, inputNumberValue);
    numbers[3].textContent -= 1;
    modalContainer.classList.remove("show");
    gratitudeContainer.classList.add("show");
    updateProgressBar();
  });
});

inputBtn[1].addEventListener("change", (e) => {
  const inputValue = e.target.value;

  const inputNumberValue = Number(inputValue);

  primaryBtn[6].addEventListener("click", (e) => {
    calculateModalCashAndUpdateStats(e, inputNumberValue);
    numbers[4].textContent -= 1;
    modalContainer.classList.remove("show");
    gratitudeContainer.classList.add("show");
    updateProgressBar();
  });
});

primaryBtn[4].addEventListener("click", () => {
  modalContainer.classList.remove("show");
  gratitudeContainer.classList.add("show");
});

//Removing gratitude container on click

gratitudeBtn.addEventListener("click", () => {
  gratitudeContainer.classList.remove("show");
  overlay.style.display = "none";
});

//Updating proggress bar

function updateProgressBar() {
  progressBarWidth += 10;
  progressBar.style.width = progressBarWidth + "%";
}
