// AppLivreur1 -> Mot de passe
function checkPswd(ext) {
    if ((document.pswdForm.pswd.value == null) == (md5(document.pswdForm.pswd.value) == '5e3467cf03e72f5bbf9ce969fbbbab9e')) // votre nouveua mot de passe 
            alert('Mot de passe invalide.');
    else this.location.href = ext; 
                        // alert('Bienvenu.');
}


//pour la page n° 3
function next(){

var isvalidated = true;
var divs = document.querySelectorAll('.selectall');

[].forEach.call(divs, function(element) {
  if (element.checked == false){
    isvalidated = false;
  }
  });
  if (isvalidated == true){
    window.open ("AppLivreur4.html")
  }
  else {
    alert('veuillez cocher sur tous les cases et rassurez-vous de ne rien oublier !');
  }
}



// Consigne Rendus PAGE N° 7 :

function fonction1() { 
var variable1 = document.getElementById("champ1").value; 
var variable2 = document.getElementById("champ2").value; 
if(variable1 != "" && variable2 != "" ) { 
   var variable3 = parseFloat(variable1) * parseFloat(variable2);
   document.getElementById("total1").value = variable3.toFixed(2);
} else {
   document.getElementById("total1").value = "0";
    }
}



// Panier Page 7

var cart = {
  products: [],
  total: 0,
  
  addProduct: function(product){
    this.products.push(product);
    this.calculateTotal();
  },
  calculateTotal: function(){
    var total = 0;
    for(var i = 0; i < this.products.length; i++){
      total += this.products[i].price;
    }
    this.total = Math.round(total*100) / 100;
  }
};

function displayCart(){
  
  if(cart.products.length == 0){
    document.getElementById('cart').innerHTML = '<h5>Aucun produit</h5>';
    
  } else {
    var cartCode = "";
    for(var i = 0; i < cart.products.length; i++){
      var product = cart.products[i];
      var div = "<div><strong>" + product.title + "</strong> "  + "</div>";
      cartCode += div;
    }
    
    cartCode += "<h5>Montant des consignes rendues seront crédités sur votre compte BocoBoco après validation interne : " + cart.total.toString().replace('.', ',') + " &dollar;</h5>"; 
    
    document.getElementById('cart').innerHTML = cartCode;
    
  }
}

function addProduct(id){
  
  var title = document.querySelector('#produit-' + id + ' h3').innerHTML;
  var price = Number(document.getElementById('prix-' + id).value);
  var product = {
    title: title,
    price: price
  }
  
  cart.addProduct(product);
  
  displayCart();
}

var buttons = document.querySelectorAll('a.add');
for(var i = 0; i < buttons.length; i++){
  var button = buttons[i];
  
  button.onclick = function(){
    var id = Number(this.getAttribute('data-id'));
    addProduct(id);
  };
}

displayCart();

function addvalue(){

}
var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 15
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('localisation trouvée');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total - (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText =  total + '$'
}

function updateCartTotalminus() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantityminus-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity_minus = quantityElement.value
        total = total - (price * quantity_minus)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText =  total - '$'
}
