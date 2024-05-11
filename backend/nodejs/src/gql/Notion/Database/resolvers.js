import { getDatabase } from "../../../database/notion.js";

export const resolvers = {
  // * Query
  Query: {
    notionDatabase: async (_, { database_id }) => {
      const response = await getDatabase({ database_id });
      const properties = response.results.map((result) => result.properties);
      const data = properties.map((property) => {
        for (const [key, value] of Object.entries(property)) {
          if (value.type === "title") {
            return { [key]: value.title[0].plain_text };
          }
          // if (value.type === "rich_text") {
          //   return { [key]: value.rich_text[0].plain_text };
          // }
          // if (value.type === "number") {
          //   return { [key]: value.number };
          // }
          // if (value.type === "date") {
          //   return { [key]: value.date.start };
          // }
          // if (value.type === "select") {
          //   return { [key]: value.select.name };
          // }
          else {
            return { [key]: "test" };
          }
        }
      });
      return data;
    },
  },
};
