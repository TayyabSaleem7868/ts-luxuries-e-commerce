import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-luxury.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background z-10" />
        <img
          src={heroImage}
          alt="Luxury lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Timeless <span className="text-accent">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Discover our curated collection of premium luxury products, crafted for those who appreciate the finest things in life.
          </p>
          <Link to="/products">
            <Button size="lg" className="text-lg px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Featured Collection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handpicked selections from our exclusive range of luxury products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 glass-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            The Art of Luxury
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            At TS Luxuries, we believe that true luxury transcends material possessions. 
            It's about the experience, the craftsmanship, and the story behind each piece. 
            Our carefully curated collection represents the pinnacle of design and quality, 
            bringing you products that stand the test of time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-semibold mb-3">Authenticity</h3>
              <p className="text-muted-foreground">
                Every product is verified and certified genuine
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Uncompromising quality in every detail
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-semibold mb-3">Service</h3>
              <p className="text-muted-foreground">
                White-glove customer experience guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
