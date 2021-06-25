import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserContoller } from './controllers/AuthenticateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAutenticated } from './middlewares/ensureAutenticated';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiverComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserController } from './controllers/ListUsers';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticatedUserController = new AuthenticateUserContoller();
const complimentController = new CreateComplimentController();

const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsers = new ListUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAutenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticatedUserController.handle);
router.post("/compliments", ensureAutenticated, complimentController.handle);

router.get("/users/compliments/send", ensureAutenticated, listUserSendComplimentsController.handle)

router.get("/users/compliments/receive", ensureAutenticated ,listUserReceiveComplimentsController.handle)

router.get("/tags", listTagsController.handle);
router.get("/users", listUsers.handle);

export { router }