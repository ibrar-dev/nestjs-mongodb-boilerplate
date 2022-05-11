import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  wallet_address: { type: String},
  is_active: { type: Boolean, required: true },
});

export interface User extends mongoose.Document {
    name: string;
    wallet_address: string;
    is_active: boolean;
}