import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 4000
const mongo_uri = process.env.MONGO_URI || ""
const secret_key = process.env.JWT_SECRET || ""
export default {
  api: {
    MONGO_URI: mongo_uri,
    PORT: port,
    JWT_SECRET: secret_key,
  }
}