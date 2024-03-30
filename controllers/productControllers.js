import Product from "../backend/models/product.js";

export const getProducts = async (req, res) => {
  res.status(200).json({
    message: "All products",
  });
};

// Create new Product => /api/v1/admin/products
export const newProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    product,
  });
};
