import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOrder = async (data) => {
  const { productId, usuarioId, quantity } = data;

  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) throw new Error('Produto não encontrado.');

  return prisma.productionOrder.create({
    data: {
      productId,
      usuarioId,
      quantity,
      status: 'PLANEJADA',
      produced: 0,
    },
  });
};

export const getAllOrders = async () => {
  return prisma.productionOrder.findMany({
    include: { product: true, usuario: true },
  });
};
