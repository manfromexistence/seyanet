import ProductModel from './model';
import connectDB from './db';

const getProductById = async (id: string) => {
  try {
    await connectDB(); // Connect to MongoDB if not already connected

    const product = await ProductModel.findById(id);
    console.log('Product:', product);
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

(async () => {
  await getProductById('your_product_id'); // Example usage (replace with actual product ID)
})();
