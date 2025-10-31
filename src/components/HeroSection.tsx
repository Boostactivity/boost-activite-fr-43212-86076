export default function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Activez le potentiel dormant de votre cuisine avec{" "}
        <span className="text-blue-600">DropEats</span>
      </h1>
      <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
        Création de marques virtuelles, optimisation Uber Eats & tunnels de vente
        pour générer un revenu supplémentaire mesurable, sans alourdir vos équipes.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <a href="/services" className="px-5 py-3 rounded-xl bg-blue-600 text-white">
          Voir nos services
        </a>
        <a href="/contact" className="px-5 py-3 rounded-xl border">
          Parler à un expert
        </a>
      </div>
    </section>
  );
}