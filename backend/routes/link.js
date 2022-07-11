const express = require("express");
const router = express.Router();


// to Create new user

router.post("/", require("./../controllers/link").newUser);
router.get("/", require("./../controllers/link").getAllUser);
router.get("/:userID", require("./../controllers/link").getUser);
// // router.delete("/:userID", require("./../controllers/user").deleteUser);
//  router.put("/:userID", require("./../controllers/link").updateUser);


module.exports = router; 