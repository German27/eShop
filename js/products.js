$('#btn-nav').click(function () {
    $('#sidebar').show()
    $('#btn-nav').addClass("active")
    $('#btn-nav').hide()
    $('#btn-close').show()
});

$('#btn-close').click(function () {
  $('#sidebar').hide()
  $('#btn-nav').show()
  $('#btn-close').hide()
});

$.getJSON("products.json", function (json) {

  for (let i = 0; i < json.ProductCollection.length; i++) {
    const product = json.ProductCollection[i];

    var html = '<div class="jr-flex"> <p class="product-name">' + product.Name + '</p>' +
      '<img src="images/default.jpg" alt="product">' +
      '<p class="product-description">' + product.Description + '</p>' +
      '<p class="product-price">$' + product.Price + '</p>' +
      '<button class="btn-product"> Agregar al carrito</button>' +
      '<a href="#" class="product-info">Ver mas</a>' +
      '</div>'

    $('.flex-container').append(html);

  }

});

