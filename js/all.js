$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(".menu").toggleClass("active");
    $(this).toggleClass("active");
  });
});
