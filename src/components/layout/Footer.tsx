import Container from "@/components/layout/Container";

export default function Footer ()
{
  return (
    <footer className="border-t border-neutral-200 py-8">
      <Container>
        <p className="text-sm text-neutral-600">
          © { new Date().getFullYear() } Shanmugaperumal Seenivasan.
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          Built with Next.js, TypeScript & Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}