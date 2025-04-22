export const products = [
    {
      key: '1',
      name: 'Laptop',
      sku: 'LAP123',
      price: 999.99,
      stock: 50,
      status: true
    },
    {
      key: '2',
      name: 'Smartphone',
      sku: 'SMP456',
      price: 599.99,
      stock: 100,
      status: true
    },
    {
      key: '3',
      name: 'Headphones',
      sku: 'HP789',
      price: 199.99,
      stock: 20,
      status: false
    },
  ];
  
  export const salesData = Array.from({ length: 30 }, (_, i) => ({
    date: `2025-03-${String(i + 1).padStart(2, '0')}`,
    sales: Math.floor(Math.random() * 1000) + 500,
  }));