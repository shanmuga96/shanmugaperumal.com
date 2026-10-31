import Container from "@/components/layout/Container";
import SocialIcon from "@/components/ui/SocialIcons";
import { socialLinks } from "@/data/socialLinks";

export default function Footer ()
{
  return (
    <footer className="border-t border-neutral-200 py-8">
      <Container>
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-600">
            © { new Date().getFullYear() } Shanmugaperumal Seenivasan.
          </p>

          <ul className="-mx-2.5 flex flex-wrap items-center gap-1">
            { socialLinks.map( ( link ) => (
              <li key={ link.name }>
                <a
                  href={ link.href }
                  target="_blank"
                  rel={ link.isProfile ? "me noopener noreferrer" : "noopener noreferrer" }
                  aria-label={ link.name }
                  title={ link.name }
                  className="flex h-10 w-10 items-center justify-center rounded-sm text-neutral-500 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <SocialIcon name={ link.icon } className="h-5 w-5" />
                </a>
              </li>
            ) ) }
          </ul>
        </div>
      </Container>
    </footer>
  );
}
