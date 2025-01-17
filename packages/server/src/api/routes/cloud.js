const Router = require("@koa/router")
const controller = require("../controllers/cloud")
const authorized = require("../../middleware/authorized")
const { BUILDER } = require("@budibase/auth/permissions")

const router = Router()

router
  .get("/api/cloud/export", authorized(BUILDER), controller.exportApps)
  // has to be public, only run if apps don't exist
  .post("/api/cloud/import", controller.importApps)

module.exports = router
