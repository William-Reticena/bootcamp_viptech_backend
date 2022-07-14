const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ProductRepository {
  async create(product, file) {
    // console.log(file);
    const filePath = "http://localhost:3001/files/" + file.filename;
    return prisma.product.create({
      data: {
        ...product,
        price: parseFloat(product.price),
        img: filePath,
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

  async updateById(id, product, file) {
    const { brand, color, created_at, img, name, price } = product;

    console.log(img);
    let filePath;

    if (file?.filename === undefined) {
      filePath = img;
    } else {
      filePath = "http://localhost:3001/files/" + file.filename;
    }

    console.log(filePath);

    return prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        brand,
        color,
        created_at,
        img: filePath,
        name,
        price: parseFloat(price),
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
