import { loadCartComponent } from '../components/cart/cart.js';
import { searchProducts, loadProductsComponent } from '../components/products/products.js';

let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');
let cartButton = document.getElementById('cartButton');

searchInput.onkeydown = (ev) => {
  if (ev.keyCode == '13') {
    searchProducts(searchInput.value);
  }
};

searchButton.onclick = () => {
  searchProducts(searchInput.value);
};

cartButton.onclick = () => {
    loadCartComponent();
};

loadProductsComponent();
