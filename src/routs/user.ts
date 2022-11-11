import express from "express";
import controllers from "../controllers";
const router = express.Router();

router.post(
    "/createUser",
    controllers.userController.createUser.bind(controllers.userController)
);

router.get(
    "/findOneUser/:id",
    controllers.userController.findOneUser.bind(controllers.userController)
);

router.get(
    "/findUsers",
    controllers.userController.findUsers.bind(controllers.userController)
);

router.put(
    "/updateUser/:id",
    controllers.userController.updateUser.bind(controllers.userController)
);

router.delete(
    "/deleteUser/:id",
    controllers.userController.deleteUser.bind(controllers.userController)
);

router.put(
    "/updateRank/:id",
    controllers.userController.updateRank.bind(controllers.userController)
);

router.get(
    "/seedUser",
    controllers.userController.seedTableUser.bind(controllers.userController)
);
export default router;
