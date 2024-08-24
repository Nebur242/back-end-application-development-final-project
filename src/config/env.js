import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../../.env") });

const config = {
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10),
  auth: {
    saltRounds: parseInt(process.env.PASSWORD_SALTROUNDS, 10),
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};

export default config;
