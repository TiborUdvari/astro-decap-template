import { defineCollection } from "astro:content";
import { glob, type Loader } from "astro/loaders";
import { slug } from "slug-gen";

const i18n = import.meta.env.PUBLIC_I18N === "true";

const pageLoader: Loader = {
  ...glob,
  name: "Page Loader",
  load: async (loaderParams) => {
    const { store } = loaderParams;
    const baseLoader = glob({
      pattern: "**/*.md",
      base: "./src/content/pages",
    });
    await baseLoader.load.call(this, loaderParams);
    let items = [...store.entries()].map(([_, value]) => value);
    items = items.map((item) => {
      const locale = item.filePath.split(".").at(-2) || "en";
      const title = item.data.title;
      return {
        ...item,
        data: {
          ...item.data,
          ...(i18n ? { locale } : {}),
          slug: slug(title),
        },
      };
    });
    store.clear();
    items.forEach((item) => {
      store.set({ ...item });
    });
  },
};

const pages = defineCollection({
  loader: pageLoader,
});

export const collections = { pages };
