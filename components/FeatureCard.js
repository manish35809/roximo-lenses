const FeatureCardV3 = ({ Icon, title, stat, desc }) => (
  <article className="relative flex flex-col h-full rounded-3xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] transition-all duration-300 hover:translate-y-[-3px] hover:ring-cyan-400/40">
    
    {/* Header */}
    <div className="flex items-start justify-between gap-4 p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center rounded-xl p-3 bg-cyan-500/10 ring-1 ring-cyan-400/20">
          <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
        </span>
        <h3 className="text-lg font-bold text-white leading-snug">
          {title}
        </h3>
      </div>

      {/* Stat as a pill badge */}
      <span className="ml-auto rounded-xl px-3 py-1.5 text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 ring-1 ring-white/10 bg-white/5">
        {stat}
      </span>
    </div>

    {/* Divider */}
    <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    {/* Body */}
    <div className="p-6 pt-4 flex-1">
      <p className="text-[15px] text-white/75 leading-relaxed">
        {desc}
      </p>
    </div>
  </article>
);

export default FeatureCardV3;
