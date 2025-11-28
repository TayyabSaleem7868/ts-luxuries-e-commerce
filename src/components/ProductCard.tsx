import { Product } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="glass-card glass-hover rounded-lg overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-100 hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-6">
        <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xl font-semibold mb-2 hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-2xl font-bold text-accent mb-4">
          ${product.price.toLocaleString()}
        </p>
        <Button
          onClick={() => addToCart(product)}
          className="w-full"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
