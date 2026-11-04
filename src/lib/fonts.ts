import localFont from "next/font/local";

// Geist has no Tamil glyphs, so Tamil text uses Noto Sans Tamil.
// Bundled so builds don't depend on Google Fonts. This is the Tamil subset, so
// Latin letters and punctuation fall back to Geist.
export const notoSansTamil = localFont( {
  src: "../assets/fonts/NotoSansTamil-Variable-tamil.woff2",
  weight: "400 600",
  adjustFontFallback: false,
  fallback: [ "var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif" ],
} );
