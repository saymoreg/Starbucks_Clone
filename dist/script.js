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
