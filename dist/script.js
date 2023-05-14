// hamburger menu
$(document).ready(function () {
  $("#hamburger-menu").click(function () {
    $("#menu").toggleClass("translate-x-full translate-x-0");
  });
});

// footer section dropdown
$(document).ready(function () {
  $(".dropdown-header").click(function () {
    $(this).siblings(".dropdown-menu").toggleClass("show");
  });
});

$(document).ready(function () {
  $("#nav-link").click(function () {
    $("#nav-link").removeClass("underline");
    $(this).addClass("underline");
  });
});