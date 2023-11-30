// controllers/ProjetoController.ts

import { Request, Response } from 'express';
import ProjetoServices from '../services/ProjetoServices';

class ProjetoController {
    async listProjetos(req: Request, res: Response): Promise<void> {
        const projetos = await ProjetoServices.listProjetos();

        if (projetos) {
            res.render('projetos', { projetos: projetos });
        } else {
            res.status(500).send('Erro ao buscar projetos.');
        }
    }

    // Implemente outros métodos conforme necessário
}

export default new ProjetoController();
