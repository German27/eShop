$('#btn-nav').click(function () {
  if ($('#btn-nav').hasClass("active")) {
    $('#sidebar').hide()
    $('#btn-nav').removeClass("active")
  } else {
    $('#sidebar').show()
    $('#btn-nav').addClass("active")
  }
});
