// https://github.com/makenotion/notion-sdk-js

import { Client } from "@notionhq/client";
import { getEnv } from "../utils/env.js";

const { NOTION_TOKEN } = getEnv(); // APP_ROOT_DIR: 시스템 환경 설정 변수

// Initializing a client
const notion = new Client({ auth: NOTION_TOKEN });

// browser: http://localhost:4565/databases/ad02bf1db09140cda3a502b81bac91ee
const getDatabase = async ({ database_id }) => {
  const database = await notion.databases.query({
    database_id,
    // filter: {
    //   property: "01Name",
    //   rich_text: {
    //     contains: "disqus",
    //   },
    // },
  });
  return database;
};

export { getDatabase };

// const database_id = "ad02bf1db09140cda3a502b81bac91ee";
// const database_id = "a71157c311c441e5bf1950d54a5f724f";
// const database = await getDatabase({ database_id });

// console.log(`database: ${JSON.stringify(database.results)}`);
