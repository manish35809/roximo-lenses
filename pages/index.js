import React, { useState, useEffect } from "react";
import {
  Eye,
  Shield,
  Sun,
  Sparkles,
  Zap,
  Star,
  Award,
  ChevronRight,
  Menu,
  X,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Target,
  Heart,
} from "lucide-react";

const RoximoLensesLanding = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "ShieldX",
      subtitle: "Hard Coat Lenses",
      variants: [
        {
          type: "Clear",
          features: [
            "Scratch Resistance",
            "High Durability",
            "Crystal Clear Vision",
          ],
          options: ["SV", "KT", "Pro"],
          icon: Shield,
          gradient: "from-blue-400 to-cyan-300",
        },
        {
          type: "Photo Grey",
          features: [
            "Dark in Sunlight & Light Indoors",
            "UV 400 Sun UV Protection",
            "Fast Change in Color",
          ],
          options: ["SV", "KT", "Pro"],
          icon: Sun,
          gradient: "from-gray-400 to-slate-300",
        },
      ],
    },
    {
      id: 2,
      name: "Crystal HMC",
      subtitle: "Blue Cut Lenses",
      variants: [
        {
          type: "Blue Cut",
          features: [
            "UV 420 Blue Light Protection",
            "Anti-Glare",
            "Clear Vision",
          ],
          options: ["SV", "KT", "Pro"],
          icon: Eye,
          gradient: "from-blue-500 to-indigo-400",
        },
        {
          type: "Hi-Index",
          features: [
            "Thinner and Lighter",
            "Impact Resistance",
            "Better Cosmetic Appearance",
          ],
          options: ["SV"],
          icon: Sparkles,
          gradient: "from-purple-400 to-pink-300",
        },
        {
          type: "Poly Blue Cut",
          features: [
            "High Impact Resistance",
            "Ultra Light Weight",
            "UV 420 Blue Light Protection",
          ],
          options: ["SV", "Pro"],
          icon: Shield,
          gradient: "from-green-400 to-emerald-300",
        },
        {
          type: "PG Blue Cut",
          features: [
            "Photo Grey Tint (Auto Darkens in Sun)",
            "UV + Blue Light Blocking",
            "Fast Transition & Clear Indoor Vision",
          ],
          options: ["SV", "KT", "Pro"],
          icon: Sun,
          gradient: "from-amber-400 to-orange-300",
        },
      ],
    },
    {
      id: 3,
      name: "Protect Blue",
      subtitle: "Blue Cut Lenses",
      variants: [
        {
          type: "Blue Cut",
          features: [
            "24/7 Digital Eye Protection",
            "Thin Design",
            "Stylish Blue Reflective Coating",
          ],
          options: ["SV", "Pro"],
          icon: Eye,
          gradient: "from-blue-600 to-cyan-400",
        },
        {
          type: "Poly Blue Cut",
          features: [
            "24/7 Digital Eye Protection",
            "Thin Design",
            "Stylish Blue Reflective Coating",
          ],
          options: ["SV", "Pro"],
          icon: Shield,
          gradient: "from-teal-400 to-blue-300",
        },
        {
          type: "PG Blue Cut",
          features: [
            "24/7 Digital Eye Protection",
            "Thin Design",
            "Stylish Blue Reflective Coating",
          ],
          options: ["SV", "Pro"],
          icon: Sun,
          gradient: "from-indigo-400 to-purple-300",
        },
      ],
    },
    {
      id: 4,
      name: "Crystal Protect",
      subtitle: "Blue Cut Lenses",
      variants: [
        {
          type: "Blue Cut",
          features: [
            "Super Hydrophobic Surface",
            "Dual Coating - Green & Blue Reflex",
            "Both Side Full UV Protection",
          ],
          options: ["SV", "Pro"],
          icon: Sparkles,
          gradient: "from-emerald-400 to-teal-300",
        },
        {
          type: "Hi-Index",
          features: [
            "Super Hydrophobic Surface",
            "Dual Coating - Green & Blue Reflex",
            "Both Side Full UV Protection",
          ],
          options: ["SV"],
          icon: Star,
          gradient: "from-violet-400 to-purple-300",
        },
        {
          type: "Poly Blue Cut",
          features: [
            "Super Hydrophobic Surface",
            "Dual Coating - Green & Blue Reflex",
            "Both Side Full UV Protection",
          ],
          options: ["SV", "Pro"],
          icon: Shield,
          gradient: "from-cyan-400 to-blue-300",
        },
        {
          type: "PG Blue Cut",
          features: [
            "Super Hydrophobic Surface",
            "Dual Coating - Green & Blue Reflex",
            "Both Side Full UV Protection",
          ],
          options: ["SV", "Pro"],
          icon: Sun,
          gradient: "from-rose-400 to-pink-300",
        },
      ],
    },
    {
      id: 5,
      name: "ZERO REFLECTION",
      subtitle: "Blue Cut Lenses",
      variants: [
        {
          type: "Blue Cut",
          features: [
            "Aqua Blue Coating - Nearly Invisible Reflections",
            "Super Durable Shield",
            "Super Hydrophobic",
          ],
          options: ["SV", "Pro"],
          icon: Zap,
          gradient: "from-cyan-500 to-blue-400",
        },
        {
          type: "Hi-Index",
          features: [
            "Aqua Blue Coating - Nearly Invisible Reflections",
            "Super Durable Shield",
            "Super Hydrophobic",
          ],
          options: ["SV"],
          icon: Star,
          gradient: "from-blue-500 to-indigo-400",
        },
        {
          type: "Poly Blue Cut",
          features: [
            "Aqua Blue Coating - Nearly Invisible Reflections",
            "Super Durable Shield",
            "Super Hydrophobic",
          ],
          options: ["SV"],
          icon: Shield,
          gradient: "from-teal-500 to-cyan-400",
        },
        {
          type: "PG Blue Cut",
          features: [
            "Aqua Blue Coating - Nearly Invisible Reflections",
            "Super Durable Shield",
            "Super Hydrophobic",
          ],
          options: ["SV", "Pro"],
          icon: Sun,
          gradient: "from-sky-400 to-blue-300",
        },
      ],
    },
    {
      id: 6,
      name: "MAGENTA",
      subtitle: "Blue Cut Lenses",
      variants: [
        {
          type: "Blue Cut",
          features: [
            "Shiny Reddish - Magenta Coating",
            "Crystal Clear Base",
            "Thin & Light Weight Design",
          ],
          options: ["SV", "Pro"],
          icon: Sparkles,
          gradient: "from-pink-500 to-rose-400",
        },
        {
          type: "Poly Blue Cut",
          features: [
            "Shiny Reddish - Magenta Coating",
            "Crystal Clear Base",
            "Thin & Light Weight Design",
          ],
          options: ["SV"],
          icon: Shield,
          gradient: "from-fuchsia-400 to-pink-300",
        },
      ],
    },
    {
      id: 7,
      name: "DRIVE+",
      subtitle: "Blue Cut Lenses",
      variants: [
        {
          type: "Blue Cut",
          features: [
            "Super Anti-Glare Coating",
            "UV 420 Blue Light Protection",
            "Durable All-IN-ONE Lens",
          ],
          options: ["SV", "Pro"],
          icon: Eye,
          gradient: "from-orange-400 to-red-300",
        },
        {
          type: "Hi-Index",
          features: [
            "Super Anti-Glare Coating",
            "UV 420 Blue Light Protection",
            "Durable All-IN-ONE Lens",
          ],
          options: ["SV"],
          icon: Star,
          gradient: "from-red-400 to-pink-300",
        },
        {
          type: "PG Blue Cut",
          features: [
            "Super Anti-Glare Coating",
            "UV 420 Blue Light Protection",
            "Durable All-IN-ONE Lens",
          ],
          options: ["SV", "Pro"],
          icon: Sun,
          gradient: "from-yellow-400 to-orange-300",
        },
      ],
    },
    {
      id: 8,
      name: "ShieldX Tinted",
      subtitle: "Hard Coat Lenses",
      variants: [
        {
          type: "Tinted",
          features: [
            "UV 400 Protection",
            "Scratch Resistance",
            "High Durability",
          ],
          options: ["SV", "Pro"],
          icon: Sun,
          gradient: "from-amber-500 to-yellow-400",
        },
      ],
    },
  ];

  const FeatureIcon = ({ feature }) => {
    if (feature.includes("UV") || feature.includes("Blue Light"))
      return <Eye className="w-5 h-5" />;
    if (feature.includes("Scratch") || feature.includes("Impact"))
      return <Shield className="w-5 h-5" />;
    if (feature.includes("Sun") || feature.includes("Tint"))
      return <Sun className="w-5 h-5" />;
    if (feature.includes("Clear") || feature.includes("Crystal"))
      return <Sparkles className="w-5 h-5" />;
    return <Star className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Roximo Lenses
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#products"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Products
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-12 shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Premium Vision Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience the future of optical excellence with our cutting-edge
              lens technology. Crystal clear vision, ultimate protection, and
              unmatched durability.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-12 shadow-2xl">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Us
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner in premium optical solutions, serving
                Jodhpur with excellence since years
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Story
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Located in the heart of Jodhpur, Roximo Lenses has been at
                  the forefront of providing premium optical solutions to our
                  valued customers. We specialize in high-quality lenses that
                  combine cutting-edge technology with exceptional
                  craftsmanship.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our commitment to excellence and customer satisfaction has
                  made us a trusted name in the optical industry. We believe
                  that clear vision is essential for a better quality of life,
                  and we're dedicated to providing the best possible solutions
                  for all your vision needs.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Trusted by thousands of satisfied customers
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800">
                      Our Mission
                    </h5>
                  </div>
                  <p className="text-gray-600">
                    To provide exceptional optical solutions that enhance vision
                    and improve lives through innovative technology and
                    personalized service.
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800">
                      Our Values
                    </h5>
                  </div>
                  <p className="text-gray-600">
                    Quality, integrity, and customer satisfaction are at the
                    core of everything we do. We're committed to delivering
                    excellence in every lens we provide.
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800">
                      Our Team
                    </h5>
                  </div>
                  <p className="text-gray-600">
                    Our experienced professionals are dedicated to helping you
                    find the perfect lens solution tailored to your specific
                    needs and lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Premium Collection
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of high-quality lenses designed
              for every vision need
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={product.id} className="relative">
                {/* Product Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${product.variants[0].gradient} rounded-2xl flex items-center justify-center shadow-2xl mr-4`}
                    >
                      {React.createElement(product.variants[0].icon, {
                        className: "w-8 h-8 text-white",
                      })}
                    </div>
                    <div className="text-left">
                      <h4 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {product.name}
                      </h4>
                      <p className="text-xl text-gray-600">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Variants Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {product.variants.map((variant, vIndex) => (
                    <div
                      key={vIndex}
                      className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15"
                    >
                      {/* Variant Header */}
                      <div className="text-center mb-6">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${variant.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        >
                          {React.createElement(variant.icon, {
                            className: "w-6 h-6 text-white",
                          })}
                        </div>
                        <h5 className="text-xl font-bold text-gray-800 mb-2">
                          {variant.type}
                        </h5>
                        <div className="flex justify-center space-x-2 mb-4">
                          {variant.options.map((option, oIndex) => (
                            <span
                              key={oIndex}
                              className="text-sm bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-1 rounded-full font-medium"
                            >
                              {option}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3">
                        <h6 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                          Key Features
                        </h6>
                        {variant.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-start space-x-3 text-gray-700 bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-all duration-200"
                          >
                            <FeatureIcon feature={feature} />
                            <span className="text-sm font-medium leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Separator line for visual distinction */}
                {index < products.length - 1 && (
                  <div className="mt-16 flex justify-center">
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-50"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Why Choose Roximo?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Premium Quality
                </h4>
                <p className="text-gray-600">
                  Industry-leading optical technology with superior durability
                  and clarity
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Advanced Protection
                </h4>
                <p className="text-gray-600">
                  Comprehensive UV and blue light protection for your eyes
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Innovative Design
                </h4>
                <p className="text-gray-600">
                  Cutting-edge coatings and treatments for optimal performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/90 rounded-3xl border border-gray-200 p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className="text-xl text-gray-700">
                Ready to upgrade your vision? Contact us today
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Phone */}
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Call Us
                </h4>
                <a
                  href="tel:+918112272357"
                  className="text-blue-600 hover:text-blue-700 transition-colors text-lg"
                >
                  +91 81122 72357
                </a>
              </div>

              {/* Email */}
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Email Us
                </h4>
                <a
                  href="mailto:shivalenshousejdp@gmail.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors text-lg break-all"
                >
                  shivalenshousejdp@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Visit Us
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Roximo Lenses
                  <br />
                  Shop No. 13-14, MGH Main Road
                  <br />
                  Jodhpur - 342001 (Raj.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default RoximoLensesLanding;
