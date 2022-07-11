const express = require("express");
const router = express.Router();


// to Create new user

router.post("/", require("./../controllers/persondetails").createUser);
router.get("/", require("./../controllers/persondetails").getAllUser);
router.get("/:userID", require("./../controllers/persondetails").getUser);
//router.delete("/:userID", require("./../controllers/persondetails").deleteUser);
router.put("/:userID", require("./../controllers/persondetails").updateUser);


module.exports = router; 