import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "150+",
    label: "Entreprises accompagnées",
    description: "PME, restaurants et entrepreneurs qui nous font confiance",
  },
  {
    icon: TrendingUp,
    value: "x4",
    label: "ROI moyen",
    description: "Sur nos campagnes publicitaires digitales",
  },
  {
    icon: Target,
    value: "2 500€",
    label: "Revenus nets/mois",
    description: "Générés pour nos restaurants partenaires avec DropEats",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfaction client",
    description: "Taux de clients satisfaits et qui recommandent nos services",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nos{" "}
            <span className="text-gradient">
              Résultats
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des chiffres qui parlent d'eux-mêmes et témoignent de notre engagement 
            envers votre réussite
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center gradient-card border-border hover:shadow-medium transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-secondary mb-6 shadow-soft">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold mb-2">
                {stat.label}
              </div>
              
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <Card className="mt-16 p-8 sm:p-12 max-w-4xl mx-auto gradient-card border-border shadow-soft">
          <div className="text-center">
            <div className="text-6xl text-primary mb-4">"</div>
            <p className="text-xl sm:text-2xl italic mb-6 text-foreground">
              Boost Activity a transformé notre présence en ligne. En 3 mois, nos réservations 
              ont augmenté de 40% et grâce à DropEats, nous générons 2 000€ nets supplémentaires 
              chaque mois sans effort additionnel.
            </p>
            <div className="font-semibold text-lg">Marc Dubois</div>
            <div className="text-muted-foreground">Restaurant Le Comptoir, Paris</div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ResultsSection;
