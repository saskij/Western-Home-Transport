"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>

      {/* ── HERO ── */}
      <header id="home" className={styles.hero}>
        <Image
          src="/new_hero.jpg"
          alt="Western Home Transport Peterbilt truck hauling a modular home"
          fill
          priority
          className={styles.heroBgImg}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            BUILT TO MOVE STRUCTURES
            <br />
            THAT MATTER
          </h1>
          <p className={styles.heroSub}>
            Serving Idaho and the Northwest since 1996.
          </p>
          <div className={styles.dotNumbers}>
            <span>USDOT Number: 705753</span>
            <span className={styles.dotDivider}>|</span>
            <span>MC Number (Docket): MC-325255</span>
          </div>
          <div className={styles.heroActions}>
            <Link href="/contact" className="btnHeroSolid">
              Request a Quote
            </Link>
            <Link href="/fleet" className="btnHeroGhost">
              View Our Fleet
            </Link>
          </div>
        </div>
      </header>

      {/* ── TRUST BAR ── */}
      <section className={`${styles.trustBar} scroll-reveal`}>
        <div className={styles.trustItems}>
          <div className={styles.trustItem}>
            <span className={styles.trustKicker}>Fleet</span>
            <span className={styles.trustValue}>14+ Power Units</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustKicker}>Team</span>
            <span className={styles.trustValue}>14 Professional Drivers</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustKicker}>Founded</span>
            <span className={styles.trustValue}>Since 1996</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustKicker}>Location</span>
            <span className={styles.trustValue}>10227 S Federal Way, Boise</span>
          </div>
        </div>
      </section>

      {/* ── WHAT WE MOVE ── */}
      <section id="services" className={`${styles.servicesSection} scroll-reveal`}>
        <h2 className={styles.sectionHeading}>WHAT WE MOVE</h2>
        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/wht_modular.png"
                alt="Modular home transport"
                width={600}
                height={400}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Modular Homes</h3>
              <p className={styles.cardDesc}>
                Modular homes dolor sit amet, consectetur adipiscing unto real
                job sites.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/wht_timber.png"
                alt="Timber structure transport"
                width={600}
                height={400}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Timber Structures</h3>
              <p className={styles.cardDesc}>
                Timber structures at miinnanosumber comparting real job sites.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/wht_oversized.png"
                alt="Oversized building component transport"
                width={600}
                height={400}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>
                Oversized Building
                <br />
                Components
              </h3>
              <p className={styles.cardDesc}>
                Oversized building components can agribis across the Northwest
                region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET ── */}
      <section id="fleet" className={`${styles.fleetSection} scroll-reveal`}>
        <div className={styles.fleetText}>
          <h2 className={styles.fleetTitle}>
            HEAVY EQUIPMENT.
            <br />
            PRECISION LOGISTICS.
          </h2>
          <p className={styles.fleetBody}>
            Equipped for the demands of Northwest terrain, our fleet is built
            exclusively for structural transport. Utilizing custom stretch
            trailers, heavy-duty drop decks, and specialized day cab haulers,
            we ensure absolute stability for oversized and modular loads.
          </p>
          <Link href="/fleet" className="btnOutlineBorder">
            Learn More About Equipment
          </Link>
        </div>
        <div className={styles.fleetImageWrap}>
          <Image
            src="/images/wht_fleet.png"
            alt="Western Home Transport fleet in Boise yard"
            fill
            className={styles.fleetImg}
            sizes="60vw"
          />
          <div className={styles.fleetGradient} />
        </div>
      </section>

      {/* ── LEGACY / ABOUT ── */}
      <section id="about" className={`${styles.legacySection} scroll-reveal`}>
        <div className={styles.legacyWatermark}>SINCE 1996</div>
        <div className={styles.legacyInner}>
          <div className={styles.legacyPortrait}>
            <Image
              src="/images/wht_owner.png"
              alt="Jim Burgess - Owner"
              width={400}
              height={500}
              className={styles.legacyImg}
            />
            <div className={styles.ownerCaption}>
              <span className={styles.ownerName}>Jim Burgess</span>
              <span className={styles.ownerTitle}>Owner</span>
            </div>
          </div>
          <div className={styles.legacyTextBlock}>
            <h2 className={styles.legacyHeadline}>
              Family-Owned. Idaho Built.
            </h2>
            <p className={styles.legacyBody}>
              Moving Structures Across the Northwest for Nearly 30 Years.
            </p>
            <div className={styles.leadershipTeam}>
              <div className={styles.leader}>
                <h4>Tony Schwab</h4>
                <p>Operations Manager</p>
              </div>
              <div className={styles.leader}>
                <h4>Debi Bush</h4>
                <p>Logistics / Dispatch</p>
              </div>
              <div className={styles.leader}>
                <h4>Heidie Webb</h4>
                <p>Finance / Office Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="mapSection scroll-reveal">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.317581781297!2d-116.14207962381223!3d43.53744646190479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae5201c13bc947%3A0xe7f920da71c6dd68!2s10227%20S%20Federal%20Way%2C%20Boise%2C%20ID%2083716!5e0!3m2!1sen!2sus!4v1703080000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </>
  );
}
