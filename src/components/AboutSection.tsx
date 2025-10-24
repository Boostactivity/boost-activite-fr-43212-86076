import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Rocket } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Toujours à la pointe des dernières tendances et technologies digitales",
  },
  {
    icon: Target,
    title: "Performance",
    description: "Des stratégies axées sur des KPIs clairs et des résultats mesurables",
  },
  {
    icon: Rocket,
    title: "Croissance",
    description: "Votre succès est notre réussite. Nous grandissons ensemble",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                À propos de{" "}
                <span className="text-gradient">
                  Boost Activity
                </span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Boost Activity</strong> est bien plus qu'une 
                  agence de marketing digital. Nous sommes vos partenaires de croissance, dédiés à 
                  transformer votre présence en ligne en résultats concrets.
                </p>
                <p>
                  Fondée par des experts passionnés du digital, notre agence combine 
                  <strong className="text-foreground"> stratégie, créativité et technologie</strong> pour 
                  offrir des solutions sur-mesure qui répondent aux défis uniques de chaque entreprise.
                </p>
                <p>
                  De la stratégie publicitaire à la gestion des réseaux sociaux, en passant par la 
                  création de sites web performants et notre service innovant{" "}
                  <strong className="text-foreground">DropEats</strong> pour les restaurants, 
                  nous couvrons tous les aspects du marketing digital moderne.
                </p>
                <p>
                  Notre mission ? Rendre le digital accessible et rentable pour tous les entrepreneurs, 
                  en les accompagnant avec transparence, expertise et engagement.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-secondary mb-3 shadow-soft">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold mb-1">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <Card className="p-8 sm:p-12 gradient-card border-border shadow-medium">
            <h3 className="text-2xl font-bold mb-8">Notre Impact</h3>
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Satisfaction client</span>
                  <span className="text-sm font-bold text-gradient">98%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="gradient-secondary h-2 rounded-full shadow-soft" style={{ width: "98%" }} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Croissance moyenne clients</span>
                  <span className="text-sm font-bold text-gradient">+145%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="gradient-secondary h-2 rounded-full shadow-soft" style={{ width: "90%" }} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Taux de recommandation</span>
                  <span className="text-sm font-bold text-gradient">95%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="gradient-secondary h-2 rounded-full shadow-soft" style={{ width: "95%" }} />
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Années d'expérience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-1">15</div>
                    <div className="text-sm text-muted-foreground">Experts en équipe</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
