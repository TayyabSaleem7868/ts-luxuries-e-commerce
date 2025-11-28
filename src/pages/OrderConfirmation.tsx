import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface Order {
  orderNumber: string;
  items: any[];
  total: number;
  date: string;
}

const OrderConfirmation = () => {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('last-order');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">No Order Found</h2>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <CheckCircle2 className="h-20 w-20 mx-auto mb-6 text-accent" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your purchase. Your order has been received.
          </p>
        </div>

        <div className="glass-card rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Order Number</p>
              <p className="font-bold text-xl">{order.orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Order Date</p>
              <p className="font-semibold">
                {new Date(order.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h2 className="font-serif text-2xl font-semibold mb-6">Order Details</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold text-accent">
                    ${(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-6 pt-6">
              <div className="flex justify-between text-xl">
                <span className="font-serif font-bold">Total</span>
                <span className="font-bold text-accent">
                  ${order.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-lg p-8 mb-8">
          <h2 className="font-serif text-2xl font-semibold mb-4">What's Next?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• You will receive a confirmation email shortly</li>
            <li>• Your order will be processed within 24 hours</li>
            <li>• Complimentary white-glove delivery will be arranged</li>
            <li>• Track your order status via email updates</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products">
            <Button size="lg" className="w-full sm:w-auto">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
