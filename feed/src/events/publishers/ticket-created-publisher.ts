import { Publisher, Subjects, TicketCreatedEvent } from '@savaim/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
