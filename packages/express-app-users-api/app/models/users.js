import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    Id: Number,
    email: String,
    first_name: String,
    last_name: String,
    company: String,
    url: String,
    text: String,
  },
  { timestamps: true, versionKey: false }
);

export const UserModel = model('User', userSchema);
