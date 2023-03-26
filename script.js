var lamp = document.getElementById("lamp-img");
var button = document.getElementById("lamp-btn");

button.addEventListener("click", function() {
  if (lamp.src.match("lamp-off")) {
    lamp.src = "lamp-on.png";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  } else {
    lamp.src = "lamp-off.png";
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  }
});
