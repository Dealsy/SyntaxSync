import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("home").title("Home"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["home"].includes(item.getId()!)
      ),
    ]);
