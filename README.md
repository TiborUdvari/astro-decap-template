# Astro + Tailwind + Decap CMS + Preact + Storybook Template

## Deployment
* Setup a [Github token](https://github.com/settings/tokens) with pull access for automatically pulling changes on the preview server
* Get Cloudinary cloud and public api key from [Cloudinary Settings](https://console.cloudinary.com/settings/)
* Setup Cloudflare deploy webhook under `Page/Settings/Build/Deploy Hook` and add it to Github secrets  
### Cloudflare OAuth App
Create a new [Github OAuth App]( https://github.com/settings/developers ), set the homepage url and callback url to `PUBLIC_SITE_DOMAIN` 

## Staging Setup
* Update `etc/cloudflared.config.yml` with the astro and webhook ports
* Update DNS to add astro and webhook services
* Add github webhook to the project pointing to `https://URL/hooks/pull-changes`

## Settings to update
* `.env` file
* `astro.config.mjs` file for locales, sitename

## SEO

### Documentation
* [Facebook Webmaster](https://developers.facebook.com/docs/sharing/webmasters)
* [Twitter / X Large Summary Card](https://developer.x.com/en/docs/x-for-websites/cards/overview/summary-card-with-large-image)

### Tools
* [Social Media Link Preview Chrome Extension](https://chromewebstore.google.com/detail/Social%20Media%20Link%20Preview/dlmoajpiphhokgbbfaiiekhlgpjnjfei?hl=en)
* [OpenGraph XYZ - Live Site Social Images Preview](https://www.opengraph.xyz/)

### Official Social Image Inspectors
* [OG:Images – Meta Sharring Debugger](https://developers.facebook.com/tools/debug/)
* [LinkedIn](https://www.linkedin.com/post-inspector/inspect/)
* [Google Rich Results](https://search.google.com/test/rich-results)
* [Schema Org Validator](https://validator.schema.org/)
