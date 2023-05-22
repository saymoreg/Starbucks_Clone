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

// menu section underline
$(".nav-link").click(function () {
  $(".nav-link").removeClass("underline-primary");
  $(this).addClass("underline-primary");
});

// smooth scroll of items in menu
const $tabs = $(".tab-button");
const $tabPanels = $(".tab-panel");

$tabs.each(function (index) {
  $(this).on("click", function () {
    $tabs.removeClass("tab-selected");
    $tabPanels.addClass("hidden");
    $(this).addClass("tab-selected");
    $tabPanels.eq(index).removeClass("hidden");
  });
});

// underlining with green line in rewards section
const $buttons = $('[id^="tab-"]');

$buttons.click(function () {
  $buttons.removeClass("underline-primary");
  $(this).addClass("underline-primary");
});

// owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".nonloop").owlCarousel({
  center: false,
  items: 2,
  loop: false,
  margin: 10,
  responsive: {
    600: {
      items: 4,
    },
  },
});
