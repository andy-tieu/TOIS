const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

const timeH = document.querySelector('h1');
let timeSecond = 5;

// Call displayTime initially to set the initial time
displayTime(timeSecond);

// Create a function to start the countdown timer
function startCountdown() {
  const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);

    if (timeSecond <= 0) {
      clearInterval(countDown);
      endTime();
    }
  }, 1000);
}

// Call startCountdown to initiate the countdown timer
startCountdown();

function displayTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  timeH.innerHTML = display;
}

function endTime() {
  timeH.innerHTML = 'TIME FOR A BREAK!!';
  // Redirect to a website
  window.location.href = 'https://sites.google.com/view/unblockgames-hackuta/home';
}

try {
  // Code that may throw an error
  // For example, accessing an undefined variable or calling a function with incorrect arguments
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error);
}