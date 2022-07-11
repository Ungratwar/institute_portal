const express = require("express");
const router = express.Router();


// to Create new user

router.post("/", require("./../controllers/project").createUser);
router.get("/", require("./../controllers/project").getAllUser);
router.get("/:userID", require("./../controllers/project").getUser);
router.delete("/:userID", require("./../controllers/project").deleteUser);
router.put("/:userID", require("./../controllers/project").updateUser);


module.exports = router; 