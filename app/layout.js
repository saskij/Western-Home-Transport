import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Western Home Transport | Built to Move Structures That Matter",
  description:
    "Western Home Transport Inc — Oversized & modular structure transport specialists serving Idaho and the Northwest since 1996. Based in Boise, ID.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ── GLOBAL NAVBAR ── */}
        <Navbar />

        {/* ── MAIN CONTENT ── */}
        <main>{children}</main>

        {/* ── GLOBAL FOOTER ── */}
        <footer className="footer">
          <div className="footerGrid">

            {/* Brand & Address */}
            <div className="footerBrand">
              <div className="footerLogoWrap">
                <Image
                  src="/Western-Home-Transport/new_logo.png"
                  alt="Western Home Transport"
                  width={200}
                  height={123}
                  className="footerLogoImg"
                />
              </div>
              <a href="https://maps.google.com/?q=10227+S+Federal+Way,+Boise,+ID+83716" target="_blank" rel="noopener noreferrer" className="footerAddr clickable">
                10227 S Federal Way
                <br />
                Boise, ID 83716
              </a>

              <div className="footerSocials">
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" /></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footerLinks">
              <h4 className="footerHeading">Quick Links</h4>
              <Link href="/services">Services</Link>
              <Link href="/fleet">Fleet</Link>
              <Link href="/contact">Contact</Link>
            </div>

            {/* Legal / Policy */}
            <div className="footerLinks">
              <h4 className="footerHeading">Legal</h4>
              <Link href="/sitemap">Site Map</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>

          </div>
          <div className="footerBottom">
            <p>&copy; 2026 Western Home Transport Inc. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
