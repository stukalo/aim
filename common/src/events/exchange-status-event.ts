import { Subjects } from "..";
import { ExchangeStatus } from "./types/exchange-status";

export interface ExchangeStatusEventData {
  exchange: string;
  status: ExchangeStatus
}

export interface ExchangeStatusEvent {
  subject: Subjects.ExchangeStatus;
  data: ExchangeStatusEventData;
}
