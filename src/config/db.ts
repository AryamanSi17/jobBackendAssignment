import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || "3306"),
      dialect: "mysql",
      dialectOptions: {
        ssl: {
          require: true, // Enforces SSL
          rejectUnauthorized: false, // Allows self-signed certificates
        },
      },
      logging: false,
    }
  );
  

export default sequelize;
