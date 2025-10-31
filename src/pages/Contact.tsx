export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form className="mt-6 grid gap-4">
        <input className="border rounded-xl p-3" placeholder="Nom / Restaurant" />
        <input className="border rounded-xl p-3" placeholder="Email" type="email" />
        <input className="border rounded-xl p-3" placeholder="Téléphone" />
        <textarea className="border rounded-xl p-3" rows={5} placeholder="Votre besoin" />
        <button className="px-5 py-3 rounded-xl bg-blue-600 text-white w-fit">Envoyer</button>
      </form>
      <p className="mt-4 text-slate-600">Ou écrivez-nous : contact@boostactivity.fr</p>
    </main>
  );
}