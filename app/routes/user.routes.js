const express = require("express")

const router = express.Router()

const controller = require("../controllers/user.controller")

router.post("/getvalue", controller.getValue)
router.post("/get-custom-ui", controller.getCustomUi)
router.get("/get-popup-text/:identify", controller.getPopUpText)

module.exports = router
