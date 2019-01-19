const products = [
    {
      id: 1,
      name: 'foo',
      price: 7
    },
    {
      id: 2,
      name: 'bar',
      price: 2
    },
    {
      id: 5,
      name: 'bazz',
      price: 1
    },
  ];
  
  const users = [
    {
       id: 1,
       name: 'moe'
    },
    {
       id: 2,
       name: 'larry'
    },
    {
       id: 3,
       name: 'curly'
    }
  ];
  
  // productId matches up with product in products
  // userId matches up with user in users
  const orders = [
    {
      id: 1,
      productId: 1,
      quantity: 3,
      userId: 1
    },
    {
      id: 2,
      productId: 1,
      quantity: 7,
      userId: 1
    },
    {
      id: 3,
      productId: 5,
      quantity: 70,
      userId: 3
    },
    {
      id: 3,
      productId: 5,
      quantity: 1,
      userId: 3
    }
  ];
debugger;
function productsPurchased(orders, products){
  return products.filter(product => 
    orders.some(order => order.productId === product.id)  
  );
}

function topSellingProductByQuantity(orders, products){
  products.forEach(product => {
    if(!product.total) product.total = 0;

    product.total += orders.reduce((acc, order) => {
      return order.productId === product.id ? acc + order.quantity * product.price
      : acc;
    }, 0);
  });

  return products.sort((a, b) => a.total > b.total ? -1 : 1)[0];
}
