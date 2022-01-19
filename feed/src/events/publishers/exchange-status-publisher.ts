import { ExchangeStatusEvent } from '@savaim/common';
import { Publisher, Subjects } from '@savaim/common';

export class ExchangeStatusPublisher extends Publisher<ExchangeStatusEvent> {
  readonly subject = Subjects.ExchangeStatus;
}
