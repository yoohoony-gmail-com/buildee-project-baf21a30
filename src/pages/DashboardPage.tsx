export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-warm-950 text-warm-100 font-['Noto_Sans_KR'] relative overflow-hidden py-12 md:py-16">
      <div className="hero-orb bg-accent-blue w-80 h-80 -top-20 -right-20 opacity-30" />
      <div className="hero-orb bg-accent-purple w-64 h-64 bottom-1/4 -left-20 opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 grid-overlay" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 md:mb-12 gap-4">
          <h1 className="gradient-text text-4xl md:text-5xl font-bold tracking-tight">
            교육 플랫폼 대시보드
          </h1>
          <button className="btn-premium bg-gradient-to-r from-accent-emerald to-accent-cyan text-white px-6 py-3 rounded-xl font-semibold shadow-premium-sm hover:shadow-glow-cyan">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              새 강좌 추가
            </div>
          </button>
        </div>
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl font-semibold text-warm-50 mb-6">내 학습 현황</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="gradient-text text-4xl font-bold mb-2">12</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">총 강좌 수</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-accent-emerald text-4xl font-bold mb-2">85%</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">평균 완료율</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-accent-cyan text-4xl font-bold mb-2">3</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">진행중인 강좌</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-accent-purple text-4xl font-bold mb-2">5</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">완료된 강좌</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
