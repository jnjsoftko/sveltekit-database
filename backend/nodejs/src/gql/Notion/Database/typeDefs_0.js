export const typeDefs = `#graphql

  # type NotionDatabase {
  #   object: String!
  #   id: String!
  #   created_time: String!
  #   created_by: User!
  #   last_edited_time: String!
  #   last_edited_by: User!
  #   title: [RichTextObject]!
  #   description: [RichTextObject]!
  #   icon: FileObject!
  #   cover: FileObject!
  #   properties: [Property]!
  #   parent: Parent!
  #   url: String!
  #   in_trash: Boolean!
  #   is_inline: Boolean!
  #   public_url: String!
  # }

  type NotionDatabase {
    object: String!
    id: String!
    created_time: String!
    created_by: User!
    last_edited_time: String!
    last_edited_by: User!
    title: [RichTextObject]!
    icon: FileObject!
    cover: FileObject!
    properties: [PropertyValue]!
    parent: Parent!
    url: String!
    in_trash: Boolean!
    is_inline: Boolean!
    public_url: String!
  }

  type User {
    object: String!
    id: String!
  }

  type RichTextObject {
    type: String!
    text: Text!
    annotations: Annotations!
    plain_text: String!
    href: String
  }

  type Text {
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

  type FileObject {
    type: String!
    external: External!
  }

  type External {
    url: String!
  }

  type Parent {
    type: String!
    page_id: String!
  }

  type Property {
    key: String!
    value: PropertyValue!
  }

  type PropertyValue {
    id: String!
    type: String!
    rich_text: [RichTextObject]
    number: Float
    select: Select
    multi_select: [Select]
    date: String
    formula: Formula
    relation: [Relation]
    rollup: Rollup
    people: [User]
    files: [FileObject]
    checkbox: Boolean
    url: String
    email: String
    phone_number: String
    created_time: String
    created_by: User
    last_edited_time: String
    last_edited_by: User
  }

  type Select {
    id: String!
    name: String!
    color: String!
  }

  type Formula {
    expression: String!
  }

  type Relation {
    id: String!
    database_id: String!
    title: String!
  }

  type Rollup {
    rollup_property_name: String!
    relation_property_name: String!
    relation_property_id: String!
    type: String!
    number: Float
  }

  type Query {
    notionDatabase(database_id: String): [NotionDatabase]
  }
`;
