'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Recycle, Heart, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531877025030-f7696a50770f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Kids furniture background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Salons de Jardin Upcyclés
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Créations uniques et durables fabriquées en France (Lyon)
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Découvrir nos Produits
            </Button>
            <Link href="/notre-histoire">
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/20">
                Notre Histoire
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Éco-responsable</h3>
              <p className="text-gray-600">Matériaux recyclés et processus de fabrication durable</p>
            </Card>
            <Card className="p-6 text-center">
              <Recycle className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Upcycling</h3>
              <p className="text-gray-600">Transformation créative de matériaux existants</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Bien-être</h3>
              <p className="text-gray-600">Confort et durabilité pour votre espace extérieur</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Artisanat Local</h3>
              <p className="text-gray-600">Fabrication française et savoir-faire artisanal</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="bg-green-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Créations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Salon Lounge Éco",
                image: "https://plus.unsplash.com/premium_photo-1671014964740-a12aed9dc495?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                price: "899€"
              },
              {
                title: "Hamac Tropical",
                image: "https://plus.unsplash.com/premium_photo-1661329898868-d69f8f40fbaf?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                price: "249€"
              },
              {
                title: "Coussins de Jardin Zen",
                image: "https://images.unsplash.com/photo-1506591608813-bf1cc7ee7400?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                price: "80€"
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-green-600 font-bold">{product.price}</p>
                  <Button className="w-full mt-4">Voir le produit</Button>
                </div>
              </Card>
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