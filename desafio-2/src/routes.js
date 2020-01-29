import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/recipient', RecipientController.store);
routes.put('/recipient', RecipientController.update);

routes.post('/sessions', SessionController.store);

export default routes;
