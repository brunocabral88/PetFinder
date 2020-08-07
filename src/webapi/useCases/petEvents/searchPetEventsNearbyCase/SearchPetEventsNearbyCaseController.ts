import SearchPetEventsNearbyCase from "./SearchPetEventsNearbyCase";
import { Response } from "express";
const { validationResult } = require('express-validator');

export default class SearchPetEventsNearbyCaseController {
  constructor(private searchPetEventsNearbyCase: SearchPetEventsNearbyCase) {  }

  async handleRequest(req: any, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).send(errors.array());

    return res.send(await this.searchPetEventsNearbyCase.execute(req.query.lat, req.query.long, 5000));
  };
}
