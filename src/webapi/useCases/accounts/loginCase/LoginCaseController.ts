import { Request, Response } from 'express';
import LoginCase from './LoginCase';

export default class LoginCaseController {

  constructor(private loginCase: LoginCase) { }

  async handleRequest(req: Request, res: Response) {
    try {
      const jwtToken = await this.loginCase.execute(req.body.email, req.body.password);
      res.send({ token: jwtToken });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }
}
