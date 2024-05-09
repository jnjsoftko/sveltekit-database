import dotenv from "dotenv";
const { APP_ROOT_DIR } = process.env;
// const APP_ROOT_DIR = "C:/JnJ-soft/Playground/sveltekit-database"

const getEnv = () => {
  dotenv.config({ path: `${APP_ROOT_DIR}/.env` });
  return process.env;
};

// const { GOOGLE_API_KEY } = getEnv();
// // const { GOOGLE_API_KEY } = process.env;
// console.log(`GOOGLE_API_KEY: ${GOOGLE_API_KEY}`);

export { getEnv };
