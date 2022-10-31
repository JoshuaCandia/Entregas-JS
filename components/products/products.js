import { getCurrentPage, setCurrentPage, replaceMainContent, setTitle } from '../../js/helpers.js';
import { addToCart } from '../cart/cart.js';

let products = [];

function loadProductsComponent() {
  return fetch('../components/products/products.html')
    .then((response) => response.text())
    .then((productsHtml) => {
      replaceMainContent(productsHtml);
      return initProductsComponent();
    });
}

function initProductsComponent() {
  setCurrentPage('products');
  setTitle("Productos");

  return getProducts().then(() => {
    showProducts(products);
  });
}

function getProducts() {
  return fetch('../assets/products.json')
    .then((response) => response.json())
    .then((data) => {
      products = data;
    });
}

export function searchProducts(query) {
  if (getCurrentPage() != 'products') {
    loadProductsComponent().then(() => {
      searchProducts(query);
    });
  } else {
    let productsContainerElement = document.getElementById('products-container');
    let productsResult = filterProducts(query);

    if (productsResult.length > 0) {
      showProducts(productsResult);
    } else {
      productsContainerElement.innerHTML =
        '<p>No existen productos con el criterio de busqueda</p>';
    }
  }
}

function filterProducts(query) {
  return products.filter((product) => product.name.toLowerCase().includes(query));
}

function showProducts(products) {
  let productsHTML = "<div class='productos'>";

  products.forEach((product) => {
    productsHTML += "<div class='producto'><ul class =`ul__producto`>";
    productsHTML += "<div class='container-img'>'<img class=' imagen__producto' src=" + product.image + ' ></div>';
    productsHTML += '<li  class="li-name" >Nombre: ' + product.name + '</li>';
    productsHTML += '<li class="li-price">Precio: $' + product.price + '</li>';
    productsHTML += "<li class='productButtons'></li>";
    productsHTML += '</ul></div>';
  });

  productsHTML += '</div>';



  let productsContainerElement = document.getElementById('products-container');
  productsContainerElement.innerHTML = productsHTML;

  createProductsButtons(products);
}



function createProductsButtons(products) {
  let productButtonElements = document.getElementsByClassName('productButtons');

  for (let index = 0; index < productButtonElements.length; index++) {
    const element = productButtonElements[index];
    const product = products[index];

    const buyButton = createBuyButton(product);
    const addToCartButton = createAddToCartButton(product);

    element.appendChild(buyButton);
    element.appendChild(addToCartButton);
  }
}


function createBuyButton(product) {
  let buyButton = document.createElement('button');
  buyButton.innerText = 'Comprar ahora';
  buyButton.setAttribute('class', 'boton');
  buyButton.onclick = () => {
    Swal.fire(product.name + ' comprado', 'Muchas Gracias!', 'success');
  };

  return buyButton;
}

function createAddToCartButton(product) {
  let addToCartButton = document.createElement('button');
  addToCartButton.innerText = 'Agregar al Carrito';
  addToCartButton.setAttribute('class', 'boton');
  addToCartButton.onclick = () => {
    addToCart(product);
  };

  return addToCartButton;
}




export { loadProductsComponent };


