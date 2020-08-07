import CreatePetEventCase from "./CreatePetEventCase";
import { Response } from "express";

const { validationResult } = require('express-validator');

export default class CreatePetEventCaseController {
  constructor(private createPetEventCase: CreatePetEventCase) {}

  public async handleRequest(req: any, res: Response): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).send(errors.array());

    try {
      let petEvent = {
        user: req.user.userId,
        petName: req.body.petName,
        petBreed: req.body.petBreed,
        location: {
          type: 'Point',
          coordinates: [req.body.location.long, req.body.location.lat],
        },
      };

      petEvent = await this.createPetEventCase.execute(petEvent);
      return res.send(petEvent);
    } catch (err) {
      return res.status(400).send(err.message);
    }
  }
}
