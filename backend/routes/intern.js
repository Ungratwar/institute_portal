const express = require("express");
const router = express.Router();


// to Create new user

router.post("/", require("./../controllers/intern").createUser);
router.get("/", require("./../controllers/intern").getAllUser);
router.get("/:userID", require("./../controllers/intern").getUser);
router.delete("/:userID", require("./../controllers/intern").deleteUser);
router.put("/:userID", require("./../controllers/intern").updateUser);


module.exports = router; 