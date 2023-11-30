// controllers/ProfessorController.ts

import { Request, Response } from 'express';
import ProfessorServices from '../services/ProfessorServices';

class ProfessorController {
    async listProfessores(req: Request, res: Response): Promise<void> {
        const professores = await ProfessorServices.listProfessores();

        if (professores) {
            res.render('professores', { professores: professores });
        } else {
            res.status(500).send('Erro ao buscar professores.');
        }
    }

    // Implemente outros métodos conforme necessário
}

export default new ProfessorController();
