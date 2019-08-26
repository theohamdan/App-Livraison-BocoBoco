// AppLivreur1 -> Mot de passe
function checkPswd(ext) {
                    if ((document.pswdForm.pswd.value == null) == (document.pswdForm.pswd.value == 'passwordlivreur')) 
                            alert('Mot de passe invalide.');
                        else this.location.href = document.pswdForm.pswd.value + ext; 
                        // alert('Bienvenu.');
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


// // Map_Livraison
// function initMap(){
//       // Map options
//       var options = {
//         zoom:8,
//         center:{lat:42.3601,lng:-71.0589}
//       }

//       // New map
//       var map = new google.maps.Map(document.getElementById('map'), options);

//       // Listen for click on map
//       google.maps.event.addListener(map, 'click', function(event){
//         // Add marker
//         addMarker({coords:event.latLng});
//       });

//       // Array of markers
//       var markers = [
//         {
//           coords:{lat:42.4668,lng:-70.9495},
//           iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//           content:'<h1>Lynn MA</h1>'
//         },
//         {
//           coords:{lat:42.8584,lng:-70.9300},
//           content:'<h1>Amesbury MA</h1>'
//         },
//         {
//           coords:{lat:42.7762,lng:-71.0773}
//         }
//       ];

//       // Loop through markers
//       for(var i = 0;i < markers.length;i++){
//         // Add marker
//         addMarker(markers[i]);
//       }

//       // Add Marker Function
//       function addMarker(props){
//         var marker = new google.maps.Marker({
//           position:props.coords,
//           map:map,
//           //icon:props.iconImage
//         });

//         // Check for customicon
//         if(props.iconImage){
//           // Set icon image
//           marker.setIcon(props.iconImage);
//         }

//         // Check content
//         if(props.content){
//           var infoWindow = new google.maps.InfoWindow({
//             content:props.content
//           });

//           marker.addListener('click', function(){
//             infoWindow.open(map, marker);
//           });
//         }
//     }
// }

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