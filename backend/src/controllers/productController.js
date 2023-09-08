const productService = require('../services/productService');

exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updatePrices = async (req, res) => {
  try {
    const newPrices = req.body.newPrices;
    await productService.updatePrices(newPrices);
    res.status(200).send('Prices updated successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('Nenhum arquivo foi enviado');
    }
    await productService.uploadFile(file);
    res.send(file);
  } catch (err) {
    console.error(`Error reading the file: ${err.path}`);
    console.log(err);
    res.status(500).send('An error occurred');
  }
}