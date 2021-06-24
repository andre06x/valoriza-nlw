import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserContoller } from './controllers/AuthenticateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { CreateComplimentController } from './controllers/CreateComplimentController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticatedUserController = new AuthenticateUserContoller();
const complimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticatedUserController.handle);
router.post("/compliments", complimentController.handle);

export { router }