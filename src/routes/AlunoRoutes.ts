// routers/AlunoRouter.ts

import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const AlunoRouter = Router();

AlunoRouter.get('/alunos', AlunoController.listAlunos);
// Adicione outras rotas conforme necessário

export default AlunoRouter;
