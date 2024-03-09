import InnerLayout from './InnerLayout';
import { Inter } from 'next/font/google';

import '../index.css';
import './layout.css';

const inter = Inter({ subsets: ['latin'] });

import type { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={['h-full', inter.className].join(' ')} lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <meta name="theme-color" content="#000000" />
        <title>Desk</title>
      </head>
      <body className="h-full">
        <div className="h-full" id="root">
          <div className="AppLayout">
            <InnerLayout>{children}</InnerLayout>
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
