import type { CmsField } from "decap-cms-core";
import { i18nOn } from "../i18n";
import { blocks } from "./blocks";

export const sections: CmsField = {
  label: "Sections",
  name: "sections",
  widget: "list",
  i18n: i18nOn,
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    blocks
  ]
} 
