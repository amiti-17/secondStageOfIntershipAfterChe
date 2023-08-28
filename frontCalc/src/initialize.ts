import buildConfig from "./config";

export default async function initialize() {
  await buildConfig();
}