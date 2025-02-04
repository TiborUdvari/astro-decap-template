import type { CmsField } from "decap-cms-core";
import { i18nOn } from "../i18n";

export const title: CmsField = {
  label: "Title",
  name: "title",
  i18n: i18nOn,
  widget: "string",
  required: true,
};

export const slug: CmsField = {
  label: "Slug",
  name: "slug",
  i18n: i18nOn,
  widget: "string",
  required: false,
};
