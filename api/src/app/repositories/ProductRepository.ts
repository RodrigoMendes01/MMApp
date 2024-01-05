import { Product } from '../models/Product';

interface ProductValuesTypes {
  name: string,
  description: string,
  price: number,
  brand: string,
  quantity: number,
  weightInGrams: number
  imagePath?: string,
  category: string,
  inPromotion: boolean
  ingredients: string | object
}


class ProductRepository {
  async findAll() {
    const documents = await Product.find({});

    return documents;
  }

  async create({
    name,
    description,
    price,
    brand,
    quantity,
    weightInGrams,
    imagePath,
    category,
    inPromotion,
    ingredients
  }: ProductValuesTypes) {
    const document = await Product.create({
      name,
      description,
      price,
      brand,
      quantity,
      weightInGrams,
      imagePath,
      category,
      inPromotion,
      ingredients
    });

    return document;
  }

  async findById(id: string) {
    const document = await Product.findById(id);

    return document;
  }

  async delete(id: string) {
    const document = await Product.findByIdAndDelete(id);

    return document;
  }
}

export default new ProductRepository();
