const connection = require('../db/connection');

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const updatePrices = async (newPrice, code) => {
  const updatePriceQuery = 'UPDATE products SET current_price = ? WHERE code = ?';
    await connection.execute(updatePriceQuery, [newPrice, code]);
};

const updatePackageCosts = async () => {
  const updateCostQuery = 'UPDATE products SET cost_price = (SELECT SUM(cost_price) FROM components WHERE package_code = ?) WHERE code = ? AND is_package = 1';
  await connection.execute(updateCostQuery);
};

const getProductByCode = async (code) => {
  const [[products]] = await connection.execute('SELECT * FROM products WHERE code = ?', [code]);
  return products;
};

const addProduct = async (product) => {
  const insertQuery = 'INSERT INTO products (code, name, price) VALUES (?, ?, ?)';
  await connection.execute(insertQuery, [product.code, product.name, product.price]);
};

const updateProduct = async (product) => {
  const updateQuery = 'UPDATE products SET name = ?, price = ? WHERE code = ?';
  await connection.execute(updateQuery, [product.name, product.price, product.code]);
};

const deleteProduct = async (code) => {
  const deleteQuery = 'DELETE FROM products WHERE code = ?';
  await connection.execute(deleteQuery, [code]);
};

module.exports = {
  getAllProducts,
  updatePrices,
  updatePackageCosts,
  getProductByCode,
  addProduct,
  updateProduct,
  deleteProduct
};
