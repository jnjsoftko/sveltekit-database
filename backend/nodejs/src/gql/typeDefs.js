import { typeDefs as userTypeDefs } from "./Users/typeDefs.js";
import { typeDefs as acuPointsTypeDefs } from "./AcuPoints/typeDefs.js";
import { typeDefs as notionDatabaseTypeDefs } from "./Notion/Database/typeDefs.js";

export const typeDefs = [userTypeDefs, acuPointsTypeDefs, notionDatabaseTypeDefs];
