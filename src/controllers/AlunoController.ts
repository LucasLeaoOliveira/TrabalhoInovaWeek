// controllers/AlunoController.ts

import { Request, Response } from 'express';
import AlunoServices from '../services/AlunoServices';

class AlunoController {
    async listAlunos(req: Request, res: Response): Promise<void> {
        const alunos = await AlunoServices.listAlunos();

        if (alunos) {
            res.render('alunos', { alunos: alunos });
        } else {
            res.status(500).send('Erro ao buscar alunos.');
        }
    }

    // Implemente outros métodos conforme necessário
}

export default new AlunoController();
