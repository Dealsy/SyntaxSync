import { type SchemaTypeDefinition } from "sanity";

import { homeType } from "./homeType";
import { blockContentType } from "./blockContentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeType, blockContentType],
};
