import * as mongoose from 'mongoose';

export const CodeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String},
},
{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }}

);
// CodeSchema.set('timestamps', {
//  createdAt: ""
// })

export interface Code extends mongoose.Document {
    name: string;
    type: string;
}