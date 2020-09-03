import mongoose from 'mongoose';
import { defaultConfig } from '../providers/config.provider';

export const connectDB = async () => {
  try {
    const {
      mongo: { userName, database, pass, server },
    } = defaultConfig;
    await mongoose.connect(
      `mongodb+srv://${userName}:${pass}@${server}/${database}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    mongoose.set('useFindAndModify', false);
    console.log('>> DB Ready');
  } catch (ex) {
    console.log(`DB Connection Failed: ${ex}`);
  }
};
