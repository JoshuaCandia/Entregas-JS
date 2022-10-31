import { setCurrentPage, replaceMainContent, setTitle } from '../../js/helpers.js';

export function loadCartComponent() {
  fetch('../components/cart/cart.html')
    .then((response) => response.text())
    .then((cartHtml) => {
      replaceMainContent(cartHtml);
      initCartComponent();
    });
}

function initCartComponent() {
  setCurrentPage('cart');
  setTitle('Carrito de Compras');

  let productsInCart = getCart();
  let productList = '<ul class="ul-cart">';

  productsInCart.forEach((product) => {
    productList += '<li class="cart-div  cart-product-'+ product.id + '">';
    productList +=
      '<div class="cart-product-image"> <img class="imagen__producto" src="' + product.image + '"> </div>';
    productList +=
      '<div class="cart-product-price"><h3>' + product.name + '</h3><span>' + product.price + '</span></div>';
    productList += '<div class="cart-product-buttons"></div>';
    productList += '</div>';
  });

  productList += '</ul>';

  let cartElement = document.getElementById('cart-container');
  cartElement.innerHTML = productList;

  addCartProductButtons(productsInCart);
}

function addCartProductButtons(products) {
  let buttonElementContainers = document.getElementsByClassName('cart-product-buttons');

  for (let index = 0; index < buttonElementContainers.length; index++) {
    const buttonElementContainer = buttonElementContainers[index];
    const product = products[index];
    const deleteButton = createDeleteButton(product);

    buttonElementContainer.appendChild(deleteButton);
  }
}

function createDeleteButton(product) {
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Quitar';
  deleteButton.setAttribute('class', 'boton');
  deleteButton.onclick = () => {
    removeFromCart(product);
  };

  return deleteButton;
}

function removeFromCart(product) {
  const cartProductElement = document.getElementsByClassName('cart-product-' + product.id)[0];
  cartProductElement.remove();

  const cart = getCart();
  const cartProductToRemove = cart.find((cartProduct) => cartProduct.id == product.id);
  const index = cart.indexOf(cartProductToRemove);
  cart.splice(index, 1);

  saveCart(cart);
}

export function addToCart(product) {
  const cart = getCart();

  cart.push(product);

  saveCart(cart);
}

function getCart() {
  let products = localStorage.getItem('productsCart');
  if (products != null) {
    return JSON.parse(products);
  }

  return [];
}

function saveCart(cart) {
  localStorage.setItem('productsCart', JSON.stringify(cart));
}
