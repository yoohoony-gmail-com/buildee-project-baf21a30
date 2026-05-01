import { NavLink, Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white font-semibold border-b-2 border-accent-blue px-3 py-2 text-sm"
      : "text-warm-400 hover:text-white transition-colors px-3 py-2 text-sm";

  return (
    <div className="min-h-screen bg-warm-950 text-white font-sans">
      <header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="gradient-text font-bold text-lg">Site</Link>
          <div className="flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
            <NavLink to="/settings" className={navLinkClass}>Settings</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
