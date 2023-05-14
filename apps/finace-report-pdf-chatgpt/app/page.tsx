import { Analytics } from '@vercel/analytics/react';

import { Home } from '@chat/ui';

import { getServerSideConfig } from './config/server';

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
