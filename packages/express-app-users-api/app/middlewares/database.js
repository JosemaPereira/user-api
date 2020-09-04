import mongoose from 'mongoose';

export const openDataBase = async (req, res, next) => {
  const { database, userName, pass, server } = req.config.mongo;
  try {
    const db = await mongoose.connect(
      `mongodb+srv://${userName}:${pass}@${server}/${database}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    mongoose.set('useFindAndModify', false);
    req.dataBase = db;
    next();
  } catch (ex) {
    res.status(500).send();
  }
};