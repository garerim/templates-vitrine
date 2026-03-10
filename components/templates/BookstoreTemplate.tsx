export function BookstoreTemplate() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fdf6ed", color: "#2c1a0e", fontFamily: "'Georgia', serif" }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-10 py-5"
        style={{ backgroundColor: "#8B4513", color: "#fdf6ed" }}
      >
        <div className="text-xl font-bold tracking-wide">
          📚 Le Coin des Pages
        </div>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "#f4e9d5" }}>
          <a href="#" className="hover:text-white transition-colors">Catalogue</a>
          <a href="#" className="hover:text-white transition-colors">Coups de cœur</a>
          <a href="#" className="hover:text-white transition-colors">Événements</a>
          <a href="#" className="hover:text-white transition-colors">Nous trouver</a>
        </div>
        <button
          className="px-5 py-2 text-sm rounded transition-colors"
          style={{ backgroundColor: "#7d9a6e", color: "#ffffff" }}
        >
          Commander en ligne
        </button>
      </nav>

      {/* Hero */}
      <section
        className="relative px-6 py-24 text-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1400&q=80&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(244,233,213,0.84)" }} />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-xs tracking-[0.4em] uppercase" style={{ color: "#7d9a6e" }}>
            Librairie indépendante depuis 1987
          </p>
          <h1 className="mb-6 text-6xl md:text-8xl font-bold" style={{ color: "#2c1a0e" }}>
            Le Coin<br />des <em style={{ color: "#8B4513" }}>Pages</em>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed" style={{ color: "#6b5040" }}>
            Votre librairie de quartier, un espace chaleureux où chaque livre est une invitation
            au voyage. Romans, essais, jeunesse, BD — nous aimons les livres autant que vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 text-sm rounded transition-colors"
              style={{ backgroundColor: "#8B4513", color: "#fdf6ed" }}
            >
              Découvrir le catalogue
            </button>
            <button
              className="px-8 py-3 text-sm rounded border transition-colors"
              style={{ borderColor: "#8B4513", color: "#8B4513" }}
            >
              Coups de cœur
            </button>
          </div>
        </div>
      </section>

      {/* Coups de cœur */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-3xl font-bold" style={{ color: "#8B4513" }}>Nos coups de cœur</h2>
          <p className="mb-10 text-sm" style={{ color: "#7d9a6e" }}>Sélection de la semaine par notre équipe</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { emoji: "📖", title: "L'Automne des Âmes", author: "Marie Lenoir", genre: "Roman", price: "21€" },
              { emoji: "📗", title: "La Forêt Silencieuse", author: "Paul Destin", genre: "Nature", price: "18€" },
              { emoji: "📕", title: "Cartographie du Possible", author: "Inès Faurel", genre: "Essai", price: "24€" },
              { emoji: "📘", title: "Les Enfants du Port", author: "Théo Galais", genre: "Jeunesse", price: "16€" },
            ].map((book) => (
              <div
                key={book.title}
                className="p-5 rounded-sm cursor-pointer transition-shadow hover:shadow-md"
                style={{ backgroundColor: "#f4e9d5", border: "1px solid #e0c8a0" }}
              >
                <div className="mb-3 flex h-36 items-center justify-center rounded-sm text-5xl"
                  style={{ backgroundColor: "#e8d5b0" }}>
                  {book.emoji}
                </div>
                <p className="mb-1 text-xs uppercase tracking-widest" style={{ color: "#7d9a6e" }}>{book.genre}</p>
                <h3 className="mb-1 font-bold leading-tight" style={{ color: "#2c1a0e" }}>{book.title}</h3>
                <p className="mb-3 text-sm" style={{ color: "#8B4513" }}>{book.author}</p>
                <p className="font-bold" style={{ color: "#2c1a0e" }}>{book.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements */}
      <section className="px-6 py-16" style={{ backgroundColor: "#f4e9d5" }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold" style={{ color: "#8B4513" }}>Prochains événements</h2>
          <div className="space-y-4">
            {[
              { date: "15 Mars", type: "Dédicace", title: "Marie Lenoir pour son nouveau roman", desc: "Venez rencontrer l'auteure et faire dédicacer vos livres" },
              { date: "22 Mars", type: "Club de lecture", title: "Discussion autour de 'La Forêt Silencieuse'", desc: "Échanges libres animés par notre libraire Jeanne" },
              { date: "5 Avril", type: "Atelier", title: "Écriture créative pour adultes", desc: "Atelier mensuel de 3h avec l'écrivain Théo Galais" },
            ].map((event) => (
              <div
                key={event.title}
                className="flex gap-6 p-5 rounded-sm"
                style={{ backgroundColor: "#fdf6ed", border: "1px solid #e0c8a0" }}
              >
                <div className="text-center shrink-0">
                  <div className="text-2xl font-bold" style={{ color: "#8B4513" }}>{event.date.split(" ")[0]}</div>
                  <div className="text-xs uppercase" style={{ color: "#7d9a6e" }}>{event.date.split(" ")[1]}</div>
                </div>
                <div>
                  <span
                    className="mb-1 inline-block rounded px-2 py-0.5 text-xs"
                    style={{ backgroundColor: "#7d9a6e", color: "#fff" }}
                  >
                    {event.type}
                  </span>
                  <h3 className="font-bold" style={{ color: "#2c1a0e" }}>{event.title}</h3>
                  <p className="text-sm" style={{ color: "#6b5040" }}>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-72 overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80&auto=format&fit=crop"
              alt="Le Coin des Pages — Librairie"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div>
            <p className="mb-3 text-xs tracking-[0.4em] uppercase" style={{ color: "#7d9a6e" }}>Notre histoire</p>
            <h2 className="mb-4 text-3xl font-bold" style={{ color: "#8B4513" }}>Une librairie de quartier</h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#6b5040" }}>
              Ouverte en 1987 par Marguerite et Henri Fauvel, Le Coin des Pages est une institution
              du quartier. Transmise à leur fille Jeanne en 2010, la librairie perpétue une tradition
              de conseil personnalisé et de passion pour la lecture.
            </p>
            <p className="leading-relaxed" style={{ color: "#6b5040" }}>
              Nos libraires lisent vraiment les livres qu'ils recommandent. C'est notre promesse.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-8 text-center text-sm" style={{ backgroundColor: "#8B4513", color: "#f4e9d5" }}>
        <p>Le Coin des Pages · 7 Rue Sainte-Catherine, Bordeaux · Lundi–Samedi 9h30–19h</p>
        <p className="mt-1">contact@lecoindes pages.fr · 05 56 00 00 00</p>
      </footer>
    </div>
  );
}
