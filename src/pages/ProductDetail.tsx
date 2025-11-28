import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Product Not Found</h2>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <Link to="/products">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glass-card rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
              {product.category}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-accent mb-6">
              ${product.price.toLocaleString()}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {product.description}
            </p>
            <Button
              size="lg"
              onClick={() => addToCart(product)}
              className="w-full md:w-auto text-lg px-8"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-serif text-xl font-semibold mb-4">Product Details</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Premium quality materials</li>
                <li>• Handcrafted with attention to detail</li>
                <li>• Comes with certificate of authenticity</li>
                <li>• Complimentary gift packaging</li>
                <li>• 30-day return policy</li>
              </ul>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
