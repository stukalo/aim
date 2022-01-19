import express, { Request, Response } from 'express';
import { Exchange } from '../models/exchange';

const router = express.Router();

router.get('/api/exchanges', async (req: Request, res: Response) => {
  const exchanges = await Exchange.find({
    name: void 0,
  });

  res.send(exchanges);
});

export { router as indexExchangeRouter };
