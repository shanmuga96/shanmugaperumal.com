import { Noto_Sans_Tamil } from "next/font/google";

// Geist has no Tamil glyphs, so Tamil text uses Noto Sans Tamil.
export const notoSansTamil = Noto_Sans_Tamil( {
  subsets: [ "tamil" ],
  weight: [ "400", "500", "600" ],
} );
