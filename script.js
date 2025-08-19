const strongs = document.querySelectorAll("strong");

function highlight() {
  strongs.forEach((stg) => {
    stg.style.color = "rgb(0, 128, 0)";
  });
}

function return_normal() {
  strongs.forEach((stg) => {
    stg.style.color = "rgb(0, 0, 0)";
  });
}
