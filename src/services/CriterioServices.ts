// CriterioServices.ts

import { PrismaClient, Criterio } from '@prisma/client';

const prisma = new PrismaClient();

class CriterioServices {
    async listCriterios(): Promise<Criterio[] | null> {
        try {
            const criterios = await prisma.criterio.findMany();
            return criterios;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Implemente os métodos create, update, delete conforme necessário
}

export default new CriterioServices();
