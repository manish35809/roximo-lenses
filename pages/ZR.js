import React, { useState, useEffect } from "react";
import {
  SunMedium,
  Droplets,
  ShieldCheck,
  Sparkles,
  MonitorSmartphone,
  ShieldHalf,
  Wind,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Play,
  Star,
  Award,
  Eye,
  Zap,
  Timer,
  Target,
  TrendingUp,
  Users,
  Microscope,
  Trophy,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const AnimatedCounter = ({ target, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < target) {
        setCount(Math.min(count + Math.ceil((target - count) / 12), target));
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [count, target]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const TechSpec = ({ label, value, unit, description }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 group">
    <div className="flex items-center justify-between mb-3">
      <div className="text-sm font-semibold text-white/80">{label}</div>
      <div className="text-xs text-cyan-400 font-medium">{unit}</div>
    </div>
    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
      {value}
    </div>
    <div className="text-xs text-white/60 leading-relaxed">{description}</div>
  </div>
);

export default function ZeroReflectionPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Dr. Aisha Nair",
      role: "Chief Optometrist, Vision Research Centre",
      company: "AIIMS Delhi",
      rating: 5,
      text: "The optical clarity is unmatched. Our patients report 95% less eye strain during extended screen use.",
      metrics: "95% less strain",
    },
    {
      name: "Rohan Mehta",
      role: "Senior Software Architect",
      company: "Infosys",
      rating: 5,
      text: "After 16-hour coding marathons, my eyes still feel fresh. The blue light filtering is scientifically superior.",
      metrics: "16h+ comfort",
    },
    {
      name: "Dr. Kavita Iyer",
      role: "Research Director",
      company: "IIT Vision Lab",
      rating: 5,
      text: "We’ve tested dozens of lens technologies. Zero Reflection outperforms military-grade optics by 340%.",
      metrics: "340% better",
    },
  ];

  const techSpecs = [
    {
      label: "Light Transmission",
      value: "99.7",
      unit: "%",
      description: "Maximum clarity with minimal light loss",
    },
    {
      label: "Reflection Coefficient",
      value: "<0.5",
      unit: "%",
      description: "Industry-leading anti-reflective performance",
    },
    {
      label: "Blue Light Blocking",
      value: "95",
      unit: "%",
      description: "Filters 380-450nm harmful blue light",
    },
    {
      label: "UV Protection Range",
      value: "280-420",
      unit: "nm",
      description: "Complete UV-A and UV-B spectrum coverage",
    },
    {
      label: "Hydrophobic Angle",
      value: "115°",
      unit: "Contact",
      description: "Superior water and oil repellency",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Enhanced animated background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(15,23,42,0.9))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_80%,rgba(59,130,246,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_60%,rgba(147,51,234,0.05),transparent)]" />

        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
            {/* Hero Content */}
            <div
              className={`space-y-10 text-center lg:text-left transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 backdrop-blur-md">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-bold text-white tracking-wide">
                    AWARD-WINNING LENS TECHNOLOGY
                  </span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight">
                  <span className="text-white">ZERO</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                    REFLECTION
                  </span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-cyan-300">
                  <Microscope className="h-4 w-4" />
                  <span>Precision-Engineered Optical Excellence</span>
                </div>
              </div>

              <p className="text-xl sm:text-2xl text-white/85 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience the future of vision with our quantum-engineered
                anti-reflective coating.
                <span className="block mt-3 text-lg text-cyan-300 font-medium">
                  Trusted by 50,000+ professionals worldwide.
                </span>
              </p>

              {/* Key metrics */}
              <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
                {[
                  { icon: Eye, value: "99.7%", label: "Clarity" },
                  { icon: ShieldCheck, value: "100%", label: "UV Block" },
                  { icon: Timer, value: "48h+", label: "Comfort" },
                ].map((metric, i) => (
                  <div key={i} className="text-center group">
                    <metric.icon className="h-6 w-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-black text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-white/60 font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
                {/* Outer glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 rounded-3xl opacity-50 blur-xl animate-pulse"></div>

                {/* Main container */}
                <div className="relative aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-slate-900/50 to-black/50 border border-white/30 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-700 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Crystal clear vision through Zero Reflection lenses in Times Square"
                    className="w-full h-full object-cover"
                  />

                  {/* Comparison overlays */}
                  <div
                    className="absolute top-6 right-6 bg-emerald-500/95 backdrop-blur-sm border border-emerald-400/50 px-4 py-3 rounded-xl text-sm font-bold animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="text-white">ZERO REFLECTION</div>
                    <div className="text-emerald-200 text-xs">
                      Crystal Clear Vision
                    </div>
                  </div>

                  {/* Tech overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/70 backdrop-blur-xl border border-white/20 rounded-2xl p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-bold text-lg">
                            Quantum Optics
                          </div>
                          <div className="text-white/80 text-sm">
                            Multi-layer precision coating
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-cyan-400 font-black text-2xl">
                            99.7%
                          </div>
                          <div className="text-white/70 text-xs">
                            Light transmission
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Scanning line effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-1 animate-pulse group-hover:animate-none"
                    style={{ animation: "scan 3s ease-in-out infinite" }}
                  />
                </div>

                {/* Floating data points */}
                {[
                  {
                    icon: Target,
                    value: "0.3%",
                    label: "Reflection",
                    position: "top-1/4 -left-16",
                  },
                  {
                    icon: Zap,
                    value: "2.1ms",
                    label: "Response",
                    position: "bottom-1/3 -right-16",
                  },
                  {
                    icon: TrendingUp,
                    value: "340%",
                    label: "Performance",
                    position: "top-1/2 -right-20",
                  },
                ].map((point, i) => (
                  <div
                    key={i}
                    className={`absolute ${point.position} bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 animate-float`}
                    style={{ animationDelay: `${i * 500}ms` }}
                  >
                    <point.icon className="h-5 w-5 text-cyan-400 mb-2" />
                    <div className="text-white font-bold text-lg">
                      {point.value}
                    </div>
                    <div className="text-white/70 text-xs">{point.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative py-24 bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white/90 mb-2">
              Proven Performance Metrics
            </h3>
            <p className="text-white/60">
              Industry-leading specifications validated by independent testing
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {[
              {
                icon: Eye,
                value: 99.7,
                suffix: "%",
                label: "Optical Clarity",
                desc: "Light transmission rate",
              },
              {
                icon: ShieldAlert,
                value: 420,
                suffix: "nm",
                label: "UV Protection",
                desc: "Complete spectrum coverage",
              },
              {
                icon: Timer,
                value: 72,
                suffix: "h",
                label: "Eye Comfort",
                desc: "Extended wear testing",
              },
              {
                icon: Star,
                value: 5,
                suffix: "/5",
                label: "Rating",
                desc: "Customer satisfaction",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center group hover:scale-105 transition-all duration-500 p-6 rounded-2xl hover:bg-white/5"
              >
                <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-white/60">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                Technical Excellence.
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Measurable Results.
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Every specification engineered for peak performance. Our quantum
              coating technology delivers measurable improvements across all
              optical parameters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {techSpecs.map((spec, i) => (
              <TechSpec key={i} {...spec} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Grid – Redesigned */}
      <section className="relative py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                Advanced Protection.
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Uncompromised Comfort.
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Seven layers of precision-engineered coatings provide
              comprehensive protection while maintaining perfect optical clarity
              in any environment.
            </p>
          </div>

          {/* Responsive, centered, equal-height cards */}
          <div className="grid gap-6 auto-rows-fr [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] justify-center">
            {[
              {
                Icon: Sparkles,
                title: "Quantum Anti-Reflection",
                desc: "Revolutionary 7-layer coating eliminates 99.7% of reflections using quantum interference patterns for unprecedented optical clarity.",
                stat: "99.7%",
              },
              {
                Icon: ShieldAlert,
                title: "Diamond-Hard Coating",
                desc: "Military-grade 9H surface hardness provides superior scratch resistance that exceeds sapphire crystal durability.",
                stat: "9H",
              },
              {
                Icon: MonitorSmartphone,
                title: "Blue Light Optimization",
                desc: "Selectively filters harmful 415–455nm blue light while preserving color accuracy for extended digital comfort.",
                stat: "95%",
              },
              {
                Icon: ShieldCheck,
                title: "Full-Spectrum UV Shield",
                desc: "Complete protection against UV-A, UV-B, and high-energy visible light up to 420nm wavelength.",
                stat: "100%",
              },
              {
                Icon: Droplets,
                title: "Hydrophobic Excellence",
                desc: "Advanced 115° contact angle technology repels water, oil, and contaminants for effortless maintenance.",
                stat: "115°",
              },
              {
                Icon: Wind,
                title: "Anti-Static Technology",
                desc: "Ionized surface treatment eliminates static buildup, preventing dust adhesion for all-day clarity.",
                stat: "0V",
              },
            ].map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 mb-6">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-bold text-yellow-300">
                INDUSTRY VALIDATION
              </span>
            </div>
            <h2 className="text-4xl font-black mb-6">What Experts Say</h2>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-7 w-7 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">4.98/5</span>
              <span className="text-white/60">
                from 12,847 verified reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:from-white/15 hover:to-white/8 transition-all duration-500 hover:scale-105 group"
              >
                {/* Floating metric */}
                <div className="absolute -top-4 right-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-2xl text-sm font-bold">
                  {testimonial.metrics}
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-white/85 mb-8 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/70">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-cyan-400 font-semibold">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20 border border-white/30 p-12 sm:p-16 text-center overflow-hidden backdrop-blur-md">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-400/40 mb-8">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-bold text-white">
                  LIMITED TIME: FREE UPGRADE TO PREMIUM
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl font-black mb-8">
                <span className="text-white">Experience the Future of</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Crystal-Clear Vision
                </span>
              </h3>

              <p className="text-xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join over 50,000 professionals who've revolutionized their
                vision experience. Perfect for executives, developers,
                designers, and anyone demanding optical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
        <div className="bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">
                  Zero Reflection
                </div>
                <div className="text-xs text-cyan-300">
                  99.7% optical clarity
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform duration-200 flex items-center gap-2">
              <span>Order Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl border-t border-slate-700/50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <p className="text-slate-300 text-sm">
              © 2025
              <span className="text-blue-400 font-semibold ml-1">
                Roximo Lenses
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(120deg);
          }
          66% {
            transform: translateY(4px) rotate(240deg);
          }
        }

        @keyframes scan {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
