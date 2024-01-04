import { Schema, model } from 'mongoose';

export const Product = model('Product', new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  weightInGrams: {
    type: Number,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  inPromotion: {
    type: Boolean,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  ingredients: {
    calories: {
      type: String,
      required: true
    },

    carbohydrates: {
      type: String,
      required: true
    },

    protein: {
      type: String,
      required: true
    },

    totalFat: {
      type: String,
      required: true
    },

    sodium: {
      type: String,
      required: true
    },
  }
}));
