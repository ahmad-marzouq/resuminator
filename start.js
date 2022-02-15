const { execSync } = require("child_process");
const port = 4201;
const build = process.env.BUILD === "true";

if (build) {
  execSync("npm run build", { stdio: "inherit" });
}
execSync(`PORT=${port} npm run start`, { stdio: "inherit" });
