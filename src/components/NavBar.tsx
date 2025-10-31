import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const base = "px-3 py-2 rounded-lg hover:bg-blue-50";
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? base + " bg-blue-100" : base;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <Link to="/" className="font-semibold text-xl">
          Boost <span className="text-blue-600">Activity</span>
        </Link>
        <div className="flex gap-1">
          <NavLink to="/" className={active} end>Accueil</NavLink>
          <NavLink to="/services" className={active}>Services</NavLink>
          <NavLink to="/a-propos" className={active}>À propos</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}