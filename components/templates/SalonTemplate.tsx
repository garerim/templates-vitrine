export function SalonTemplate() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fdfbf9", color: "#2d2d2d", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-6" style={{ backgroundColor: "#fdfbf9" }}>
        <div className="text-2xl font-light tracking-widest" style={{ color: "#2d2d2d" }}>
          studio <strong>élise</strong>
        </div>
        <div className="hidden md:flex gap-8 text-sm tracking-wider" style={{ color: "#8a8080" }}>
          <a href="#" className="hover:text-stone-900 transition-colors">Services</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Galerie</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Tarifs</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Contact</a>
        </div>
        <button
          className="px-6 py-2.5 text-sm tracking-wider rounded-full transition-colors"
          style={{ backgroundColor: "#f9a8d4", color: "#2d2d2d" }}
        >
          Prendre RDV
        </button>
      </nav>

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center px-10 md:px-16 py-20">
          <p className="mb-4 text-xs tracking-[0.4em] uppercase" style={{ color: "#f9a8d4" }}>
            Salon de coiffure · Paris Marais
          </p>
          <h1 className="mb-6 text-6xl md:text-7xl font-light leading-tight" style={{ color: "#2d2d2d" }}>
            Votre<br />beauté,<br /><em style={{ color: "#f9a8d4", fontStyle: "italic" }}>sublimée.</em>
          </h1>
          <p className="mb-10 max-w-md text-base leading-relaxed" style={{ color: "#8a8080" }}>
            Studio Élise est un espace dédié à la beauté contemporaine.
            Coupes, colorations, soins — tout est pensé pour révéler votre style unique.
          </p>
          <div className="flex gap-4">
            <button
              className="px-8 py-3 text-sm tracking-wider rounded-full transition-colors"
              style={{ backgroundColor: "#2d2d2d", color: "#fdfbf9" }}
            >
              Prendre rendez-vous
            </button>
            <button
              className="px-8 py-3 text-sm tracking-wider rounded-full border transition-colors"
              style={{ borderColor: "#e0d0c8", color: "#8a8080" }}
            >
              Nos services
            </button>
          </div>
        </div>
        <div
          className="overflow-hidden"
          style={{ minHeight: "400px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop"
            alt="Studio Élise — Salon de coiffure"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "400px" }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20" style={{ backgroundColor: "#fff5f8" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs tracking-[0.4em] uppercase" style={{ color: "#f9a8d4" }}>Ce que nous faisons</p>
            <h2 className="text-4xl font-light" style={{ color: "#2d2d2d" }}>Nos Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: "✂️", name: "Coupe & Coiffure", items: ["Coupe femme", "Coupe homme", "Brushing", "Mise en plis"], from: "35€" },
              { emoji: "🎨", name: "Coloration", items: ["Coloration globale", "Mèches & balayage", "Ombré hair", "Correction couleur"], from: "55€" },
              { emoji: "💆", name: "Soins & Treatments", items: ["Soin kératine", "Soin nutrition", "Lissage brésilien", "Traitement anti-chute"], from: "45€" },
            ].map((service) => (
              <div
                key={service.name}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "#fdfbf9", border: "1px solid #fce7f3" }}
              >
                <div className="mb-4 text-3xl">{service.emoji}</div>
                <h3 className="mb-4 text-lg font-semibold" style={{ color: "#2d2d2d" }}>{service.name}</h3>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm flex items-center gap-2" style={{ color: "#8a8080" }}>
                      <span style={{ color: "#f9a8d4" }}>•</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-medium" style={{ color: "#f9a8d4" }}>À partir de {service.from}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs tracking-[0.4em] uppercase" style={{ color: "#f9a8d4" }}>Notre équipe</p>
            <h2 className="text-4xl font-light" style={{ color: "#2d2d2d" }}>Rencontrez les artistes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Élise Martin", role: "Fondatrice & Coloriste", emoji: "👩‍🦱" },
              { name: "Camille Dubois", role: "Coiffeuse senior", emoji: "👩‍🦰" },
              { name: "Nina Paquet", role: "Spécialiste soins", emoji: "👩‍🦳" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full text-4xl"
                  style={{ backgroundColor: "#fce7f3" }}
                >
                  {member.emoji}
                </div>
                <h3 className="font-semibold" style={{ color: "#2d2d2d" }}>{member.name}</h3>
                <p className="text-sm" style={{ color: "#f9a8d4" }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-6 py-16 text-center"
        style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fff5f8 100%)" }}
      >
        <h2 className="mb-4 text-4xl font-light" style={{ color: "#2d2d2d" }}>
          Prête pour votre transformation ?
        </h2>
        <p className="mb-8 text-base" style={{ color: "#8a8080" }}>
          Réservez votre rendez-vous en ligne — c'est simple et rapide.
        </p>
        <button
          className="px-10 py-4 text-sm tracking-wider rounded-full font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#f9a8d4", color: "#2d2d2d" }}
        >
          Prendre rendez-vous
        </button>
      </section>

      {/* Footer */}
      <footer className="px-10 py-8 text-center text-sm" style={{ backgroundColor: "#2d2d2d", color: "#8a8080" }}>
        <p>Studio Élise · 18 Rue des Rosiers, Paris 4e · contact@studio-elise.fr</p>
        <p className="mt-1">Lundi–Samedi 9h–19h · 01 42 00 00 00</p>
      </footer>
    </div>
  );
}
