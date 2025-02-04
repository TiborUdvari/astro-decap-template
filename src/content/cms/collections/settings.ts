import type { CmsCollection } from "decap-cms-core";
import { seo } from "../partials/seo";

export const settings: CmsCollection = {
  label: "Settings",
  name: "settings",
  i18n: {
    structure: "single_file"
  },
  files: [
    {
      label: "Settings",
      name: "settings",
      file: "src/content/settings.json",
      i18n: true,
      fields: [
        {
          label: "Navigation",
          name: "nav",
          i18n: true,
          multiple: true,
          widget: "relation",
          collection: "pages",
          search_fields: ["title"],
          value_field: "title",
          display_fields: ["title", "slug"],
          hint: "Order of the pages in the menu. First one is homepage."
        },
        seo,
        {
          label: "Contacts",
          name: "contacts",
          widget: "list",
          i18n: true,
          field: {
            label: "Contact",
            name: "contact",
            widget: "object",
            summary: "{{fields.title}}",
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string",
              },
              {
                label: "Link",
                name: "link",
                widget: "string",
              },
            ],
          },
        },
      ],
    },
  ],
};
