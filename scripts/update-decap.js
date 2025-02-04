// todo - not currently working
// Make sure that env var decap and depencency decap is the same
import { readFileSync, writeFileSync } from "fs";
import dotenv from "dotenv";

dotenv.config();

const packageJsonPath = "package.json";
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

const decapVersion = process.env.PUBLIC_DECAP_CMS_APP_VERSION || "^latest";
packageJson.devDependencies["decap-cms"] = `npm:decap-cms@${decapVersion}`;

writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`✅ Updated decap-cms to ${decapVersion} in package.json`);
