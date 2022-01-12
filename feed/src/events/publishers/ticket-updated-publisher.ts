import { Publisher, Subjects, TicketUpdatedEvent } from '@savtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
