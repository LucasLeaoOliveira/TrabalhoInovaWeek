// ProjetoServices.ts

import { PrismaClient, Projeto } from '@prisma/client';

const prisma = new PrismaClient();

class ProjetoServices {
    async listProjetos(): Promise<Projeto[] | null> {
        try {
            const projetos = await prisma.projeto.findMany();
            return projetos;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Implemente os métodos create, update, delete conforme necessário
}

export default new ProjetoServices();
