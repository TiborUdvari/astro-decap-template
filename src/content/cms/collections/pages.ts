import type { CmsCollection } from "decap-cms-core";
import { seo } from "../partials/seo";
import { title } from "../partials/fields";
import { i18nOn } from "../i18n";
import { sections } from "../partials/sections";

export const pages: CmsCollection = {
  name: "pages",
  label: "Pages",
  folder: "src/content/pages",
  create: true,
  i18n: i18nOn,
  slug: "{{fields.title}}",
  fields: [
    title,
    seo,
    sections,
  ],
};
