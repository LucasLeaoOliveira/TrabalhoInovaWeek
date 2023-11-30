// routers/CriterioRouter.ts

import { Router } from 'express';
import CriterioController from '../controllers/CriterioController';

const CriterioRouter = Router();

CriterioRouter.get('/criterios', CriterioController.listCriterios);
// Adicione outras rotas conforme necessário

export default CriterioRouter;
