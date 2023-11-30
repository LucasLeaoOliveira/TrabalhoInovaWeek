// AlunoServices.ts

import { PrismaClient, Aluno } from '@prisma/client';

const prisma = new PrismaClient();

class AlunoServices {
    async listAlunos(): Promise<Aluno[] | null> {
        try {
            const alunos = await prisma.aluno.findMany();
            return alunos;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Implemente os métodos create, update, delete conforme necessário
}

export default new AlunoServices();
