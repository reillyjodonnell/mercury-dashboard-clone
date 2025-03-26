import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

// Local fonts
export const arcadiaDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ArcadiaDisplay-Variable.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-arcadia-display',
});

export const arcadiaText = localFont({
  src: [
    {
      path: '../../public/fonts/ArcadiaText-Variable.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-arcadia-text',
});

export const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMontreal-Variable.woff',
      style: 'normal',
    },
  ],
  variable: '--font-pp-neue-montreal',
});
