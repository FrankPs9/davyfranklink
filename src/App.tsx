const desktopBackground = { url: "/assets/desktop-background.png" };
const mobileBackground = { url: "/assets/mobile-background.png" };
const portrait = { url: "/assets/portrait.png" };
const desktopBehance = { url: "/assets/desktop-behance.png" };
const mobileBehance = { url: "/assets/mobile-behance.png" };
const desktopWhatsapp = { url: "/assets/desktop-whatsapp.png" };
const mobileWhatsapp = { url: "/assets/mobile-whatsapp.png" };
const desktopInstagram = { url: "/assets/desktop-instagram.png" };
const mobileInstagram = { url: "/assets/mobile-instagram.png" };
const consultation = { url: "/assets/mobile-consultation.png" };
import { portfolioLinks } from "./lib/portfolio-links";


const cards = [
  { label: "Ver portafolio en Behance", href: portfolioLinks.behance, desktop: desktopBehance.url, mobile: mobileBehance.url, alt: "Algunos de mis proyectos — Ver portafolio" },
  { label: "Solicitar un presupuesto por WhatsApp", href: portfolioLinks.whatsapp, desktop: desktopWhatsapp.url, mobile: mobileWhatsapp.url, alt: "Solicita un servicio — Realizar un presupuesto" },
  { label: "Seguir a Davy Frank en Instagram", href: portfolioLinks.instagram, desktop: desktopInstagram.url, mobile: mobileInstagram.url, alt: "Echa un vistazo a mi Instagram — Sígueme en Instagram" },
];

export default function App() {
  return (
    <main className="portfolio-page">
      <picture className="page-background" aria-hidden="true">
        <source media="(max-width: 760px)" srcSet={mobileBackground.url} />
        <img src={desktopBackground.url} alt="" />
      </picture>
      <div className="portfolio-layout">
        <section className="profile" aria-label="Davy Frank, diseñador gráfico">
          <img className="profile-portrait" src={portrait.url} width={424} height={660} alt="Davy Frank" fetchPriority="high" />
          <div className="profile-specialties"><span>Social media</span><span>Diseñador web</span></div>
          <h1 className="profile-title"><strong>Davy Frank</strong> | Diseñador Gráfico</h1>
          <p className="profile-description">¿Buscas un presupuesto para tu proyecto o quieres ver mi portafolio? Solo tienes que hacer clic en los botones de al lado. 🔥</p>
          <a className="mobile-consultation" href={portfolioLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Solicitar una asesoría por WhatsApp">
            <img src={consultation.url} width={406} height={53} alt="Solicitar una asesoría" />
          </a>
        </section>
        <nav className="portfolio-cards" aria-label="Portafolio y contacto">
          {cards.map((card) => (
            <a key={card.href} className="portfolio-card" href={card.href} target="_blank" rel="noopener noreferrer" aria-label={card.label}>
              <picture>
                <source media="(max-width: 760px)" srcSet={card.mobile} />
                <img src={card.desktop} alt={card.alt} width={812} height={281} />
              </picture>
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
