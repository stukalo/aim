import { ExchangeStatus } from '@savaim/common';
import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface ExchangeAttrs {
  name: string;
  status: ExchangeStatus;
}

interface ExchangeDoc extends mongoose.Document {
  name: string;
  status: ExchangeStatus;
  version: number;
}

interface ExchangeModel extends mongoose.Model<ExchangeDoc> {
  build(attrs: ExchangeAttrs): ExchangeDoc;
}

const exchangeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(ExchangeStatus),
      default: ExchangeStatus.Stopped,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

exchangeSchema.set('versionKey', 'version');
exchangeSchema.plugin(updateIfCurrentPlugin);

exchangeSchema.statics.build = (attrs: ExchangeAttrs) => {
  return new Exchange(attrs);
};

const Exchange = mongoose.model<ExchangeDoc, ExchangeModel>('Exchange', exchangeSchema);

export { Exchange };
