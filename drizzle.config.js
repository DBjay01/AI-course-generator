// /** @type { import("drizzle-kit").Config } */

// export default {
//   schema: "./configs/schema.jsx",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
//   },
// };


// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./configs/schema.jsx",
//   out: "./drizzle",
//   url: 'process.env.NEXT_PUBLIC_DB_CONNECTION_STRING',

// });


import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

if (!process.env.NEXT_PUBLIC_DB_CONNECTION_STRING) {
    throw new Error("Database connection string is not set in the environment variables.");
  }
  
export default defineConfig({
  out: './drizzle',
  schema: './configs/schema.jsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
  },
});
