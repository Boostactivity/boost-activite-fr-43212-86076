export default function Services() {
  const items = [
    { t: "Audit & stratégie", d: "Analyse locale, positionnement, plan d’action." },
    { t: "Marques virtuelles", d: "Création de concepts rentables adaptés à votre cuisine." },
    { t: "Optimisation plateformes", d: "Menus, photos, pricing, promos, algorithmes." },
    { t: "Tunnels de vente", d: "Landing pages, tracking, offres, automatisations." },
    { t: "Acquisition payante", d: "Google/Meta/TikTok Ads orientées ROI." },
  ];
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-3xl font-bold">Nos services</h2>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((s) => (
          <div key={s.t} className="rounded-2xl border p-6 bg-white shadow-sm">
            <h3 className="font-semibold text-lg">{s.t}</h3>
            <p className="mt-2 text-slate-600">{s.d}</p>
          </div>
        ))}
      </div>
    </main>
  );
}