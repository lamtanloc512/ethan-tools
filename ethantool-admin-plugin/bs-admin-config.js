const EZYPORT = 9090;
const MODULE_NAME = "ezy-starter-admin-plugin";

module.exports = {
  proxy: `localhost:${EZYPORT}`,
  port: 3005,
  ui: {
    port: 9191,
  },
  files: [`${MODULE_NAME}/target/**`, `${MODULE_NAME}/src/java/resource/**`],
  open: false,
  reloadDelay: 0,
  watch: true,
  notify: false,
};
