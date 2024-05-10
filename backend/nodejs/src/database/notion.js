// https://github.com/makenotion/notion-sdk-js

import { Client } from "@notionhq/client";
import { getEnv } from "../utils/env.js";

const { NOTION_TOKEN } = getEnv(); // APP_ROOT_DIR: 시스템 환경 설정 변수

// Initializing a client
const notion = new Client({ auth: NOTION_TOKEN });

// browser: http://localhost:4565/databases/ad02bf1db09140cda3a502b81bac91ee
const getNotionPage = async ({ database_id }) => {
  const page = await notion.databases.query({
    database_id,
    filter: {
      property: "01Name",
      rich_text: {
        contains: "disqus",
      },
    },
  });
  return page;
};

export { getNotionPage };

// const database_id = "ad02bf1db09140cda3a502b81bac91ee";
// const page = await getNotionPage({ database_id });

// console.log(`page: ${JSON.stringify(page)}`);
