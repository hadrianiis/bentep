interface SocialLink {
  label: string;
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-subtitle font-semibold opacity-30 hover:opacity-60 transition-opacity"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

