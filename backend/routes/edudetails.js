const express = require("express");
const router = express.Router();


// to Create new user

router.post("/", require("./../controllers/edudetails").newUser);
router.get("/", require("./../controllers/edudetails").getAllUser);
router.get("/:userID", require("./../controllers/edudetails").getUser);
 router.delete("/:userID", require("./../controllers/edudetails").deleteUser);
 router.put("/:userID", require("./../controllers/edudetails").updateUser);


module.exports = router; 