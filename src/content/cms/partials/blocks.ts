import type { CmsField, CmsFieldBase, CmsFieldObject } from "decap-cms-core";
import { i18nOn } from "../i18n";

type CmsType = CmsFieldBase & CmsFieldObject;

export const markdown: CmsType = {
  label: "Markdown",
  name: "markdown",
  widget: "object",
  i18n: i18nOn,
  fields: [{ label: "Markdown", name: "markdown", widget: "markdown" }],
};

export const blocks: CmsField = {
  label: "Blocks",
  name: "blocks",
  i18n: i18nOn,
  widget: "list",
  types: [markdown],
};
