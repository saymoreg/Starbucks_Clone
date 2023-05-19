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

// image selector

$('#button-25').click(() => {
  $('#image-1').show();
  $('#image-2').hide();
  $('#image-3').hide();
  $('#image-4').hide();
  $('#image-5').hide();
});

$('#button-100').click(() => {
  $('#image-1').hide();
  $('#image-2').show();
  $('#image-3').hide();
  $('#image-4').hide();
  $('#image-5').hide();
});

$('#button-200').click(() => {
  $('#image-1').hide();
  $('#image-2').hide();
  $('#image-3').show();
  $('#image-4').hide();
  $('#image-5').hide();
});

$('#button-300').click(() => {
  $('#image-1').hide();
  $('#image-2').hide();
  $('#image-3').hide();
  $('#image-4').show();
  $('#image-5').hide();
});

$('#button-400').click(() => {
  $('#image-1').hide();
  $('#image-2').hide();
  $('#image-3').hide();
  $('#image-4').hide();
  $('#image-5').show();
});