export const typeDefs = `#graphql
  type User {
    id: ID!
    object: String!
  }

  type Database {
    id: ID!
    type: String!
    database_id: ID!
  }

  type NotionDatabase {
    id: ID!
    object: String!
    created_time: String!
    last_edited_time: String!
    created_by: User!
    last_edited_by: User!
    cover: String
    icon: String
    parent: Database!
    archived: Boolean!
    in_trash: Boolean!
    properties: Properties!
    url: String!
    public_url: String
  }

  type Properties {
    properties: [Property!]
  }

  type Property {
    id: ID!
    name: String!
    value: PropertyValue
  }

  union PropertyValue = Link | Select | RichText | Title

  type Link {
    id: ID!
    type: String!
    relation: [ID!]!
    has_more: Boolean!
  }

  type Select {
    id: ID!
    type: String!
    select: SelectOption
  }

  type SelectOption {
    id: ID!
    name: String!
    color: String!
  }

  type RichText {
    id: ID!
    type: String!
    rich_text: [RichTextItem!]!
  }

  type RichTextItem {
    type: String!
    text: RichTextContent!
    annotations: Annotations!
    plain_text: String!
    href: String
  }

  type RichTextContent {
    content: String!
    link: String
  }

  type Annotations {
    bold: Boolean!
    italic: Boolean!
    strikethrough: Boolean!
    underline: Boolean!
    code: Boolean!
    color: String!
  }

  type Title {
    id: ID!
    type: String!
    title: [RichTextItem!]!
  }

  type Query {
    notionDatabase(database_id: ID!): [NotionDatabase]
  }
`;
