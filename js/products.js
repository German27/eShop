$('#btn-nav').click(function () {
  $('#sidebar').show()
  $('#btn-nav').hide()
  $('#btn-close').show()
  $('body').addClass("lock-scroll");
  $('#overlay').addClass("bg-dark-active")
  $('.jr-flex').addClass("z-i")
});

$('#btn-close').click(function () {
  $('#sidebar').hide();
  $('#btn-nav').show();
  $('#btn-close').hide();
  $('#overlay').removeClass("bg-dark-active");
  $('.jr-flex').removeClass("z-i");
  $('body').removeClass("lock-scroll");
});

$.getJSON("products.json", function (json) {

  for (let i = 0; i < json.ProductCollection.length; i++) {
    const product = json.ProductCollection[i];

    let html =  '<div class="jr-flex"> <p class="product-name">' + product.Name + '</p>' +
                  '<img src="images/default.jpg" alt="product">' +
                  '<p class="product-description">' + product.Description + '</p>' +
                  '<p class="product-price">$' + product.Price + '</p>' +
                  '<button class="btn-product"> Agregar al carrito </button>' +
                  '<a href="product/' + product.ProductId + '" class="product-info">Ver mas</a>' +
                  '<div id="product-modal" class="modal">' +
                    '<div class="modal-content">' + 
                      '<div class="modal-body">' + 
                        '<img src="images/correct.png" alt="check-mark">' +
                        '<p> Tu producto fue agregado al carrito con exito </p>' +
                      '</div>' +
                      '<div class="modal-footer">' +
                        '<button class=""> Ir al carrito </button>' +
                        '<button class="close-modal"> Seguir comprando </button>' +
                      '</div>' +
                    '</div>'
                  '</div>' +
                '</div>';

    $('.flex-container').append(html);
    
  }

});

$(document).on('click', '.btn-product', function () {
  $('#product-modal').show();
  $('body').addClass("lock-scroll");
  $('#btn-nav').addClass("p-ev");
});

$(document).on('click', '.close-modal', function () {
  $('#product-modal').hide();
  $('body').removeClass("lock-scroll");
  $('#btn-nav').removeClass("p-ev");
});

