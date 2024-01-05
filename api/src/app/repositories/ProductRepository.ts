import { Product } from '../models/Product';

interface ProductValuesTypes {
  name: string,
  description: string,
  price: number,
  brand: string,
  quantity: number,
  weightInGrams: number
  imagePath: string,
  category: string,
  inPromotion: boolean
  ingredients: {
  calories: string,
  carbohydrates: string,
  protein: string,
  totalFat: string,
  sodium: string,
  }
}


class ProductRepository {
  async findAll() {
    const documents = await Product.find({});

    return documents;
  }

  async create(data: ProductValuesTypes) {
    const document = await Product.create({
      name: data.name,
      description: data.description,
      price: data.price,
      brand: data.brand,
      quantity: data.quantity,
      weightInGrams: data.weightInGrams,
      imagePath: data.imagePath,
      category: data.category,
      inPromotion: data.inPromotion,
      ingredients: {
        calories: data.ingredients.calories,
        carbohydrates: data.ingredients.carbohydrates,
        protein: data.ingredients.protein,
        totalFat: data.ingredients.totalFat,
        sodium: data.ingredients.sodium
      }
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
