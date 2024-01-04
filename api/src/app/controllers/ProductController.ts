import { Request, Response } from 'express';
import ProductRepository from '../repositories/ProductRepository';

class ProductController {
  async index(request: Request, response: Response) {
    try {
      const products = await ProductRepository.findAll();

      return response.json(products);
    } catch (error) {
      throw new Error('Error to list products');
    }
  }

  async store(request: Request, response: Response) {
    try {
      const {
        name,
        description,
        price,
        brand,
        weightInGrams,
        quantity,
        imagePath,
        category,
        inPromotion,
        ingredients
      } = request.body;

      const product = await ProductRepository.create({
        name,
        price,
        description,
        brand,
        weightInGrams,
        quantity,
        imagePath,
        category,
        inPromotion,
        ingredients
      });

      response.json(product);

    } catch (error) {
      throw new Error('Error to create product');
    }
  }

  update(request: Request, response: Response) {
    return response.json({message: 'acesso rota atualizar /products'});
  }

  delete(request: Request, response: Response) {
    return response.json({message: 'acesso rota deletar /products'});
  }
}

export default new ProductController();
