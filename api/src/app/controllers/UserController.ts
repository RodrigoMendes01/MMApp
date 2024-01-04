import { Request, Response } from 'express';

class UserController {
  index(request: Request, response: Response) {
    return response.json({message: 'acesso rota /profile'});
  }
  store(request: Request, response: Response) {
    return response.json({message: 'acesso rota criar /profile'});
  }
  update(request: Request, response: Response) {
    return response.json({message: 'acesso rota atualizar /profile'});
  }
  delete(request: Request, response: Response) {
    return response.json({message: 'acesso rota deletar /profile'});
  }
}

export default new UserController();
