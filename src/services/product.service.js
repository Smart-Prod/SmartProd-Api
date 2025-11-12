import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createProduct = async (data) => {
  const { code } = data;

  const existing = await prisma.product.findUnique({ where: { code } });
  if (existing) throw new Error('Código de produto já está em uso.');

  return prisma.product.create({ data });
};

export const getAllProducts = async () => {
  return prisma.product.findMany({
    include: { bom: true },
  });
};

export const getProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: { id },
    include: { bom: true },
  });
  if (!product) throw new Error('Produto não encontrado.');
  return product;
};
