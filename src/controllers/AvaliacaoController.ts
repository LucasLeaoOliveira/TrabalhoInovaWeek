// controllers/AvaliacaoController.ts

import { Request, Response } from 'express';
import AvaliacaoServices from '../services/AvaliacaoServices';

class AvaliacaoController {
    async listAvaliacoes(req: Request, res: Response): Promise<void> {
        const avaliacoes = await AvaliacaoServices.listAvaliacoes();

        if (avaliacoes) {
            res.render('avaliacoes', { avaliacoes: avaliacoes });
        } else {
            res.status(500).send('Erro ao buscar avaliações.');
        }
    }

    // Implemente outros métodos conforme necessário
}

export default new AvaliacaoController();
