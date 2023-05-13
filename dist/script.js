// hamburger menu
$(document).ready(function () {
  $("#hamburger-menu").click(function () {
    $("#menu").toggleClass("translate-x-full translate-x-0");
  });
});


$(document).ready(function () {
  $(".dropdown-header").click(function () {
    $(this).siblings(".dropdown-menu").toggleClass("show");
  });
});