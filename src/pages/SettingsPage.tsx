import { NavLink } from 'react-router-dom';

export default function SettingsPage() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    'flex items-center gap-3 px-4 py-2 rounded-lg ' +
    (isActive
      ? 'text-accent-blue bg-accent-blue/20 font-semibold shadow-premium-sm'
      : 'text-warm-300 hover:bg-warm-800/50 transition-colors duration-200');

  return (
    <div className="min-h-screen bg-warm-950 text-warm-100 font-['Noto_Sans_KR'] flex">
      <aside className="w-64 bg-warm-900 glass-heavy p-6 sticky top-[var(--header-height,61px)] h-[calc(100vh-var(--header-height,61px))] flex-col justify-between hidden md:flex">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-warm-50">설정</h2>
          <nav className="space-y-2">
            <NavLink to="/settings/profile" className={navLinkClasses}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              프로필
            </NavLink>
            <NavLink to="/settings/security" className={navLinkClasses}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              보안
            </NavLink>
            <NavLink to="/settings/notifications" className={navLinkClasses}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              알림
            </NavLink>
            <NavLink to="/settings/integrations" className={navLinkClasses}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              통합
            </NavLink>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p>This is where the settings form would go, likely rendered via a nested Outlet.</p>
      </main>
    </div>
  );
}
