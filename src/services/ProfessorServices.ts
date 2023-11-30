// ProfessorServices.ts

import { PrismaClient, Professor } from '@prisma/client';

const prisma = new PrismaClient();

class ProfessorServices {
    async listProfessores(): Promise<Professor[] | null> {
        try {
            const professores = await prisma.professor.findMany();
            return professores;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Implemente os métodos create, update, delete conforme necessário
}

export default new ProfessorServices();
