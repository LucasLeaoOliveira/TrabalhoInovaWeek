// routers/ProjetoRouter.ts

import { Router } from 'express';
import ProjetoController from '../controllers/ProjetoController';

const ProjetoRouter = Router();

ProjetoRouter.get('/projetos', ProjetoController.listProjetos);
// Adicione outras rotas conforme necessário

export default ProjetoRouter;
