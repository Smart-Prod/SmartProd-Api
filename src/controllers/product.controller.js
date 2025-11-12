import * as productService from '../services/product.service.js';
import { successResponse, errorResponse } from '../utils/response.util.js';

export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return successResponse(res, 201, 'Produto criado com sucesso!', product);
  } catch (error) {
    return errorResponse(res, 400, error.message);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    return successResponse(res, 200, 'Produtos listados com sucesso!', products);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(Number(req.params.id));
    return successResponse(res, 200, 'Produto encontrado com sucesso!', product);
  } catch (error) {
    return errorResponse(res, 404, error.message);
  }
};
