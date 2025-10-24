import { Card } from "@/components/ui/card";
import { 
  Megaphone, 
  MessageSquare, 
  Globe, 
  GraduationCap, 
  UtensilsCrossed 
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Stratégie marketing et publicité digitale",
    description: "Campagnes publicitaires performantes sur Google Ads, Meta Ads, TikTok, Snapchat et YouTube. Email marketing, retargeting et analytics pour maximiser votre ROI.",
  },
  {
    icon: MessageSquare,
    title: "Gestion des réseaux sociaux",
    description: "Création de contenu engageant, storytelling de marque, community management et stratégies de croissance pour développer votre présence en ligne.",
  },
  {
    icon: Globe,
    title: "Création de sites internet et tunnels de vente",
    description: "Sites vitrine, e-commerce, landing pages et tunnels de vente optimisés pour la conversion. Intégration SEO, CRM et systèmes de paiement.",
  },
  {
    icon: GraduationCap,
    title: "Formations en marketing digital",
    description: "Formations personnalisées pour entrepreneurs : publicité, réseaux sociaux, création de site, branding. Devenez autonome et performant dans le digital.",
  },
  {
    icon: UtensilsCrossed,
    title: "DropEats - Revenus additionnels pour restaurants",
    description: "Programme exclusif pour générer jusqu'à 2 500€ nets/mois supplémentaires. Aucun nouvel employé ni matériel requis. Accompagnement complet.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nos{" "}
            <span className="text-gradient">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des solutions complètes pour développer votre présence digitale et 
            générer des résultats concrets
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 gradient-card border-border hover:shadow-medium transition-smooth group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-bounce">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-smooth">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
