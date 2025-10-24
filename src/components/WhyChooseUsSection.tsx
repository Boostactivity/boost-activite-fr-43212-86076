import { Card } from "@/components/ui/card";
import { Zap, LineChart, Headphones, Award } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Approche orientée résultats",
    description: "Nous ne vendons pas de rêves, nous livrons des résultats mesurables. Chaque stratégie est conçue pour maximiser votre retour sur investissement.",
  },
  {
    icon: LineChart,
    title: "Transparence totale",
    description: "Rapports détaillés, analytics en temps réel et tableaux de bord personnalisés. Vous savez exactement où va chaque euro investi.",
  },
  {
    icon: Headphones,
    title: "Accompagnement personnalisé",
    description: "Une équipe dédiée qui comprend vos enjeux et s'adapte à votre secteur. Disponibles et réactifs pour répondre à toutes vos questions.",
  },
  {
    icon: Award,
    title: "Expertise multi-canaux",
    description: "Maîtrise de tous les leviers digitaux : publicité, social media, web, formation. Une vision 360° pour une stratégie cohérente.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi{" "}
            <span className="text-gradient">
              Nous Choisir
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une agence qui combine expertise technique, créativité et engagement 
            pour votre succès
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-8 gradient-card border-border hover:shadow-medium transition-smooth group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-bounce">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-smooth">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-12 max-w-3xl mx-auto gradient-primary border-0 shadow-strong">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Prêt à booster votre activité ?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Discutons de votre projet et découvrons ensemble comment 
              nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-smooth shadow-medium"
            >
              Demander un audit gratuit
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
