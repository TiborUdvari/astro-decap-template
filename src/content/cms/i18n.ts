import type { CmsI18nConfig } from "decap-cms-core";

export const I18N = import.meta.env.PUBLIC_I18N === "true";

const defaultI18nConfig: CmsI18nConfig = {
  locales: ["fr", "en"],
  default_locale: "fr",
  structure: "multiple_files",
};

export const i18nOn = I18N;
export const i18nConfig:CmsI18nConfig = I18N ? defaultI18nConfig : undefined; 
