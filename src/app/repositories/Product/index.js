const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ProductRepository {
  async create(product) {
    return prisma.product.create({
      data: {
        ...product,
      },
    });
  }

  async getAll() {
    return prisma.product.findMany();
  }

  async getById(id) {
    return prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async updateById(id, product) {
    const { brand, color, created_at, img, name, price } = product;

    return prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        brand,
        color,
        created_at,
        img,
        name,
        price,
      },
    });
  }

  async deleteById(id) {
    return prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
  }
}

export default new ProductRepository();
