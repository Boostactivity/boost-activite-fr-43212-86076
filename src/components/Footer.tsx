import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Boost Activity</h3>
            <p className="text-background/80 mb-4 max-w-md">
              Votre partenaire de croissance digitale. Stratégie, créativité et 
              technologie pour booster votre activité en ligne.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#services" className="hover:text-primary transition-smooth">
                  Publicité digitale
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-smooth">
                  Réseaux sociaux
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-smooth">
                  Création de sites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-smooth">
                  Formations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-smooth">
                  DropEats
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-smooth">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-smooth">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center text-background/60 text-sm">
          <p>© {currentYear} Boost Activity. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
