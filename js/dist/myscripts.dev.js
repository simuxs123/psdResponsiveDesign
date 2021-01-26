"use strict";

var btn = document.querySelector(".burger-btn");
var i = document.querySelectorAll("i");
btn.addEventListener("click", function () {
  i.forEach(function (el) {
    el.classList.toggle("open");
  });
});