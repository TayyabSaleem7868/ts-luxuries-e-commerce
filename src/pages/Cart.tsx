import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="font-serif text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-8">
            Discover our luxury collection and find something special
          </p>
          <Link to="/products">
            <Button size="lg">Explore Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="font-serif text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="glass-card rounded-lg p-6">
                <div className="flex gap-6">
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </Link>
                  <div className="flex-grow">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-serif text-xl font-semibold mb-2 hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground mb-4">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-semibold text-lg w-12 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-accent">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="flex-shrink-0"
                  >
                    <Trash2 className="h-5 w-5 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="glass-card rounded-lg p-6 sticky top-24">
              <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-accent">Free</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-xl">
                    <span className="font-serif font-bold">Total</span>
                    <span className="font-bold text-accent">
                      ${getCartTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/checkout">
                <Button size="lg" className="w-full text-lg">
                  Proceed to Checkout
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="w-full mt-3">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
