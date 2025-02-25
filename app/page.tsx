'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Recycle, Heart, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1531877025030-f7696a50770f?q=80&w=3540&auto=format&fit=crop"
              alt="Kids furniture background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            Salons de Jardin Upcyclés
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8">
            Créations uniques et durables fabriquées en France (Lyon)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto text-base">
              Découvrir nos Produits
            </Button>
            <Link href="/notre-histoire" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/20 w-full">
                Notre Histoire
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">Nos Valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Leaf,
                title: "Éco-responsable",
                description: "Matériaux recyclés et processus de fabrication durable"
              },
              {
                icon: Recycle,
                title: "Upcycling",
                description: "Transformation créative de matériaux existants"
              },
              {
                icon: Heart,
                title: "Bien-être",
                description: "Confort et durabilité pour votre espace extérieur"
              },
              {
                icon: Star,
                title: "Artisanat Local",
                description: "Fabrication française et savoir-faire artisanal"
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="bg-green-50 py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">Nos Créations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Salon Lounge Éco",
                image: "https://plus.unsplash.com/premium_photo-1671014964740-a12aed9dc495?q=80&w=3387&auto=format&fit=crop",
                price: "899€",
                href: "/produits/salon-lounge-eco"
              },
              {
                title: "Hamac Tropical",
                image: "https://plus.unsplash.com/premium_photo-1661329898868-d69f8f40fbaf?q=80&w=3540&auto=format&fit=crop",
                price: "249€",
                href: "#"
              },
              {
                title: "Coussins de Jardin Zen",
                image: "https://images.unsplash.com/photo-1506591608813-bf1cc7ee7400?q=80&w=3387&auto=format&fit=crop",
                price: "80€",
                href: "#"
              }
            ].map((product, index) => (
              <Link href={product.href} key={index}>
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-green-600 font-bold text-lg mb-4">{product.price}</p>
                    <Button className="w-full">Voir le produit</Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              Voir tous nos produits
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}