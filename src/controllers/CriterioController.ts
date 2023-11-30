// controllers/CriterioController.ts

import { Request, Response } from 'express';
import CriterioServices from '../services/CriterioServices';

class CriterioController {
    async listCriterios(req: Request, res: Response): Promise<void> {
        const criterios = await CriterioServices.listCriterios();

        if (criterios) {
            res.render('criterios', { criterios: criterios });
        } else {
            res.status(500).send('Erro ao buscar critérios.');
        }
    }

    // Implemente outros métodos conforme necessário
}

export default new CriterioController();
