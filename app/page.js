"use client";

import { useEffect, useState } from "react";

const AGE_GATE_STORAGE_KEY = "cheddr-age-verified";

const navItems = [
  {
    label: "Flower",
    href: "https://cheddr.co/collections/thca-flower",
    src: "/assets/nav/flower.svg",
    width: 102,
    height: 56,
  },
  {
    label: "Gummies",
    href: "https://cheddr.co/collections/delta-9-d9-gummies",
    src: "/assets/nav/gummies.svg",
    width: 132,
    height: 56,
  },
  {
    label: "Prerolls",
    href: "https://cheddr.co/collections/thca-prerolls",
    src: "/assets/nav/prerolls.svg",
    width: 138,
    height: 56,
  },
  {
    label: "Concentrates",
    href: "https://cheddr.co/collections/thca-concentrates",
    src: "/assets/nav/concentrates.svg",
    width: 200,
    height: 56,
  },
  {
    label: "Bundles",
    href: "https://cheddr.co/collections/bundles",
    src: "/assets/nav/bundles.svg",
    width: 124,
    height: 56,
  },
];

const cards = [
  {
    id: "flower",
    label: "Flower",
    href: "https://cheddr.co/collections/thca-flower",
    src: "/assets/cards/flower-image.webp",
    imageAlt: "Cheddr flower jar with buds spilling out",
    cta: "SHOP FLOWER",
  },
  {
    id: "gummies",
    label: "Gummies",
    href: "https://cheddr.co/collections/delta-9-d9-gummies",
    src: "/assets/cards/gummies-image.png",
    imageAlt: "Cheddr gummies jar with red gummies",
    cta: "SHOP GUMMIES",
  },
  {
    id: "prerolls",
    label: "Prerolls",
    href: "https://cheddr.co/collections/thca-prerolls",
    src: "/assets/cards/prerolls-image.webp",
    imageAlt: "Cheddr preroll tubes with prerolls and diamonds",
    cta: "SHOP PREROLLS",
  },
  {
    id: "concentrates",
    label: "Concentrates",
    href: "https://cheddr.co/collections/thca-concentrates",
    src: "/assets/cards/concentrates-image.jpeg",
    imageAlt: "Cheddr concentrate jar with concentrate samples on rocks",
    cta: "SHOP CONCENTRATES",
  },
  {
    id: "bundles",
    label: "Bundles",
    href: "https://cheddr.co/collections/bundles",
    src: "/assets/cards/bundles-image.jpeg",
    imageAlt: "Cheddr mixed gummies lineup with multiple jars and floating gummies",
    cta: "SHOP BUNDLES",
  },
];

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  useEffect(() => {
    const storedValue =
      window.localStorage.getItem(AGE_GATE_STORAGE_KEY) === "true";

    setIsAgeVerified(storedValue);
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || isAgeVerified) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [hasMounted, isAgeVerified]);

  const handleAgeConfirm = () => {
    window.localStorage.setItem(AGE_GATE_STORAGE_KEY, "true");
    setIsAgeVerified(true);
  };

  const handleAgeDecline = () => {
    window.location.replace("https://www.google.com");
  };

  const showAgeGate = !hasMounted || !isAgeVerified;

  return (
    <>
      {showAgeGate ? (
        <div
          aria-labelledby="age-gate-title"
          aria-modal="true"
          className="ageGate"
          role="dialog"
        >
          <div className="ageGatePanel">
            <img
              alt="Cheddr logo"
              className="ageGateLogo"
              fetchPriority="high"
              src="/assets/cheddr-logo.webp"
            />
            <h2 className="ageGateTitle" id="age-gate-title">
              Are You 21 or Over?
            </h2>
            <div className="ageGateActions">
              <button
                className="ageGateButton ageGateButtonPrimary"
                onClick={handleAgeConfirm}
                type="button"
              >
                Yes
              </button>
              <button
                className="ageGateButton ageGateButtonSecondary"
                onClick={handleAgeDecline}
                type="button"
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <main
        aria-hidden={showAgeGate}
        className="pageShell"
        id="top"
        inert={showAgeGate ? "" : undefined}
      >
        <h1 className="srOnly">Cheddr image-led homepage</h1>

        <div className="contentWrap">
          <header className="masthead">
            <a
              aria-label="Cheddr home"
              className="brandMark"
              href="https://cheddr.co"
            >
              <img
                alt="Cheddr logo"
                className="brandImage"
                fetchPriority="high"
                src="/assets/cheddr-logo.webp"
              />
            </a>

            <nav aria-label="Primary" className="menuBar">
              {navItems.map((item) => (
                <a
                  aria-label={item.label}
                  className="menuItem"
                  href={item.href}
                  key={item.label}
                >
                  <img
                    alt=""
                    className="menuImage"
                    height={item.height}
                    src={item.src}
                    width={item.width}
                  />
                </a>
              ))}
            </nav>
          </header>
        </div>

        <section aria-labelledby="hero-label" className="heroBand">
          <h2 className="srOnly" id="hero-label">
            Featured hero
          </h2>

          <div className="contentWrap">
            <a
              aria-label="Visit Cheddr"
              className="heroFrame heroLink"
              href="https://cheddr.co"
            >
              <img
                alt="Cheddr gummies hero banner with jars and floating gummies"
                className="heroImage"
                fetchPriority="high"
                height="903"
                src="/assets/hero-banner.png"
                width="1280"
              />
            </a>
          </div>
        </section>

        <section aria-labelledby="collections-label" className="collectionsBand">
          <h2 className="srOnly" id="collections-label">
            Collections
          </h2>

          <div className="contentWrap">
            <div className="collectionGrid">
              {cards.map((card) => (
                <a
                  className="collectionCard"
                  href={card.href}
                  id={card.id}
                  key={card.id}
                >
                  <h3 className="collectionTitle">{card.label}</h3>
                  <div className="collectionMedia">
                    <img
                      alt={card.imageAlt}
                      className="collectionImage"
                      loading="lazy"
                      src={card.src}
                    />
                  </div>
                  <div className="collectionCta">{card.cta}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer aria-labelledby="footer-label" className="footerBand">
          <h2 className="srOnly" id="footer-label">
            Footer graphic
          </h2>

          <div className="contentWrap">
            <img
              alt="Static footer graphic with shop, about, info, email signup, and disclaimer panels"
              className="footerImage"
              height="640"
              loading="lazy"
              src="/assets/footer-shot.svg"
              width="1600"
            />
          </div>
        </footer>
      </main>
    </>
  );
}
