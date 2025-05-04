// app/ui/fonts.ts
import localFont from 'next/font/local';

export const stockholmFont = localFont({
    src: [
        {
            path: '../public/fonts/Stockholm.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-stockholm-type',
    display: 'swap',
});

export const verdanaFont = localFont({
    src: [
        {
            path: '../public/fonts/Verdana.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Verdana-bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-verdana-type',
    display: 'swap',
});
