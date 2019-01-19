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

function productsPurchased(orders, products){
    output = products.filter(product => 
    orders.some(order => order.productId === product.id)  
  );
  output.forEach(prod => {
    console.log(`Product ID: ${prod.id}`);
    console.log(`Name: ${prod.name}`);
    console.log(`Price: ${prod.price}`);
    console.log('');
  });
}

function topSellingProductByQuantity(orders, products){
  products.forEach(product => {
    if(!product.total) product.total = 0;

    product.total += orders.reduce((acc, order) => 
      order.productId === product.id ? acc + order.quantity : acc, 
      0);
  });

  output = (products.sort((a, b) => a.total > b.total ? -1 : 1)[0]);
  console.log(`Product ID: ${output.id}`);
  console.log(`Name: ${output.name}`);
  console.log(`Price: ${output.price}`);
  console.log(`Quantity Sold: ${output.total}`);
}

function usersWithOrders(users, orders){
  const output = users.filter(user => orders.some(order => order.userId === user.id));
  output.forEach(user => {
    console.log('User ID:', user.id);
    console.log('User Name:', user.name);
    console.log('');
  });
}
