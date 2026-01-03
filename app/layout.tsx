import "./globals.css";
import { Instagram, Github, Linkedin } from "lucide-react";

export const metadata = {
  title: "Taonga Pumulo",
  description: "Photography + Engineering Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <nav className="flex items-center justify-between">
            {/* Logo / Name */}
            <a href="/" className="text-xl font-semibold tracking-tight">
              TAONGA MWAKA
            </a>

            {/* Right side: links + socials */}
            <div className="flex items-center gap-6">
              {/* Page links */}
              <div className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase text-zinc-600">
                <a className="hover:text-zinc-900" href="/photo">Engineering</a>
                <a className="hover:text-zinc-900" href="/engineering">Photography</a>
                <a className="hover:text-zinc-900" href="/about">About Me</a>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/taongasphoto"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-zinc-600 hover:text-zinc-900"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://github.com/tmp5720"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-600 hover:text-zinc-900"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/taonga-mwaka-pumulo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-zinc-600 hover:text-zinc-900"
                >
                  <Linkedin size={18} />
                </a>

              </div>
            </div>
          </nav>

          <main className="mt-14">{children}</main>
        </div>
      </body>
    </html>
  );
}
