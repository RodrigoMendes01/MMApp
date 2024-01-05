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
        category,
        inPromotion,
        ingredients
      } = request.body;

      const imagePath = request.file?.filename;

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
        ingredients: JSON.parse(ingredients)
      });

      response.json(product);

    } catch (error) {
      console.log(error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  show() {
    return {};
  }

  update(request: Request, response: Response) {
    return response.json({message: 'acesso rota atualizar /products'});
  }

  async delete(request: Request, response: Response) {
    try {
      const { productId } = request.params;

      const product = await ProductRepository.findById(productId);

      if (!product) {
        return response.status(400).json({error: 'This product dosen`t exists'});
      }

      await ProductRepository.delete(productId);

      response.sendStatus(204);
    } catch (error) {
      response.status(500).json({ error: 'Internal Server Error' });
    }

  }
}

export default new ProductController();
