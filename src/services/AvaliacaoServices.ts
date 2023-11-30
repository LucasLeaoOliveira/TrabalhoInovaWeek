// AvaliacaoServices.ts

import { PrismaClient, Avaliacao } from '@prisma/client';

const prisma = new PrismaClient();

class AvaliacaoServices {
    async listAvaliacoes(): Promise<Avaliacao[] | null> {
        try {
            const avaliacoes = await prisma.avaliacao.findMany();
            return avaliacoes;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Implemente os métodos create, update, delete conforme necessário
}

export default new AvaliacaoServices();
