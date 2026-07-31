import Link from "next/link";
import Container from "@/components/layout/Container";

const navigation = [
  {
    name: "Writing",
    href: "/writing",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar ()
{
  return (
    <header className="border-b border-neutral-200">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            Shanmugaperumal S.
          </Link>

          <ul className="flex items-center gap-6 text-sm">
            { navigation.map( ( item ) => (
              <li key={ item.name }>
                <Link
                  href={ item.href }
                  className="text-neutral-600 transition-colors hover:text-black"
                >
                  { item.name }
                </Link>
              </li>
            ) ) }
          </ul>
        </nav>
      </Container>
    </header>
  );
}