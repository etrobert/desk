import InnerLayout from './InnerLayout';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

import '../index.css';

const inter = Inter({ subsets: ['latin'] });

import type { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={cn('dark h-full', inter.className)} lang="en">
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
        <div className="flex h-full flex-col items-center justify-center gap-4 text-center text-2xl antialiased">
          <InnerLayout>{children}</InnerLayout>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
