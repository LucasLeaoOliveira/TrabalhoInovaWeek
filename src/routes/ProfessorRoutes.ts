// routers/ProfessorRouter.ts

import { Router } from 'express';
import ProfessorController from '../controllers/ProfessorController';

const ProfessorRouter = Router();

ProfessorRouter.get('/professores', ProfessorController.listProfessores);
// Adicione outras rotas conforme necessário

export default ProfessorRouter;
