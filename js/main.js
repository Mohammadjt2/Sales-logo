function toggleActive() {
  var element = document.querySelector("#nav-menu");
  element.classList.toggle("actives");
}
function toggleActivesSub2() {
  var element = document.querySelector(".submenu2");
  element.classList.toggle("actives");
}

window.onload = function () {
  var mySpan = document.getElementById("mySpan");
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");

  if (mySpan.innerHTML) {
    div1.style.display = "none";
    div2.style.display = "block";
  } else {
    div1.style.display = "block";
    div2.style.display = "none";
  }
};
function toggleActiveProduct(event) {
  event.preventDefault();
  var element = document.querySelector("#sub");
  element.classList.toggle("actives");
}
$(document).ready(function () {
  $(".search-icon").click(function () {
    $(".search-modal").addClass("active");
    $("body").addClass("toggled");
  });
  $(".search-modal").click(function (e) {
    if ($(e.target).hasClass("search-modal")) {
      $(this).removeClass("active");
      $("body").removeClass("toggled");
    }
  });
});
