import { defaultConfig } from '../providers';

export const configurations = (req, res, next) => {
  req.config = defaultConfig;
  next();
};
