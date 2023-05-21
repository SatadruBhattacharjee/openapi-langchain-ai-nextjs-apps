/* eslint-disable @next/next/no-page-custom-font */
import { getBuildConfig } from './config/build';

const buildConfig = getBuildConfig();

export const metadata = {
  title: 'Enterprise ChatGPT',
  description: 'Enterprise ChatGPT Chat Bot.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#151515' },
  ],
  appleWebApp: {
    title: 'Enterprise ChatGPT',
    statusBarStyle: 'default',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="version" content={buildConfig.commitId} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
