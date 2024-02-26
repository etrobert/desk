import InnerLayout from './InnerLayout';

import '../index.css';
import './layout.css';

import type { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
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
      <body>
        <div id="root">
          <div className="AppLayout">
            <InnerLayout>{children}</InnerLayout>
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
