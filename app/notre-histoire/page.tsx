'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2488&auto=format&fit=crop"
              alt="Fondatrice Violette"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-8 text-green-800">Notre Histoire</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Bonjour, je m'appelle Violette, et je suis la fondatrice de Jardintérieur. Mon parcours est une histoire de passion, de reconversion et d'engagement pour un monde plus durable et esthétique.
              </p>
              
              <p className="text-gray-700 mb-6">
                Initialement diététicienne, j'ai toujours été animée par le désir de contribuer au bien-être des autres. Cependant, c'est en me reconvertissant en couturière que j'ai véritablement trouvé ma voie. Cette transition m'a permis de découvrir une nouvelle manière d'exprimer mes valeurs et de créer des pièces uniques qui embellissent nos espaces de vie.
              </p>
              
              <p className="text-gray-700 mb-6">
                Forte de mon expérience dans une entreprise de retouche, où j'ai travaillé pour des marques allant du grand public au luxe, j'ai acquis une connaissance approfondie des tissus et des techniques qui rendent les créations non seulement belles, mais aussi durables. Cette expertise m'a inspirée à lancer Jardintérieur, une entreprise dédiée à la création de meubles et accessoires d'ameublement à partir de tissus upcyclés.
              </p>
              
              <p className="text-gray-700 mb-6">
                Chaque jour, je suis motivée par la volonté de proposer ce que je ne trouve nulle part ailleurs : des pièces qui créent une atmosphère unique pour votre extérieur. Mon engagement pour la durabilité et l'esthétisme guide chacune de mes créations, car je crois fermement que nous pouvons allier beauté et respect de l'environnement.
              </p>
              
              <p className="text-gray-700 mb-6">
                Jardintérieur, c'est plus qu'une entreprise ; c'est une aventure humaine et écologique. C'est l'histoire d'une passionnée qui souhaite partager avec vous des créations uniques, conçues avec amour et responsabilité. Rejoignez-moi dans cette aventure et transformons ensemble vos espaces extérieurs en véritables oasis de bien-être et de style.
              </p>
              
              <p className="text-gray-700 mb-6">
                Avec toute ma gratitude,
              </p>
              
              <p className="text-green-800 font-semibold">
                Violette<br />
                Fondatrice de Jardintérieur
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6 text-green-800">Me Contacter</h2>
          <div className="flex items-center justify-center">
            <a
              href="mailto:contact@jardinterieur.fr"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              contact@jardinterieur.fr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}