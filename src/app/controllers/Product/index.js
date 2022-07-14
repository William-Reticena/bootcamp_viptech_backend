import ProductRepository from "../../repositories/Product";

class ProductController {
  async store(req, res) {
    try {
      const product = await ProductRepository.create(req.body, req.file);

      return res.status(200).json(product);
    } catch (error) {
      console.log(error);

      return (
        (!!error.status && res.status(error.status).json(error)) ||
        res.status(500).json(error)
      );
    }
  }

  async index(req, res) {
    try {
      const product = await ProductRepository.getAll();

      return res.status(200).json(product);
    } catch (error) {
      console.log(error);

      return (
        (!!error.status && res.status(error.status).json(error)) ||
        res.status(500).json(error)
      );
    }
  }

  async show(req, res) {
    try {
      const product = await ProductRepository.getById(req.params.id);

      return res.status(200).json(product);
    } catch (error) {
      console.log(error);

      return (
        (!!error.status && res.status(error.status).json(error)) ||
        res.status(500).json(error)
      );
    }
  }

  async update(req, res) {
    try {
      const product = await ProductRepository.updateById(
        req.params.id,
        req.body,
        req.file
      );
      // console.log(req.body);
      return res.status(200).json(product);
    } catch (error) {
      console.log(error);

      return (
        (!!error.status && res.status(error.status).json(error)) ||
        res.status(500).json(error)
      );
    }
  }

  async delete(req, res) {
    try {
      const product = await ProductRepository.deleteById(req.params.id);

      return res.status(200).json(product);
    } catch (error) {
      console.log(error);

      return (
        (!!error.status && res.status(error.status).json(error)) ||
        res.status(500).json(error)
      );
    }
  }
}

export default new ProductController();
