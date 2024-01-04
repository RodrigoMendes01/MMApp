import { Request, Response } from 'express';

class ProductController {
  index(request: Request, response: Response) {
    return response.json({message: 'acesso a rota /products'});
  }
  store(request: Request, response: Response) {
    return response.json({message: 'acesso a rota criar /products'});
  }
  update(request: Request, response: Response) {
    return response.json({message: 'acesso rota atualizar /products'});
  }
  delete(request: Request, response: Response) {
    return response.json({message: 'acesso rota deletar /products'});
  }
}

export default new ProductController();
