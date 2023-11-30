// routers/AvaliacaoRouter.ts

import { Router } from 'express';
import AvaliacaoController from '../controllers/AvaliacaoController';

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/avaliacoes', AvaliacaoController.listAvaliacoes);
// Adicione outras rotas conforme necessário

export default AvaliacaoRouter;
