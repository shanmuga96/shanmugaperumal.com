"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps
{
  href: string;
  children: React.ReactNode;
}

export default function NavLink ( { href, children }: NavLinkProps )
{
  const pathname = usePathname();

  // Keep a section active on its sub-pages, e.g. /writing/some-post.
  const isActive = pathname === href || pathname.startsWith( `${ href }/` );

  return (
    <Link
      href={ href }
      aria-current={ isActive ? "page" : undefined }
      className={ `rounded-sm underline-offset-8 decoration-2 transition-colors hover:text-black hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 ${ isActive
        ? "font-medium text-black underline"
        : "text-neutral-600"
        }` }
    >
      { children }
    </Link>
  );
}
