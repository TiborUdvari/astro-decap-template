import type { CMS } from 'decap-cms-core';

import { pages } from "./collections/pages";
import { i18nConfig } from "./i18n";
import { settings } from "./collections/settings";

// @ts-ignore
const CMS = window.CMS as CMS;

const {
  PUBLIC_GH_REPO,
  PUBLIC_SITE_DOMAIN,
  PUBLIC_BASE_URL,
  PUBLIC_CLOUDINARY_CLOUD_NAME,
  PUBLIC_CLOUDINARY_API_KEY,
  DEV,
} = import.meta.env;

const STAGING = import.meta.env.PUBLIC_STAGING === "true";

CMS.init({
  config: {
    local_backend: DEV && !STAGING,
    load_config_file: false,
    i18n: i18nConfig,
    backend: {
      name: "github",
      repo: PUBLIC_GH_REPO,
      branch: "main",
      site_domain: PUBLIC_SITE_DOMAIN,
      base_url: PUBLIC_BASE_URL,
      auth_endpoint: "/api/auth",
      squash_merges: true,
    },
    media_library: {
      name: "cloudinary",
      config: {
        cloud_name: PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: PUBLIC_CLOUDINARY_API_KEY,
      },
    },
    slug: {
      encoding: "ascii",
      clean_accents: true,
      sanitize_replacement: "-",
    },
    media_folder: "/public/assets",
    public_folder: "/public/assets",
    collections: [pages, settings],
  },
});
