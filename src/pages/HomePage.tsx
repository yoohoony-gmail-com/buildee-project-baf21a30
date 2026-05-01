export default function HomePage() {
  return (
    <main className="bg-warm-950 font-['Noto_Sans_KR'] text-warm-100 antialiased">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-950 py-24 px-6">
        <div className="hero-orb bg-accent-blue w-96 h-96 -top-20 -left-20" />
        <div className="hero-orb bg-accent-purple w-72 h-72 top-1/3 right-10" style={{ animationDelay: '2s' }} />
        <div className="hero-orb bg-accent-cyan w-80 h-80 bottom-0 left-1/4" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 grid-overlay" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-warm-300 mb-8 shadow-premium-sm">
            ✨ 새로운 학습의 시작
          </span>
          <h1 className="gradient-text text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-gradient-shift">
            미래를 위한 <br className="md:hidden" /> 지식 허브
          </h1>
          <p className="text-warm-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            강의를 효율적으로 관리하고, 개인화된 학습 경험으로 여러분의 성장을 지원하는 프리미엄 교육 플랫폼입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-xl font-semibold shadow-glow-blue">
              지금 바로 시작하기
            </button>
            <button className="glass-card px-8 py-4 rounded-xl text-warm-200 font-semibold hover:shadow-glow-purple transition-shadow duration-300">
              강의 둘러보기
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-warm-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center shadow-premium-sm">
              <div className="gradient-text text-4xl font-bold mb-1">10K+</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
