'use client';

import { SocialLinks } from './social-links';
import { TransitionTrigger } from './ui/transition-trigger';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Služby',
    links: [
      { label: 'Služby (prehľad)', href: '/#sluzby' },
      { label: 'Kancelárske a firemné priestory', href: '/services/kancelarske-a-firemne-priestory' },
      { label: 'Ambulancie a zdravotnícke zariadenia', href: '/services/ambulancie-a-zdravotnicke-zariadenia' },
      { label: 'Komplexné upratovanie', href: '/services/komplexne-upratovanie' },
      { label: 'Tepovanie', href: '/services/tepovanie' },
    ],
  },
  {
    title: 'Spoločnosť',
    links: [
      { label: 'O nás', href: '/about' },
      { label: 'Galéria', href: '/gallery' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  },
];

const socialLinks = [
  { label: 'Instagram', url: 'https://instagram.com/bentep' },
  { label: 'Facebook', url: 'https://facebook.com/bentep' },
  { label: 'YouTube', url: 'https://youtube.com/@bentep' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Main footer content */}
      <div className="px-sides py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top section - Brand and description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-6">
              <TransitionTrigger
                href="/"
                className="text-2xl font-black uppercase text-foreground mb-4 block"
              >
                Bentep
              </TransitionTrigger>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                Profesionálne tepovanie vozidiel a interiérov. Poskytujeme kvalitné služby 
                tepovania aut, gaučov, kobercov a sedačiek s použitím najlepších materiálov 
                a moderných technológií.
              </p>
              <SocialLinks links={socialLinks} />
            </div>

            {/* Links sections */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-8 justify-end">
                {footerSections.map((section) => (
                  <div key={section.title} className="space-y-4 t">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <TransitionTrigger
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-quad-out"
                          >
                            {link.label}
                          </TransitionTrigger>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </div>

      {/* Bottom section - Copyright and legal */}
      <div className="border-t border-border bg-muted/30">
        <div className="px-sides py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © {currentYear} Bentep. Všetky práva vyhradené.
              </div>
              <div className="flex gap-6 text-sm">
                <TransitionTrigger
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-quad-out"
                >
                  Ochrana údajov
                </TransitionTrigger>
                <TransitionTrigger
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-quad-out"
                >
                  Podmienky používania
                </TransitionTrigger>
                <TransitionTrigger
                  href="/cookies"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-quad-out"
                >
                  Cookies
                </TransitionTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
