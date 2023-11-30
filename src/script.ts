import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.aluno.create({
      data: {
        nome: 'Otavio Fulano',
        matricula: 2132, // Agora estamos usando um número em vez de uma string
      },
    });
    console.log('Aluno criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar aluno:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
