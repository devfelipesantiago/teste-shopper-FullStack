const { log } = require('console');
const productModel = require('../models/products');
const fs = require('fs').promises;
const { parse } = require('csv-parse');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

const updatePrices = async (newPrices) => {
  await productModel.updatePrices(newPrices);
};

const uploadFile = async (file) => {
  const data = await fs.readFile(file.path, 'utf8');
 
  const fixData = data.split(',');
  const productCode = fixData[1].split('\r\n')[1];
  const newPrice = fixData[2];

  updatePrices(newPrice);

  console.log(`Product code: ${productCode}, New price: ${newPrice}`);
};

module.exports = {
  getAllProducts,
  updatePrices,
  uploadFile
}