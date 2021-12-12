let x = Math.trunc(Math.random() * 20) + 1;
let inp,
  score = 10,
  high = 0;
document.querySelector(".btn").addEventListener("click", function () {
  inp = Number(document.querySelector(".num").value);
  if (inp === x) {
    document.querySelector(".lh").textContent = "Correct!";
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector(".guess").textContent = "Congrats! You Won!";
    document.querySelector(".q").textContent = x;
    document.querySelector(".q").style.width = "200px";

    if (score > high) {
      document.querySelector(".hi").textContent = score;
      high = score;
    }
  } else {
    score--;
    document.querySelector(".score_text").textContent = score;
    if (!score) {
      document.querySelector(".guess").textContent = "You Lost the gAme!";
      document.querySelector("body").style.backgroundColor = "Red";
    }
    if (inp > x) {
      document.querySelector(".lh").textContent = "Too High!";
    } else if (inp < x) {
      document.querySelector(".lh").textContent = "Too Low!";
    }
  }
  document.querySelector(".again").addEventListener("click", function () {
    x = Math.trunc(Math.random() * 20) + 1;
    score = 10;
    document.querySelector(".score_text").textContent = score;
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".lh").textContent = "Start Guessing...";
    document.querySelector(".guess").textContent = "Guess the number!";
    document.querySelector(".q").textContent = "?";
  });
});
