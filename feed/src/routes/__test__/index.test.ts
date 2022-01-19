import { ExchangeStatus } from '@savaim/common';
import request from 'supertest';
import { app } from '../../app';
import { Exchange } from '../../models/exchange';

const createExchange = async () => {
  const exchange = await Exchange.build({
    name: 'exchange',
    status: ExchangeStatus.Stopped,
  });
};

it('can fetch a list of tickets', async () => {
  await createExchange();

  const response = await request(app).get('/api/exchanges').send().expect(200);

  expect(response.body.length).toEqual(1);
});
