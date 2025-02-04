import type { CmsField } from "decap-cms-core";
import { i18nOn } from "../i18n";

export const seo: CmsField = {
  label: "SEO Settings",
  name: "seo",
  widget: "object",
  required: true,
  i18n: i18nOn,
  collapsed: true,
  fields: [
    {
      label: "Meta Description",
      name: "description",
      widget: "text",
      i18n: i18nOn,
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false,
      i18n: i18nOn ? "duplicate" : false,
      hint: "PNG or JPEG social image – 1200x600px – 8MB max",
    },
  ],
};
