import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createInvoice = async (data) => {
  const { number } = data;

  const existing = await prisma.invoice.findUnique({ where: { number } });
  if (existing) throw new Error('Número da nota já existe.');

  return prisma.invoice.create({
    data: {
      ...data,
      items: { create: data.items },
    },
    include: { items: true },
  });
};

export const getAllInvoices = async () => {
  return prisma.invoice.findMany({
    include: { items: true, usuario: true },
  });
};
