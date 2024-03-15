import mongoose from 'mongoose'
import config from '../types/config'
export default mongoose.connect(config.api.MONGO_URI || "")
  .then(() => console.log('data base connected'))
  .catch(err => console.log(err)) 