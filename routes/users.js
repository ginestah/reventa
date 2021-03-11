const { Router } = require("express");
const controllers = require("../controllers/users");

const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);
router.get("/users", controllers.getUsers);
router.get("/users/:id", controllers.getUser);
router.put("/users/:userId/products", controllers.usersProducts);
module.exports = router;
