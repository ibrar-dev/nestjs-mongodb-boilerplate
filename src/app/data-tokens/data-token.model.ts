import * as mongoose from 'mongoose';

export const dataTokenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String},
  image: { type: String },
  properties: { type: String },
  is_explicit: { type: Boolean},
  is_active: { type: Boolean, required: true },
  blookchain: { type: String, required: true },
  wallet_address: { type: String},
  category_id: { type: String, required: true },
},
{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }}
);

export interface DataToken extends mongoose.Document {
    name: string;
    description: string;
    image: string;
    properties: string;
    is_explicit: boolean;
    is_active: boolean;
    blookchain: string;
    wallet_address: string;
    category_id: string;
}