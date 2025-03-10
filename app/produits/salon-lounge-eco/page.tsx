'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf, Package, Timer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="flex-1 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://plus.unsplash.com/premium_photo-1671014964740-a12aed9dc495?q=80&w=3387&auto=format&fit=crop"
              alt="Salon Lounge Éco"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
              Salon Lounge Éco
            </h1>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold text-green-600">899€</span>
              <span className="text-sm text-gray-500">TTC</span>
            </div>

            <div className="prose prose-lg mb-8">
              <p className="text-gray-700">
                Notre Salon Lounge Éco est la parfaite alliance entre confort, style et responsabilité environnementale. 
                Fabriqué à partir de tissus upcyclés soigneusement sélectionnés, chaque pièce est unique et raconte 
                sa propre histoire.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Matériaux recyclés</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Package className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Fabrication artisanale</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Timer className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Livraison 2-3 semaines</span>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Caractéristiques</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Dimensions totales</span>
                  <span className="font-medium">240 x 180 x 70 cm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Nombre de places</span>
                  <span className="font-medium">5 personnes</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Matériaux</span>
                  <span className="font-medium">Tissus upcyclés, structure en aluminium</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Garantie</span>
                  <span className="font-medium">2 ans</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-lg">
                Commander
              </Button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Livraison gratuite en France métropolitaine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}