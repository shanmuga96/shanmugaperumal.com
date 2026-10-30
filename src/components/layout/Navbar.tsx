import Link from "next/link";
import Container from "@/components/layout/Container";
import NavLink from "@/components/layout/NavLink";

const navigation = [
  {
    name: "Writing",
    href: "/writing",
  },
  {
    name: "Poetry",
    href: "/poetry",
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
        <nav
          aria-label="Main"
          className="flex flex-col gap-3 py-4 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:py-0"
        >
          <Link
            href="/"
            className="rounded-sm text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
          >
            Shanmugaperumal Seenivasan
          </Link>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            { navigation.map( ( item ) => (
              <li key={ item.name }>
                <NavLink href={ item.href }>
                  { item.name }
                </NavLink>
              </li>
            ) ) }
          </ul>
        </nav>
      </Container>
    </header>
  );
}
