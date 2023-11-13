  //Checkout-Page 
  
  let checkoutProducts = document.querySelector('.checkout-products');
  
  let checkoutHTML = '';
  
  //Generieren
  
  cart.forEach((item) => {
  
    const productId = item.productId;
  
    let matchingProduct;
  
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
  
    checkoutHTML += `
      <tr class="checkout-product">
        <td>1</td>
        <td>${matchingProduct.name}</td>
        <td>${item.quantity}</td>
        <td>$${(matchingProduct.priceCents / 100)}</td>
        <td>$${(matchingProduct.priceCents / 100) * item.quantity}</td>
      </tr>
    `;
    if (checkoutProducts) {
      checkoutProducts.innerHTML = checkoutHTML;
    }
  });